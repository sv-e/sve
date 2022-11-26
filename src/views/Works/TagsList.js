const TagsList = ({ tags }) => {
  return (
    <ul
      className="
        list-unstyled
        mb-0
        flex
        flex-wrap
        items-center
        justify-center
      ">
      {tags?.map(tag => (
        <li
          key={tag.id}
          className="mx-2 whitespace-nowrap">
          #{tag.name}
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
