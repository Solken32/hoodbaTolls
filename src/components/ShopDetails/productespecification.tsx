
import {Tabs, Tab, Card, CardBody} from "@heroui/react";
import { ChevronLeft, ChevronRight} from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Product } from "@/types/product";


export default function ProductInformation({ item }: { item: Product }){

// Función para convertir ** en <strong> para negrita
  const formatText = (text: string) => {
    // Reemplaza el ** por <strong> para negrita
    const boldText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return boldText;
  };

  // Función para reemplazar saltos de línea
  const renderWithBreaks = (text: string) => {
    // Primero, formateamos el texto para negrita y luego reemplazamos saltos de línea
    const formattedText = formatText(text);
    return formattedText.split('\n').map((line, index) => (
      <span key={index} dangerouslySetInnerHTML={{ __html: line }} />
    ));
  };
    return(
        <section className="overflow-hidden bg-gray-2 py-20">
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                <Tabs  aria-label="Options"  color="primary">
                    <Tab key="Información" title="Información">
                        <Card className="mt-4 p-6" >
                            <CardBody className="m-4">
                            {renderWithBreaks(item.description2)}
                                
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="Mas Info" title="Mas Info">
                        <Card  className="mt-4 p-6 " >
                            <CardBody className="m-4 ">
                            {renderWithBreaks(item.adicional)}
                            </CardBody>
                        </Card>
                    </Tab>
                        
                    <Tab key="videos" title="Videos">
                        <Card className="mt-4" >
                            <CardBody className="flex justify-center items-center p-4 relative">
                                {/* Botón de Retroceder */}
                                <button className="absolute left-2 z-10 bg-white p-2 rounded-full shadow-md" id="prevBtn">
                                    <ChevronLeft size={30} />
                                </button>

                                {/* Slider de Videos */}
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    navigation={{ nextEl: "#nextBtn", prevEl: "#prevBtn" }}
                                    modules={[Navigation]}
                                    className="w-full max-w-2xl"
                                >
                                    <SwiperSlide>
                                    <div className="flex justify-center">
                                        <iframe
                                        className="w-full aspect-video"
                                        src={item.video1}
                                        title="Video 1"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        ></iframe>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="flex justify-center">
                                        <iframe
                                        className="w-full aspect-video"
                                        src={item.video2}
                                        title="Video 2"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        ></iframe>
                                    </div>
                                    </SwiperSlide>
                                    
                                </Swiper>

                                {/* Botón de Avanzar */}
                                <button className="absolute right-2 z-10 bg-white p-2 rounded-full shadow-md" id="nextBtn">
                                    <ChevronRight size={30} />
                                </button>
                                </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </section>
    )
}