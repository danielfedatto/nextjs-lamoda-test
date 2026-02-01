import Cart from '@/components/Cart/Cart';

function Header() {
  return (
    <header className="bg-zinc-100 py-10 px-10 flex justify-center">
      <div className="container flex md:flex-row flex-col justify-between items-center">
        <h1 className="text-black text-2xl font-bold">STORE</h1>
        <Cart />
      </div>
    </header>
  );
}

export default Header;
