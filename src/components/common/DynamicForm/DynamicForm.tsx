// "use client";

// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";

// const DynamicForm = ({ fields, onSubmit }) => {
//   return (
//     <form
//       className="space-y-6"
//       onSubmit={(e) => {
//         e.preventDefault();
//         const formData = Object.fromEntries(new FormData(e.target));
//         onSubmit(formData);
//       }}
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {fields.map((field, index) => {
//           const { name, type = "text", placeholder, className } = field;

//           if (type === "textarea") {
//             return (
//               <Textarea
//                 key={index}
//                 name={name}
//                 placeholder={placeholder}
//                 className={`min-h-[150px] bg-[#EFF0F6] ${className || ""}`}
//               />
//             );
//           }

//           return (
//             <div className="bg-red-300" key={index}>
//               <input
//                 name={name}
//                 type={type}
//                 placeholder={placeholder}
//                 className={`bg-[#EFF0F6] outline-none focus:border-primary py-4 pl-4 rounded-md ${
//                   className || ""
//                 }`}
//               />
//             </div>
//           );
//         })}
//       </div>
//       <Button
//         type="submit"
//         className="w-full bg-primary hover:bg-red-600 text-white py-6 text-lg"
//       >
//         SUBMIT NOW
//       </Button>
//     </form>
//   );
// };

// export default DynamicForm;

const DynamicForm = () => {
  return <div>DynamicForm</div>;
};

export default DynamicForm;
