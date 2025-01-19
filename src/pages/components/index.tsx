import { COMPONENTS } from '@/pages/components/constant';

const meta = {
  title: 'Components',
};

const ComponentPage = () => {
  return (
    <>
      <title>{meta.title}</title>
      {COMPONENTS.map(({ name }) => (
        <div key={name}>{name}</div>
      ))}
      <div className="w-full h-[3000px] bg-gray-50 dark:bg-gray-950 top-0 left-0 absolute -z-[1]" />
    </>
  );
};

export default ComponentPage;
