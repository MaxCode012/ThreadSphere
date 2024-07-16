import Image from "next/image";

export default function EditProfile() {
  return (
    <main
      className="lg:px-48 px-11 space-y-5
    "
    >
      <div className="mt-10 text-center lg:text-left">
        <h1 className="text-2xl font-semibold">Edit profile</h1>
      </div>
      <div className="lg:flex lg:justify-between">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="pl-2">
              Username
            </label>
            <input
              className="w-full dark:bg-container border rounded dark:border-none lg:w-[350px] outline-none h-10 p-4 focus:border-black transition transition-border duration-200"
              type="text"
              id="name"
              name="name"
              placeholder="E.g (John doe)"
            />
          </div>
          <div>
            <input type="file" />
          </div>
        </div>
        <Image
          className="hidden md:hidden lg:block mt-11"
          src="edit_profile.svg"
          width={350}
          height={350}
          alt="edit"
        />
      </div>
    </main>
  );
}
