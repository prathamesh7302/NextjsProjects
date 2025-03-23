import { Button, Container } from "@mantine/core";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <Container className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-600">Anubandh</h1>
        <Button color="red">Log in</Button>
      </Container>
    </header>
  );
};

export default Header;
