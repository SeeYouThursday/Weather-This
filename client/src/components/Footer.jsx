import { Typography } from '@material-tailwind/react';

export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img
          src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
          alt="logo-ct"
          className="w-10"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="https://www.linkedin.com/in/brian-galyen-85aa06aa/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              LinkedIn
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://github.com/SeeYouThursday/Weather-This"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Me
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://github.com/SeeYouThursday/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Other Projects By Brian Galyen
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
}
