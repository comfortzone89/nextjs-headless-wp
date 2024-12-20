export const Pagination = ({ totalPages, onPageClick }) => {
  return (
    <div className="max-w-5xl mx-auto mb-10 flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className="btn"
          onClick={() => {
            onPageClick(index + 1);
          }}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};
