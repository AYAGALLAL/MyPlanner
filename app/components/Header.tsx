export default function Header() {
  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">My Planner</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#projects" className="hover:text-accent">Features</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
      </div>
    </header>
  );
}