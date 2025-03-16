export const Text = ({ textLists }) => (
  <div className="absolute top-12 left-[5%] z10">
    {textLists.map((text) => (
      <p key={text} className="md:text-2xl text-xl font-medium">
        {text}
      </p>
    ))}
  </div>
);
