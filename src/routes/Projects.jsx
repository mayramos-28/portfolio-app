import projects from "../resources/projects/Projects";

const Projects = () => {

    const Allprojects = projects;

    return (
        <div className="">

            <h2 className="sr-only">Proyectos</h2>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">


                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {Allprojects.map((project, i) => (
                        <div className="group">
                            <a key={i} href={project.url} target="_blank" >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={project.image}
                                        alt={project.imageAlt}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                            </a>
                            <h3 className="mt-4 text-gray-700">{project.name}</h3>
                            <h4 className="text-sky-700 hover:text-indigo-900">
                                <a href={project.repository} target="_blank">
                                    <span aria-hidden="true" className=" inset-0 " />
                                    Ver repositorio
                                </a>
                            </h4>
                            <p className="mt-1 text-lg font-medium text-gray-900">{project.description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
export default Projects;

