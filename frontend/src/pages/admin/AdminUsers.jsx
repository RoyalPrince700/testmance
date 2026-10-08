import { useState, useEffect } from 'react';
import { adminAPI } from '../../utils/api';
import AdminSidebar from '../../components/AdminSidebar';
import { getAvatarSrc } from '../../utils/avatarUtils';
import { Search, Edit, Trash2, ShieldCheck } from 'lucide-react';

const fieldClass = 'h-11 w-full rounded-2xl border border-line bg-surface px-4 text-sm text-ink placeholder:text-slate focus:border-accent focus:outline-none';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    isActive: '',
    university: '',
    isAdmin: ''
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  });
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [pagination.page, searchTerm, filters]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        search: searchTerm || undefined,
        isActive: filters.isActive || undefined,
        university: filters.university || undefined,
        isAdmin: filters.isAdmin || undefined
      };

      Object.keys(params).forEach(key => {
        if (params[key] === undefined || params[key] === '') {
          delete params[key];
        }
      });

      const response = await adminAPI.getUsers(params);
      setUsers(response.data.users);
      setPagination(prev => ({
        ...prev,
        total: response.data.pagination.total,
        pages: response.data.pagination.pages
      }));
      setError(null);
    } catch (err) {
      console.error('Failed to fetch users:', err);
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUser = async (userId, updates) => {
    try {
      await adminAPI.updateUser(userId, updates);
      fetchUsers();
      setShowUserModal(false);
      setSelectedUser(null);
    } catch (err) {
      console.error('Failed to update user:', err);
      alert('Failed to update user');
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return;
    }

    try {
      await adminAPI.deleteUser(userId);
      fetchUsers();
    } catch (err) {
      console.error('Failed to delete user:', err);
      alert('Failed to delete user');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const frame = `min-h-screen bg-canvas pb-20 text-ink transition-[margin] duration-300 ${
    sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
  }`;

  const UserModal = ({ user, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      isActive: user.isActive,
      gems: user.gems,
      level: user.level
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      onUpdate(user._id, formData);
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4" onClick={onClose}>
        <div
          className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl border border-line bg-surface p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-user-title"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 id="edit-user-title" className="text-lg font-medium tracking-tight text-ink">Edit user</h2>
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label htmlFor="edit-username" className="mb-2 block text-sm font-medium text-ink">Username</label>
              <input
                id="edit-username"
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className={fieldClass}
                required
              />
            </div>

            <div>
              <label htmlFor="edit-email" className="mb-2 block text-sm font-medium text-ink">Email</label>
              <input
                id="edit-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={fieldClass}
                required
              />
            </div>

            <label className="flex items-start gap-3 rounded-2xl border border-line p-4">
              <input
                type="checkbox"
                checked={formData.isAdmin}
                onChange={(e) => setFormData({ ...formData, isAdmin: e.target.checked })}
                className="mt-1 h-4 w-4 accent-accent"
              />
              <span>
                <span className="block text-sm font-medium text-ink">Admin</span>
                <span className="mt-1 block text-sm text-slate">Can open the admin screens.</span>
              </span>
            </label>

            <label className="flex items-start gap-3 rounded-2xl border border-line p-4">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="mt-1 h-4 w-4 accent-accent"
              />
              <span>
                <span className="block text-sm font-medium text-ink">Active account</span>
                <span className="mt-1 block text-sm text-slate">Inactive accounts cannot sign in.</span>
              </span>
            </label>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="edit-gems" className="mb-2 block text-sm font-medium text-ink">Gems</label>
                <input
                  id="edit-gems"
                  type="number"
                  value={formData.gems}
                  onChange={(e) => setFormData({ ...formData, gems: parseInt(e.target.value, 10) || 0 })}
                  className={fieldClass}
                  min="0"
                />
              </div>
              <div>
                <label htmlFor="edit-level" className="mb-2 block text-sm font-medium text-ink">Level</label>
                <input
                  id="edit-level"
                  type="number"
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: parseInt(e.target.value, 10) || 1 })}
                  className={fieldClass}
                  min="1"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t border-line pt-4 sm:flex-row">
              <button type="submit" className="btn-primary w-full sm:w-auto">Save</button>
              <button type="button" onClick={onClose} className="btn-secondary w-full sm:w-auto">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <AdminSidebar onCollapseChange={setSidebarCollapsed} />

      <div className={frame}>
        <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
          <p className="text-sm font-medium text-accent">Admin</p>
          <h1 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
            Users
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">
            Search accounts, then edit status, gems, or level.
          </p>
        </header>

        <section className="mx-auto mt-12 max-w-6xl px-5 md:px-8">
          <div className="rounded-3xl border border-line bg-surface p-4 sm:p-5">
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" strokeWidth={1.75} />
                <input
                  type="search"
                  placeholder="Search by username or email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`${fieldClass} pl-10`}
                  aria-label="Search users"
                />
              </div>
              <select
                value={filters.isActive}
                onChange={(e) => setFilters({ ...filters, isActive: e.target.value })}
                className={`${fieldClass} md:w-40`}
                aria-label="Filter by status"
              >
                <option value="">All status</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
              <select
                value={filters.isAdmin}
                onChange={(e) => setFilters({ ...filters, isAdmin: e.target.value })}
                className={`${fieldClass} md:w-44`}
                aria-label="Filter by role"
              >
                <option value="">All users</option>
                <option value="true">Admins</option>
                <option value="false">Students</option>
              </select>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-4 max-w-6xl px-5 md:px-8">
          <div className="overflow-hidden rounded-3xl border border-line bg-surface">
            {loading ? (
              <div className="flex items-center justify-center gap-3 py-16">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-accent" role="status" aria-label="Loading users" />
              </div>
            ) : error ? (
              <div className="px-6 py-16 text-center">
                <p className="text-[15px] text-graphite">{error}</p>
                <button type="button" onClick={fetchUsers} className="btn-primary mt-4">Try again</button>
              </div>
            ) : users.length === 0 ? (
              <p className="px-6 py-16 text-center text-[15px] text-slate">No users match that search.</p>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[44rem] border-collapse text-left">
                    <caption className="sr-only">TestMancer users</caption>
                    <thead>
                      <tr className="border-b border-line bg-canvas">
                        <th scope="col" className="px-5 py-3 text-sm font-medium text-slate">User</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-slate">University</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-slate">Stats</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-slate">Status</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-slate">Joined</th>
                        <th scope="col" className="px-5 py-3 text-right text-sm font-medium text-slate">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user._id} className="border-b border-line last:border-b-0 hover:bg-canvas">
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={getAvatarSrc(user.avatar)}
                                alt=""
                                className="h-9 w-9 rounded-full border border-line object-cover"
                              />
                              <div className="min-w-0">
                                <p className="flex items-center gap-1.5 text-sm font-medium text-ink">
                                  <span className="truncate">{user.username}</span>
                                  {user.isAdmin && <ShieldCheck className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} aria-label="Admin" />}
                                </p>
                                <p className="truncate text-sm text-slate">{user.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <p className="text-sm text-ink">{user.university?.name || '—'}</p>
                            {user.university?.shortName && (
                              <p className="text-sm text-slate">{user.university.shortName}</p>
                            )}
                          </td>
                          <td className="px-4 py-4 text-sm text-ink">
                            Level {user.level}
                            <span className="text-slate"> · </span>
                            <span className="font-medium text-gem">{user.gems} gems</span>
                          </td>
                          <td className="px-4 py-4">
                            <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                              user.isActive ? 'bg-accent-soft text-accent' : 'bg-canvas text-slate'
                            }`}>
                              {user.isActive ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-slate">{formatDate(user.createdAt)}</td>
                          <td className="px-5 py-4">
                            <div className="flex items-center justify-end gap-1">
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedUser(user);
                                  setShowUserModal(true);
                                }}
                                className="rounded-full p-2 text-slate hover:text-ink"
                                aria-label={`Edit ${user.username}`}
                              >
                                <Edit className="h-4 w-4" strokeWidth={1.75} />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteUser(user._id)}
                                className="rounded-full p-2 text-slate hover:text-ink"
                                aria-label={`Delete ${user.username}`}
                              >
                                <Trash2 className="h-4 w-4" strokeWidth={1.75} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-col gap-3 border-t border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate">
                    Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total}
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                      disabled={pagination.page === 1}
                      className="btn-secondary disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                      disabled={pagination.page >= pagination.pages}
                      className="btn-secondary disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </div>

      {showUserModal && selectedUser && (
        <UserModal
          user={selectedUser}
          onClose={() => {
            setShowUserModal(false);
            setSelectedUser(null);
          }}
          onUpdate={handleUpdateUser}
        />
      )}
    </>
  );
};

export default AdminUsers;
