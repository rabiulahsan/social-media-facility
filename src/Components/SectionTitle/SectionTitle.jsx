/* eslint-disable react/prop-types */
const SectionTitle = ({ heading }) => {
  return (
    <div className=" text-center mx-auto text-3xl   font-bold py-[2%] flex flex-col w-1/3">
      <h3 className=" text-slate-600">{heading}</h3>
      <div className="divider "></div>
    </div>
  );
};

export default SectionTitle;
