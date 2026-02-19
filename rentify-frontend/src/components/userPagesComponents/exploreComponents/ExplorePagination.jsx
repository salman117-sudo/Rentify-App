export default function ExplorePagination() {
  return (
    <div className="flex justify-center mt-10 gap-2">

      <button className="px-3 py-1 border rounded-lg text-gray-500">
        &lt;
      </button>

      <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">
        1
      </button>

      <button className="px-3 py-1 border rounded-lg">
        2
      </button>

      <button className="px-3 py-1 border rounded-lg">
        3
      </button>

      <button className="px-3 py-1 border rounded-lg text-gray-500">
        &gt;
      </button>

    </div>
  );
}
