const Contact = () => {

    const contacts = [
        { id: 1, site: 'Linkedin', href: 'https://www.linkedin.com/in/mayra-mosquera/', imageSrc: 'https://cdn-icons-png.flaticon.com/512/174/174857.png?w=1800&t=st=1690288169~exp=1690288769~hmac=2c08b724b9b49571ba2c8cbd161c2cf56034f367457edc09b5b76931111c67eb', imageAlt: 'linkedin icon' },
        { id: 2, site: 'Github', href: 'https://github.com/mayramos-28', imageSrc: 'https://cdn-icons-png.flaticon.com/512/733/733609.png?w=1800&t=st=1690288266~exp=1690288866~hmac=975e3f6a5863ba235a96567f56d22ab6bd596d269a1429312553c835e5f9233f', imageAlt: 'github icon' },
        { id: 3, site: 'mayra28mos@gmail.com', href: 'mailto:mayra28mos@gmail.com', imageSrc: 'https://cdn-icons-png.flaticon.com/512/88/88042.png?w=1800&t=st=1690288314~exp=1690288914~hmac=f8393b69d5ed1bbdbf949d9d494fdc2216421d6a0bc271dba4ff3b05fc6e9207', imageAlt: 'email icon' }
    ]
    return (


        <div className="bg-white ">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-sky-900">Redes y contacto</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="group relative">
                            <div className="aspect-h-2 aspect-w-1 w-72 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                               
                            <a href={contact.href} target="_blank">
                                            <span aria-hidden="true" className="absolute inset-0 font-serif" />
                                            <img
                                    src={contact.imageSrc}
                                    alt={contact.imageAlt}
                                    
                                />
                                        </a>
                                
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-xl text-sky-900 " >
                                        <a href={contact.href} target="_blank">
                                            <span aria-hidden="true" className=" font-serif" />
                                            {contact.site}
                                        </a>
                                    </h3>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
};
export default Contact;



