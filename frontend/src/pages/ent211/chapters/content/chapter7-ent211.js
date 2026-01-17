// Chapter 7: Sources of Finance and Basic Accounting Records for Entrepreneurs
// ENT 211 - Module 7

export const chapter7Content = {
  title: "Sources of Finance and Basic Accounting Records for Entrepreneurs",
  author: "Department of Business Administration",
  department: "Faculty of Management Sciences, University of Ilorin, Ilorin, Nigeria",
  sections: [
    {
      id: "introduction",
      title: "📖 Introduction",
      subtitle: "Financial Management for Entrepreneurs",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            This chapter covers various sources of finance available to entrepreneurs
            and the basic accounting records necessary for managing business finances.
            Understanding these concepts is crucial for entrepreneurs to make informed
            financial decisions and maintain accurate business records.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p class="text-blue-800 leading-relaxed">
              <strong>Learning Focus:</strong> This chapter will equip you with knowledge
              of financing options, accounting principles, and record-keeping practices
              essential for entrepreneurial success.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 15,
    },
    {
      id: "sources-of-finance",
      title: "💰 Sources of Finance for Entrepreneurs",
      subtitle: "Internal and External Funding Options",
      content: `
        <div class="space-y-6">
          <h3 class="text-xl font-semibold text-gray-800">Internal Sources of Finance</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Bootstrapping:</strong> Using personal savings, credit cards, and minimal external funding</li>
            <li><strong>Personal Savings:</strong> Entrepreneur's own accumulated funds</li>
            <li><strong>Retirement Accounts:</strong> Accessing 401(k) or pension funds (with penalties)</li>
            <li><strong>Home Equity:</strong> Borrowing against home value through loans or lines of credit</li>
            <li><strong>Life Insurance Policies:</strong> Cash value loans or withdrawals</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-800 mt-6">External Sources of Finance</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Bank Loans:</strong> Traditional financing from commercial banks</li>
            <li><strong>SBA Loans:</strong> Government-guaranteed loans for small businesses</li>
            <li><strong>Venture Capital:</strong> Equity investment from VC firms</li>
            <li><strong>Angel Investors:</strong> Individual investors providing capital for equity</li>
            <li><strong>Crowdfunding:</strong> Raising small amounts from large numbers of people</li>
            <li><strong>Grants:</strong> Non-repayable funds from government or foundations</li>
          </ul>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
            <p class="text-yellow-800">
              <strong>Key Consideration:</strong> Each funding source has different requirements,
              costs, and implications for business ownership and control.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 20,
    },
    {
      id: "bootstrapping-strategies",
      title: "🚀 Bootstrapping Strategies",
      subtitle: "Self-Funded Business Growth",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Bootstrapping involves funding business growth using internal resources
            and revenue generation rather than external financing.
          </p>

          <h3 class="text-xl font-semibold text-gray-800">Key Bootstrapping Techniques</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-gray-50 p-4 rounded">
              <h4 class="font-semibold">Revenue-Based Strategies</h4>
              <ul class="list-disc list-inside mt-2 text-sm">
                <li>Pre-selling products/services</li>
                <li>Service-based revenue before product launch</li>
                <li>Freelance consulting</li>
                <li>Partnership revenue sharing</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded">
              <h4 class="font-semibold">Cost Control Strategies</h4>
              <ul class="list-disc list-inside mt-2 text-sm">
                <li>Bartering services</li>
                <li>Negotiating with suppliers</li>
                <li>Using open-source software</li>
                <li>Working from home</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-800 mt-6">Advantages of Bootstrapping</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Maintains full ownership and control</li>
            <li>Forces disciplined financial management</li>
            <li>Allows organic growth based on revenue</li>
            <li>Reduces dependency on external stakeholders</li>
            <li>Builds credibility through self-sufficiency</li>
          </ul>
        </div>
      `,
      estimatedTime: 18,
    },
    {
      id: "equity-financing",
      title: "📈 Equity Financing",
      subtitle: "Venture Capital and Angel Investment",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Equity financing involves exchanging ownership shares in the business
            for capital investment from external investors.
          </p>

          <h3 class="text-xl font-semibold text-gray-800">Venture Capital</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Professional Investment Firms:</strong> Managed by experienced investors</li>
            <li><strong>High Growth Focus:</strong> Targets businesses with 10x growth potential</li>
            <li><strong>Structured Process:</strong> Rigorous due diligence and term sheets</li>
            <li><strong>Board Representation:</strong> Investors often require board seats</li>
            <li><strong>Exit Strategy:</strong> IPO or acquisition within 5-7 years</li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-800 mt-6">Angel Investors</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Individual Investors:</strong> High-net-worth individuals</li>
            <li><strong>Mentorship Role:</strong> Often provide guidance beyond capital</li>
            <li><strong>Flexible Terms:</strong> Less formal than VC investments</li>
            <li><strong>Smaller Investments:</strong> Typically $25K to $100K</li>
            <li><strong>Network Access:</strong> Connections to other investors and partners</li>
          </ul>

          <div class="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
            <p class="text-red-800">
              <strong>Dilution Impact:</strong> Equity financing reduces ownership percentage
              and may involve loss of some operational control.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 22,
    },
    {
      id: "debt-financing",
      title: "🏦 Debt Financing",
      subtitle: "Loans and Credit Facilities",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Debt financing involves borrowing money that must be repaid with interest,
            without giving up ownership in the business.
          </p>

          <h3 class="text-xl font-semibold text-gray-800">Types of Business Loans</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-2 text-left">Loan Type</th>
                  <th class="border border-gray-300 px-4 py-2 text-left">Amount Range</th>
                  <th class="border border-gray-300 px-4 py-2 text-left">Repayment Period</th>
                  <th class="border border-gray-300 px-4 py-2 text-left">Collateral Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">Term Loan</td>
                  <td class="border border-gray-300 px-4 py-2">$10K - $500K</td>
                  <td class="border border-gray-300 px-4 py-2">1-10 years</td>
                  <td class="border border-gray-300 px-4 py-2">Often required</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-2">Line of Credit</td>
                  <td class="border border-gray-300 px-4 py-2">$10K - $100K</td>
                  <td class="border border-gray-300 px-4 py-2">Revolving</td>
                  <td class="border border-gray-300 px-4 py-2">Sometimes</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">SBA 7(a) Loan</td>
                  <td class="border border-gray-300 px-4 py-2">$5K - $5M</td>
                  <td class="border border-gray-300 px-4 py-2">Up to 25 years</td>
                  <td class="border border-gray-300 px-4 py-2">Government guaranteed</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-2">Equipment Loan</td>
                  <td class="border border-gray-300 px-4 py-2">Equipment cost</td>
                  <td class="border border-gray-300 px-4 py-2">3-7 years</td>
                  <td class="border border-gray-300 px-4 py-2">Equipment itself</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="text-xl font-semibold text-gray-800 mt-6">Credit Scoring Factors</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Personal Credit History:</strong> FICO score and payment history</li>
            <li><strong>Business Financials:</strong> Revenue, profitability, cash flow</li>
            <li><strong>Collateral:</strong> Assets available as security</li>
            <li><strong>Industry Risk:</strong> Sector-specific lending criteria</li>
            <li><strong>Management Experience:</strong> Entrepreneurial track record</li>
          </ul>
        </div>
      `,
      estimatedTime: 25,
    },
    {
      id: "government-programs",
      title: "🏛️ Government Financing Programs",
      subtitle: "Public Sector Support for Entrepreneurs",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Governments provide various programs to support entrepreneurial activities
            and small business development.
          </p>

          <h3 class="text-xl font-semibold text-gray-800">Major Government Programs</h3>
          <div class="space-y-4">
            <div class="border border-gray-200 rounded p-4">
              <h4 class="font-semibold text-lg">Small Business Administration (SBA) Loans</h4>
              <ul class="list-disc list-inside mt-2 text-gray-700">
                <li>7(a) loan program: General purpose loans up to $5 million</li>
                <li>CDC/504 loans: Fixed asset financing up to $5.8 million</li>
                <li>Microloans: Small loans up to $50,000</li>
                <li>Express loans: Faster processing for amounts up to $350,000</li>
              </ul>
            </div>

            <div class="border border-gray-200 rounded p-4">
              <h4 class="font-semibold text-lg">Research and Development Grants</h4>
              <ul class="list-disc list-inside mt-2 text-gray-700">
                <li>SBIR/STTR programs: Federal funding for tech innovation</li>
                <li>NSF grants: Scientific and engineering research support</li>
                <li>State innovation grants: Local economic development funds</li>
              </ul>
            </div>

            <div class="border border-gray-200 rounded p-4">
              <h4 class="font-semibold text-lg">Specialized Programs</h4>
              <ul class="list-disc list-inside mt-2 text-gray-700">
                <li>Minority Business Development Agency (MBDA)</li>
                <li>Women-owned business programs</li>
                <li>Veteran entrepreneur initiatives</li>
                <li>Rural development loans</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 20,
    },
    {
      id: "basic-accounting-principles",
      title: "📊 Basic Accounting Principles",
      subtitle: "Fundamental Concepts for Entrepreneurs",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Accounting principles provide the framework for recording, analyzing,
            and reporting financial information.
          </p>

          <h3 class="text-xl font-semibold text-gray-800">Core Accounting Principles</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-3">
              <div class="bg-blue-50 p-3 rounded">
                <h4 class="font-semibold">GAAP Principles</h4>
                <ul class="list-disc list-inside text-sm mt-1">
                  <li>Revenue Recognition</li>
                  <li>Matching Principle</li>
                  <li>Cost Principle</li>
                  <li>Full Disclosure</li>
                </ul>
              </div>
              <div class="bg-green-50 p-3 rounded">
                <h4 class="font-semibold">Conservatism</h4>
                <p class="text-sm">Anticipate losses but not gains</p>
              </div>
            </div>
            <div class="space-y-3">
              <div class="bg-purple-50 p-3 rounded">
                <h4 class="font-semibold">Consistency</h4>
                <p class="text-sm">Use same accounting methods</p>
              </div>
              <div class="bg-orange-50 p-3 rounded">
                <h4 class="font-semibold">Materiality</h4>
                <p class="text-sm">Only report significant items</p>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-800 mt-6">Accounting Equation</h3>
          <div class="bg-gray-100 p-4 rounded text-center">
            <p class="text-xl font-mono">Assets = Liabilities + Owner's Equity</p>
            <p class="text-sm mt-2 text-gray-600">
              This fundamental equation must always balance in double-entry accounting.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 20,
    },
    {
      id: "accounting-records",
      title: "📝 Basic Accounting Records",
      subtitle: "Essential Business Documentation",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Proper record-keeping is essential for business management, tax compliance,
            and financial decision-making.
          </p>

          <h3 class="text-xl font-semibold text-gray-800">Primary Accounting Records</h3>
          <div class="space-y-4">
            <div class="border border-gray-200 rounded p-4">
              <h4 class="font-semibold text-lg">General Journal</h4>
              <p class="text-gray-700">Chronological record of all business transactions with detailed explanations.</p>
              <ul class="list-disc list-inside mt-2 text-sm">
                <li>Date of transaction</li>
                <li>Accounts affected</li>
                <li>Debit and credit amounts</li>
                <li>Source document reference</li>
              </ul>
            </div>

            <div class="border border-gray-200 rounded p-4">
              <h4 class="font-semibold text-lg">General Ledger</h4>
              <p class="text-gray-700">Summary of all accounts showing balances and transaction history.</p>
              <ul class="list-disc list-inside mt-2 text-sm">
                <li>Chart of accounts</li>
                <li>Account balances</li>
                <li>Transaction postings</li>
                <li>Period-end adjustments</li>
              </ul>
            </div>

            <div class="border border-gray-200 rounded p-4">
              <h4 class="font-semibold text-lg">Subsidiary Ledgers</h4>
              <p class="text-gray-700">Detailed records for specific account categories.</p>
              <ul class="list-disc list-inside mt-2 text-sm">
                <li>Accounts receivable ledger</li>
                <li>Accounts payable ledger</li>
                <li>Inventory records</li>
                <li>Fixed asset registers</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 18,
    },
    {
      id: "financial-statements",
      title: "📈 Financial Statements",
      subtitle: "Key Business Performance Reports",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Financial statements provide a snapshot of business financial health
            and performance over a specific period.
          </p>

          <h3 class="text-xl font-semibold text-gray-800">The Four Main Financial Statements</h3>
          <div class="space-y-4">
            <div class="border border-gray-200 rounded p-4">
              <h4 class="font-semibold text-lg text-blue-600">Income Statement</h4>
              <p class="text-gray-700">Reports revenue, expenses, and profitability over a period.</p>
              <div class="bg-blue-50 p-3 mt-2 rounded">
                <p class="text-sm font-mono">Revenue - Expenses = Net Income</p>
              </div>
            </div>

            <div class="border border-gray-200 rounded p-4">
              <h4 class="font-semibold text-lg text-green-600">Balance Sheet</h4>
              <p class="text-gray-700">Snapshot of assets, liabilities, and equity at a point in time.</p>
              <div class="bg-green-50 p-3 mt-2 rounded">
                <p class="text-sm font-mono">Assets = Liabilities + Equity</p>
              </div>
            </div>

            <div class="border border-gray-200 rounded p-4">
              <h4 class="font-semibold text-lg text-purple-600">Cash Flow Statement</h4>
              <p class="text-gray-700">Tracks cash inflows and outflows from operating, investing, and financing activities.</p>
              <ul class="list-disc list-inside mt-2 text-sm">
                <li>Operating activities</li>
                <li>Investing activities</li>
                <li>Financing activities</li>
              </ul>
            </div>

            <div class="border border-gray-200 rounded p-4">
              <h4 class="font-semibold text-lg text-orange-600">Statement of Retained Earnings</h4>
              <p class="text-gray-700">Shows changes in retained earnings over the accounting period.</p>
              <div class="bg-orange-50 p-3 mt-2 rounded">
                <p class="text-sm">Beginning Retained Earnings + Net Income - Dividends = Ending Retained Earnings</p>
              </div>
            </div>
          </div>
        </div>
      `,
      estimatedTime: 22,
    },
    {
      id: "bookkeeping-process",
      title: "📓 Bookkeeping Process",
      subtitle: "Recording Business Transactions",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Bookkeeping involves systematically recording all financial transactions
            using the double-entry accounting system.
          </p>

          <h3 class="text-xl font-semibold text-gray-800">Double-Entry System</h3>
          <div class="bg-gray-100 p-4 rounded">
            <p class="text-center font-semibold mb-2">Every Transaction Affects Two Accounts</p>
            <div class="flex justify-center space-x-8">
              <div class="text-center">
                <p class="font-semibold text-red-600">DEBIT</p>
                <p class="text-sm">Left side</p>
                <p class="text-sm">Asset increase</p>
              </div>
              <div class="text-center">
                <p class="font-semibold text-blue-600">CREDIT</p>
                <p class="text-sm">Right side</p>
                <p class="text-sm">Liability increase</p>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-800 mt-6">Bookkeeping Cycle</h3>
          <ol class="list-decimal list-inside space-y-2 text-gray-700">
            <li><strong>Identify Transactions:</strong> Collect source documents (invoices, receipts, etc.)</li>
            <li><strong>Record in Journal:</strong> Enter transactions chronologically in general journal</li>
            <li><strong>Post to Ledger:</strong> Transfer journal entries to appropriate ledger accounts</li>
            <li><strong>Prepare Trial Balance:</strong> Verify that debits equal credits</li>
            <li><strong>Make Adjustments:</strong> Record accruals, deferrals, and depreciation</li>
            <li><strong>Prepare Financial Statements:</strong> Generate income statement and balance sheet</li>
            <li><strong>Close Books:</strong> Transfer temporary accounts to retained earnings</li>
          </ol>

          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
            <p class="text-yellow-800">
              <strong>Best Practice:</strong> Maintain consistent recording habits and reconcile
              accounts monthly to catch errors early.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 20,
    },
    {
      id: "cash-flow-management",
      title: "💵 Cash Flow Management",
      subtitle: "Monitoring Business Liquidity",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Effective cash flow management ensures business survival and growth by
            maintaining adequate liquidity for operations.
          </p>

          <h3 class="text-xl font-semibold text-gray-800">Cash Flow Components</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-green-50 p-4 rounded text-center">
              <h4 class="font-semibold text-green-700">Cash Inflows</h4>
              <ul class="list-disc list-inside mt-2 text-sm">
                <li>Sales revenue</li>
                <li>Loan proceeds</li>
                <li>Investment capital</li>
                <li>Asset sales</li>
              </ul>
            </div>
            <div class="bg-red-50 p-4 rounded text-center">
              <h4 class="font-semibold text-red-700">Cash Outflows</h4>
              <ul class="list-disc list-inside mt-2 text-sm">
                <li>Operating expenses</li>
                <li>Loan payments</li>
                <li>Purchase of assets</li>
                <li>Taxes</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-4 rounded text-center">
              <h4 class="font-semibold text-blue-700">Net Cash Flow</h4>
              <p class="text-sm mt-2">Inflows minus outflows</p>
              <p class="text-sm">Positive = Surplus</p>
              <p class="text-sm">Negative = Deficit</p>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-800 mt-6">Cash Flow Forecasting</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Short-term (1-3 months):</strong> Daily cash position monitoring</li>
            <li><strong>Medium-term (3-12 months):</strong> Monthly projections</li>
            <li><strong>Long-term (1-5 years):</strong> Annual cash flow budgets</li>
            <li><strong>Scenario Planning:</strong> Best case, worst case, and most likely scenarios</li>
            <li><strong>Cash Flow Ratios:</strong> Operating cash flow ratio, cash flow margin</li>
          </ul>

          <div class="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
            <p class="text-red-800">
              <strong>Cash Flow Warning Signs:</strong> Growing receivables, declining inventory
              turnover, increasing payables, and negative operating cash flow.
            </p>
          </div>
        </div>
      `,
      estimatedTime: 18,
    },
    {
      id: "financial-planning",
      title: "🎯 Financial Planning for Entrepreneurs",
      subtitle: "Strategic Financial Management",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Financial planning involves setting goals, creating budgets, and developing
            strategies to achieve long-term business success.
          </p>

          <h3 class="text-xl font-semibold text-gray-800">Financial Planning Components</h3>
          <div class="space-y-4">
            <div class="border border-gray-200 rounded p-4">
              <h4 class="font-semibold text-lg">Budgeting</h4>
              <ul class="list-disc list-inside mt-2 text-gray-700">
                <li>Operating budgets for day-to-day expenses</li>
                <li>Capital budgets for major investments</li>
                <li>Cash budgets for liquidity management</li>
                <li>Variance analysis to track performance</li>
              </ul>
            </div>

            <div class="border border-gray-200 rounded p-4">
              <h4 class="font-semibold text-lg">Financial Ratios Analysis</h4>
              <div class="grid grid-cols-2 gap-2 mt-2 text-sm">
                <div>
                  <p class="font-semibold">Liquidity Ratios:</p>
                  <ul class="list-disc list-inside">
                    <li>Current ratio</li>
                    <li>Quick ratio</li>
                  </ul>
                </div>
                <div>
                  <p class="font-semibold">Profitability Ratios:</p>
                  <ul class="list-disc list-inside">
                    <li>Gross margin</li>
                    <li>Net profit margin</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="border border-gray-200 rounded p-4">
              <h4 class="font-semibold text-lg">Break-Even Analysis</h4>
              <div class="bg-gray-100 p-3 mt-2 rounded">
                <p class="text-sm font-mono">Break-Even Point = Fixed Costs ÷ (Price - Variable Cost per Unit)</p>
                <p class="text-sm mt-1">Determines sales volume needed to cover all costs.</p>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-800 mt-6">Risk Management</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Insurance Coverage:</strong> Business interruption, liability, property insurance</li>
            <li><strong>Contingency Planning:</strong> Emergency fund and backup suppliers</li>
            <li><strong>Diversification:</strong> Multiple revenue streams and customer segments</li>
            <li><strong>Regular Reviews:</strong> Monthly financial reviews and annual audits</li>
          </ul>
        </div>
      `,
      estimatedTime: 20,
    }
  ],
  learningObjectives: [
    "Identify and evaluate various sources of entrepreneurial finance including internal and external options",
    "Understand the principles and processes of double-entry bookkeeping and basic accounting",
    "Learn to maintain essential financial records including journals, ledgers, and subsidiary records",
    "Analyze financial statements and key financial ratios for business decision-making",
    "Develop cash flow management and financial planning skills for entrepreneurial success",
    "Apply bootstrapping strategies and understand equity vs. debt financing trade-offs",
    "Navigate government financing programs and specialized lending options",
    "Implement proper bookkeeping cycles and financial control systems"
  ],
  keyTerms: [
    "Sources of finance",
    "Bootstrapping",
    "Venture capital",
    "Angel investors",
    "Bank loans",
    "SBA loans",
    "Equity financing",
    "Debt financing",
    "Double-entry accounting",
    "General journal",
    "General ledger",
    "Financial statements",
    "Income statement",
    "Balance sheet",
    "Cash flow statement",
    "Accounting equation",
    "GAAP principles",
    "Bookkeeping cycle",
    "Cash flow management",
    "Break-even analysis",
    "Financial ratios",
    "Credit scoring",
    "Collateral",
    "Retained earnings"
  ],
  summary: `
    This chapter provides entrepreneurs with knowledge of financing options and
    essential accounting practices needed for successful business management.
  `,
  references: [
    "Central Bank of Nigeria (CBN) Guidelines",
    "Hampton, J. J. (1992). Financial Decision Making: Concepts, Problems, and Cases. Reston Publishing.",
    "Gitman, L. J., & Zutter, C. J. (2015). Principles of Managerial Finance. Pearson.",
  ],
};