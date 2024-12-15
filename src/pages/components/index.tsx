const meta = {
  title: 'Components',
};

const ComponentPage = () => {
  return (
    <>
      <title>{meta.title}</title>
      <main>
        <div className="relative">
          <div className="container mx-auto py-32">
            <h1 className="text-center text-2xl font-bold opacity-100 transform-none">
              Components
            </h1>
            <p className="mt-6 text-center opacity-100 transform-none">To be continue...</p>
          </div>
          <div className="w-full h-[336px] bg-slate-600 top-0 left-0 absolute -z-[1]" />
        </div>
      </main>
    </>
  );
};

export default ComponentPage;
