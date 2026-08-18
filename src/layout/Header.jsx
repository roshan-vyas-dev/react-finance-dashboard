function Header() {
  return (
    <header className="flex items-center justify-between border-b px-4 py-3 sm:px-6">
      <h1 className="text-lg font-semibold">Finance Dashboard</h1>

      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-medium text-white">
          R
        </div>

        <span className="hidden text-sm font-medium sm:inline">Roshan</span>
      </div>
    </header>
  );
}

export default Header;
