import { ModeToggle } from "./components/ui/ModeToggler";

export default function Navbar() {
  return (
    <header className="w-full py-5 px-4 border-b">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Gi<span className="text-primary">Blog</span></h1>
        </div>
        <div>
            <ModeToggle />
        </div>
      </div>
    </header>
  );
}
