function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 lg:px-12  xl:w-[1200px] 2xl:w-[1440px] mx-auto">
      {children}
    </div>
  );
}

export default Wrapper;
