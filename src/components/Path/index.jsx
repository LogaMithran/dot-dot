import { Board } from "./Board.jsx";

export const Path = () => {
  return (
    <>
      <div className="mx-20 my-10 pl-10 pr-10 bg-aqua-50">
        <h3 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Dot{"->"}
          <span class="text-blue-600 dark:text-blue-500">Dot</span>{" "}
        </h3>
        <Board />
      </div>
    </>
  );
};
