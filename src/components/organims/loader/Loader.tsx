export const Loader = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#252525]">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="bg-[#252525] w-full min-h-screen flex justify-center items-center">
            <div className="flex min-h-screen w-full items-center justify-center bg-[#252525]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-[#AE9152] to-[#513E15] animate-spin">
                <div className="h-14 w-14 rounded-full bg-[#252525] shadow-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
