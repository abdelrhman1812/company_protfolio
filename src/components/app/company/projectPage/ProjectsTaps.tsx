// import React from "react";

// interface ProjectsTapsProps {
//   onFilterChange: (filter: string) => void;
//   selectedFilter: string;
// }

// const ProjectsTaps: React.FC<ProjectsTapsProps> = ({
//   onFilterChange,
//   selectedFilter,
// }) => {
//   const buttonClasses =
//     "px-6 py-2 text-lg font-semibold text-gray-800  shadow-md border-0  rounded-lg hover:bg-primary hover:text-white hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary active:bg-primary  sm:w-auto";

//   const activeButtonClasses = "bg-primary text-white border-primary";

//   return (
//     <div className="flex flex-wrap my-3 gap-4 justify-center items-center p-4  rounded-lg">
//       {["All", "Dashboard", "Website", "HTML/CSS"].map((filter) => (
//         <button
//           key={filter}
//           className={`${buttonClasses} ${
//             selectedFilter === filter ? activeButtonClasses : ""
//           }`}
//           onClick={() => onFilterChange(filter)}
//         >
//           {filter}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ProjectsTaps;

const ProjectsTaps = ({}) => {
  return (
    <div className="flex flex-wrap my-3 gap-4 justify-center items-center p-4  rounded-lg">
      {["All", "Dashboard", "Website", "HTML/CSS"].map((filter) => (
        <button key={filter}>{filter}</button>
      ))}
    </div>
  );
};

export default ProjectsTaps;
