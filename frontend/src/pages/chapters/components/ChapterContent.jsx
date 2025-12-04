const ChapterContent = ({ content }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
      <div className="prose prose-lg max-w-none">
        <div
          className="text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default ChapterContent;

