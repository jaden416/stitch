import Header from "./components/Header";
import s from "./assets/stitch.png";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col items-center">
      <div className="flex w-full flex-col items-center justify-center px-[1.2rem] pt-[4rem] md:px-0">
        <Header
          header={{
            avatar: {
              photo: s,
              name: "Stitch Custom Keyboards",
              description: "Keyboard Enthusiast",
            },
            introduction: "Hey, my name is Joshua. ",
            description:
              "I've always had a passion for technology and building keyboards is an extension of that passion. I started building keyboards around August of 2021 and have been really enjoying my time in the community!",
          }}
        >
          <Header.Avatar />
          <div className="pt-[4rem]"></div>
          <Header.Description />
        </Header>

        <Header
          header={{
            avatar: {
              photo: s,
              name: "Stitch Custom Keyboards",
              description: "Keyboard Enthusiast",
            },
            introduction: "",
            description:
              "Compared to the retail equivalent, mechanical keyboards have a better sound and feel. There is also almost endless customization when it comes to switches, keycaps, and layouts.",
          }}
        >
          <Header.Description />
        </Header>
      </div>
    </div>
  );
}

export default App;
