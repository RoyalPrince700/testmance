const ChapterContent = ({ content }) => {
  return (
    <div className="rounded-3xl border border-line bg-surface p-6 md:p-8">
      <div
        className="chapter-body text-lg leading-relaxed text-graphite"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default ChapterContent;
