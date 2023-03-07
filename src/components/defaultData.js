import { v4 as uuid } from "uuid";

const defaultData = {
    details: {
        name: "Bob King",
        position: "Full Stack Developer",
        email: "example@domain.com",
        phone: "01234 567890",
    },
    experience: [
        {
            id: uuid(),
            comp: "Facebook",
            compPos: "Full Stack Developer",
            compDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate harum voluptates praesentium. Suscipit itaque officiis odio ut!",
            compDate: "2019 - 2021",
        },
        {
            id: uuid(),
            comp: "Google",
            compPos: "Software Developer",
            compDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate harum voluptates praesentium. Suscipit itaque officiis odio ut!",
            compDate: "2015 - 2018",
        },
    ],
    education: [
        {
            id: uuid(),
            course: "B.S. Computer Science",
            university: "Harward University",
            dateOfStudy: "2014",
            courseDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate harum voluptates praesentium. Suscipit itaque officiis odio ut!",
        },
        {
            id: uuid(),
            course: "Fullstack JavaScript",
            university: "The Odin Project",
            dateOfStudy: "2019",
            courseDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate harum voluptates praesentium. Suscipit itaque officiis odio ut!",
        },
    ],
};

export default defaultData;
