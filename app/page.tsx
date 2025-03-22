"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";
import {
  Bike,
  Calendar,
  Clock,
  CloudRain,
  Copy,
  Home,
  Info,
  MapPin,
  Sun,
  Thermometer,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function TravelItinerary() {
  const [activeDay, setActiveDay] = useState("day1");

  const copyToClipboard = (text: string, name: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Localização copiada!",
        description: `As coordenadas de ${name} foram copiadas para a área de transferência.`,
      });
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-10 bg-primary text-primary-foreground shadow-md">
        <div className="container py-4">
          <h1 className="text-2xl font-bold">
            Praia do Forte - Roteiro de Viagem
          </h1>
          <p className="text-sm opacity-90">28 a 31 de Março de 2025</p>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <section className="mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Mapa Geral da Região
              </CardTitle>
              <CardDescription>
                Visão geral de todos os pontos do roteiro
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-[300px] w-full overflow-hidden rounded-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.9929920711295!2d-38.00608100000001!3d-12.576693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71655139bcf3157%3A0xb0273f8befcc5f2a!2sVillage%20Recanto%20da%20Villa%2C%20Praia%20do%20Forte%20Bahia!5e0!3m2!1spt-BR!2sbr!4v1616432532921!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>
                  Hospedagem: Village Recanto da Villa, Alameda das Estrelas,
                  Praia do Forte
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5" />
                Previsão do Tempo
              </CardTitle>
              <CardDescription>Clima para os dias da viagem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-3 border rounded-md">
                  <p className="font-medium">28/03 (Sex)</p>
                  <div className="flex items-center justify-center my-2">
                    <Sun className="h-8 w-8 text-yellow-500" />
                  </div>
                  <p className="text-2xl font-bold">29°C</p>
                  <p className="text-xs text-muted-foreground">20°C min</p>
                  <p className="text-xs mt-2">Ensolarado</p>
                  <p className="text-xs text-muted-foreground">Umidade: 75%</p>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-md">
                  <p className="font-medium">29/03 (Sáb)</p>
                  <div className="flex items-center justify-center my-2">
                    <Sun className="h-8 w-8 text-yellow-500" />
                  </div>
                  <p className="text-2xl font-bold">30°C</p>
                  <p className="text-xs text-muted-foreground">21°C min</p>
                  <p className="text-xs mt-2">Ensolarado</p>
                  <p className="text-xs text-muted-foreground">Umidade: 78%</p>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-md">
                  <p className="font-medium">30/03 (Dom)</p>
                  <div className="flex items-center justify-center my-2">
                    <CloudRain className="h-8 w-8 text-blue-500" />
                  </div>
                  <p className="text-2xl font-bold">28°C</p>
                  <p className="text-xs text-muted-foreground">22°C min</p>
                  <p className="text-xs mt-2">Pancadas à tarde</p>
                  <p className="text-xs text-muted-foreground">Umidade: 82%</p>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-md">
                  <p className="font-medium">31/03 (Seg)</p>
                  <div className="flex items-center justify-center my-2">
                    <Sun className="h-8 w-8 text-yellow-500" />
                  </div>
                  <p className="text-2xl font-bold">29°C</p>
                  <p className="text-xs text-muted-foreground">21°C min</p>
                  <p className="text-xs mt-2">Ensolarado</p>
                  <p className="text-xs text-muted-foreground">Umidade: 76%</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Fonte: Climatempo - Previsão para Praia do Forte, Bahia
              </p>
            </CardContent>
          </Card>
        </section>

        <Tabs
          defaultValue="day1"
          value={activeDay}
          onValueChange={setActiveDay}
          className="mb-8"
        >
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="day1">Dia 1</TabsTrigger>
            <TabsTrigger value="day2">Dia 2</TabsTrigger>
            <TabsTrigger value="day3">Dia 3</TabsTrigger>
            <TabsTrigger value="day4">Dia 4</TabsTrigger>
          </TabsList>

          <TabsContent value="day1" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Dia 1 (28/03) - Chegada e Exploração
                  </CardTitle>
                  <Badge variant="outline">Sexta-feira</Badge>
                </div>
                <CardDescription>
                  Chegada e exploração da Vila dos Pescadores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" /> Manhã
                    </h3>
                    <div className="mt-2 space-y-4">
                      <div>
                        <p className="font-medium">
                          Chegada e acomodação na Vila dos Pescadores
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Check-in e instalação na hospedagem.
                        </p>
                        <p className="text-sm flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3" /> Horário de check-in: a
                          partir das 14h
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">
                          Passeio inicial pela Vila de Praia do Forte
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Conhecer lojinhas, feirinhas e restaurantes locais.
                        </p>
                        <p className="text-sm flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3" /> Horário de funcionamento
                          das lojas: 9h às 22h
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                          <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                            <Image
                              src="https://praiadoforte.org.br/wp-content/uploads/2024/05/vila-da-praia-do-forte-1-1024x640.jpg"
                              alt="Vila de Praia do Forte - Vista diurna"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                            <Image
                              src="https://www.abraceomundo.com/wp-content/uploads/2018/07/praia-do-forte-salvador.gif"
                              alt="Vila de Praia do Forte - Vista panorâmica"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="mt-2 bg-muted p-3 rounded-md">
                          <p className="text-sm font-medium">Como chegar:</p>
                          <p className="text-sm">
                            A Vila é o centro de Praia do Forte, onde está
                            localizada a hospedagem. Você pode explorar a pé
                            facilmente, pois tudo é próximo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Utensils className="h-4 w-4" /> Almoço
                    </h3>
                    <div className="mt-2">
                      <p className="font-medium">Restaurante Sabor da Vila</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Opções vegetarianas disponíveis.
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> Rua da Aurora, Praia do
                        Forte
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> Horário de funcionamento:
                        11h30 às 23h
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://media-cdn.tripadvisor.com/media/photo-s/0e/20/aa/37/restaurante-sabor-da.jpg"
                            alt="Restaurante Sabor da Vila - Interior"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://www.feriasbrasil.com.br/fotosfb/543855462-MOB.jpg"
                            alt="Restaurante Sabor da Vila - Fachada"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-2 bg-muted p-3 rounded-md">
                        <p className="text-sm font-medium">Como chegar:</p>
                        <p className="text-sm">
                          A partir da hospedagem, caminhe em direção ao centro
                          da Vila. O restaurante fica a aproximadamente 5
                          minutos a pé. Siga pela Alameda das Estrelas até
                          encontrar a Rua da Aurora.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() =>
                          copyToClipboard(
                            "-12.5767, -38.0061, Restaurante Sabor da Vila, Alameda do Sol, 217 - Praia do Forte, Mata de São João - BA, 48280-000",
                            "Restaurante Sabor da Vila"
                          )
                        }
                      >
                        <Copy className="h-3 w-3 mr-1" /> Copiar localização
                      </Button>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" /> Tarde
                    </h3>
                    <div className="mt-2">
                      <p className="font-medium">Visita ao Projeto Tamar</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Preservação das tartarugas marinhas.
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> Avenida Farol Garcia
                        D'Ávila, s/n
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> Horário de funcionamento:
                        9h às 18h
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://www.tamar.org.br/fotos/cv%20pf%20alimentacao.JPG"
                            alt="Projeto Tamar - Alimentação das tartarugas"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://www.buenasdicas.com/wp-content/uploads/2018/10/projeto-tamar-praia-do-forte-bahia.jpg.webp"
                            alt="Projeto Tamar - Vista geral"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-2 bg-muted p-3 rounded-md">
                        <p className="text-sm font-medium">Como chegar:</p>
                        <p className="text-sm">
                          Do restaurante, siga pela Alameda do Sol em direção à
                          praia. O Projeto Tamar fica próximo ao Farol Garcia
                          D'Ávila. São aproximadamente 8 minutos de caminhada.
                          Há placas indicativas por todo o caminho.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() =>
                          copyToClipboard(
                            "-12.5752, -38.0022, Projeto Tamar, Av. do Farol, s/n - Praia do Forte, Mata de São João - BA, 48280-000",
                            "Projeto Tamar"
                          )
                        }
                      >
                        <Copy className="h-3 w-3 mr-1" /> Copiar localização
                      </Button>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Utensils className="h-4 w-4" /> Jantar
                    </h3>
                    <div className="mt-2">
                      <p className="font-medium">Restaurante Papa Gente</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Culinária baiana e opções vegetarianas.
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> Alameda do Sol, Praia do
                        Forte
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> Horário de funcionamento:
                        12h às 23h30
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://diariosgastronomicos.com.br/wp-content/uploads/2017/08/Restaurante-Papa-Gente_abertura.jpg"
                            alt="Restaurante Papa Gente - Entrada"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://media-cdn.tripadvisor.com/media/photo-s/0b/67/55/ee/vista-do-restaurante.jpg"
                            alt="Restaurante Papa Gente - Vista"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-2 bg-muted p-3 rounded-md">
                        <p className="text-sm font-medium">Como chegar:</p>
                        <p className="text-sm">
                          Saindo do Projeto Tamar, retorne pela Alameda do Sol.
                          O restaurante fica a aproximadamente 10 minutos de
                          caminhada. Está localizado próximo ao centro da Vila,
                          com fachada característica.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() =>
                          copyToClipboard(
                            "-12.5764, -38.0058, Restaurante Papa Gente, Alameda do Sol, 89 - Praia do Forte, Mata de São João - BA, 48280-000",
                            "Restaurante Papa Gente"
                          )
                        }
                      >
                        <Copy className="h-3 w-3 mr-1" /> Copiar localização
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="day2" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Dia 2 (29/03) - Praias e Piscinas Naturais
                  </CardTitle>
                  <Badge variant="outline">Sábado</Badge>
                </div>
                <CardDescription>
                  Exploração das praias e piscinas naturais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" /> Manhã
                    </h3>
                    <div className="mt-2">
                      <p className="font-medium">Praia do Lord</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Piscinas naturais e snorkeling.
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> Caminho do Mar, Praia do
                        Forte
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> Acesso livre 24h
                        (recomendado visitar durante a maré baixa)
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://praiadoforte.org.br/wp-content/uploads/2024/05/Praia-do-Lord-na-praia-do-forte.jpg"
                            alt="Praia do Lord - Vista aérea"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://midias.jornalcruzeiro.com.br/wp-content/uploads/2019/06/Praia-do-Forte-tem-de-tudo-um-pouco.jpg"
                            alt="Praia do Lord - Vista da praia"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-2 bg-muted p-3 rounded-md">
                        <p className="text-sm font-medium">Como chegar:</p>
                        <p className="text-sm">
                          Da hospedagem, siga pela orla em direção ao norte.
                          Caminhe pela praia por aproximadamente 20 minutos. As
                          piscinas naturais são visíveis durante a maré baixa.
                          Recomendamos verificar a tábua de marés para melhor
                          aproveitamento.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() =>
                          copyToClipboard(
                            "-12.5698, -38.0022, Praia do Lord, Praia do Forte, Mata de São João - BA, 48280-000",
                            "Praia do Lord"
                          )
                        }
                      >
                        <Copy className="h-3 w-3 mr-1" /> Copiar localização
                      </Button>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Utensils className="h-4 w-4" /> Almoço
                    </h3>
                    <div className="mt-2">
                      <p className="font-medium">7 Pizzas</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Pizzas artesanais e opções veganas.
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> Av. ACM, 152, Praia do
                        Forte
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> Horário de funcionamento:
                        11h às 23h
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://praiadoforte.org.br/wp-content/uploads/2024/05/2023-09-18.jpg"
                            alt="7 Pizzas - Fachada"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://7pizzas.com.br/wp-content/uploads/2023/12/2_WEB.jpg"
                            alt="7 Pizzas - Interior"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-2 bg-muted p-3 rounded-md">
                        <p className="text-sm font-medium">Como chegar:</p>
                        <p className="text-sm">
                          Da Praia do Lord, retorne à Vila e siga pela Avenida
                          ACM. A pizzaria fica no número 152, a aproximadamente
                          10 minutos de caminhada da praia. É facilmente
                          identificável pela fachada colorida.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() =>
                          copyToClipboard(
                            "-12.5771, -38.0064, 7 Pizzas, Av. ACM, 152 - Praia do Forte, Mata de São João - BA, 48280-000",
                            "7 Pizzas"
                          )
                        }
                      >
                        <Copy className="h-3 w-3 mr-1" /> Copiar localização
                      </Button>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" /> Tarde
                    </h3>
                    <div className="mt-2">
                      <p className="font-medium">Praia do Papa-Gente</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Outra opção de piscinas naturais.
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> Acesso pela vila
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> Acesso livre 24h (melhor
                        durante a maré baixa)
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://i.ytimg.com/vi/Q0aAxSH1dQ4/maxresdefault.jpg"
                            alt="Praia do Papa-Gente - Vista aérea"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://viajocomfilhos.com.br/wp-content/uploads/2016/10/papagente.jpg"
                            alt="Praia do Papa-Gente - Piscinas naturais"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-2 bg-muted p-3 rounded-md">
                        <p className="text-sm font-medium">Como chegar:</p>
                        <p className="text-sm">
                          Da pizzaria, caminhe em direção à praia e siga pela
                          orla em direção ao sul. A Praia do Papa-Gente fica a
                          aproximadamente 15 minutos de caminhada. É reconhecida
                          pelas formações rochosas e piscinas naturais que se
                          formam na maré baixa.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() =>
                          copyToClipboard(
                            "-12.5782, -38.0045, Praia do Papa-Gente, Praia do Forte, Mata de São João - BA, 48280-000",
                            "Praia do Papa-Gente"
                          )
                        }
                      >
                        <Copy className="h-3 w-3 mr-1" /> Copiar localização
                      </Button>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Utensils className="h-4 w-4" /> Jantar
                    </h3>
                    <div className="mt-2">
                      <p className="font-medium">Restaurante Terra Brasil</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Pratos brasileiros e vegetarianos.
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> Alameda do Sol, Praia do
                        Forte
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> Horário de funcionamento:
                        12h às 23h
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://terrabrasilrestaurante.com.br/wp-content/uploads/2019/01/Restaurante-Choperia-Terra-Brasil-4.jpg"
                            alt="Restaurante Terra Brasil - Ambiente"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://terrabrasilrestaurante.com.br/wp-content/uploads/2019/01/Camarao-alho-e-oleo-com-molho-rose.jpg"
                            alt="Restaurante Terra Brasil - Prato"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-2 bg-muted p-3 rounded-md">
                        <p className="text-sm font-medium">Como chegar:</p>
                        <p className="text-sm">
                          Da Praia do Papa-Gente, retorne à Vila e siga pela
                          Alameda do Sol. O restaurante fica a aproximadamente
                          12 minutos de caminhada. Está localizado próximo ao
                          centro comercial da Vila.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() =>
                          copyToClipboard(
                            "-12.5763, -38.0057, Restaurante Terra Brasil, Alameda do Sol, 67 - Praia do Forte, Mata de São João - BA, 48280-000",
                            "Restaurante Terra Brasil"
                          )
                        }
                      >
                        <Copy className="h-3 w-3 mr-1" /> Copiar localização
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="day3" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Dia 3 (30/03) - Trilhas e Lago Azul
                  </CardTitle>
                  <Badge variant="outline">Domingo</Badge>
                </div>
                <CardDescription>
                  Aventuras em trilhas e visita ao Lago Azul
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" /> Manhã
                    </h3>
                    <div className="mt-2">
                      <p className="font-medium">Reserva de Sapiranga</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Trilhas e passeio de quadriciclo.
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> Rodovia BA-099, km 42
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> Horário de funcionamento:
                        8h às 17h
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://media-cdn.tripadvisor.com/media/photo-s/04/24/26/28/reserva-de-sapiranga.jpg"
                            alt="Reserva de Sapiranga - Trilha"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/fa/96/4a/reserva-de-sapiranga.jpg?w=1200&h=-1&s=1"
                            alt="Reserva de Sapiranga - Vegetação"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://catadodecultura.com.br/wp-content/uploads/2013/10/DSC_6024.jpg"
                            alt="Reserva de Sapiranga - Passeio"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-2 bg-muted p-3 rounded-md">
                        <p className="text-sm font-medium">Como chegar:</p>
                        <p className="text-sm">
                          Da hospedagem, você precisará de transporte (carro ou
                          buggy). Siga pela Rodovia BA-099 (Linha Verde) até o
                          km 42. A entrada da reserva é sinalizada. O trajeto
                          leva aproximadamente 15 minutos de carro. Recomendamos
                          agendar o passeio de quadriciclo com antecedência.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() =>
                          copyToClipboard(
                            "-12.5463, -38.0253, Reserva de Sapiranga, Rodovia BA-099, km 42, Praia do Forte, Mata de São João - BA, 48280-000",
                            "Reserva de Sapiranga"
                          )
                        }
                      >
                        <Copy className="h-3 w-3 mr-1" /> Copiar localização
                      </Button>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Utensils className="h-4 w-4" /> Almoço
                    </h3>
                    <div className="mt-2">
                      <p className="font-medium">Its Gastronomia</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Cozinha brasileira com opções vegetarianas.
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> Alameda da Lua, Praia do
                        Forte
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> Horário de funcionamento:
                        12h às 22h
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/6f/23/6f/parada-obrigatoria.jpg?w=900&h=500&s=1"
                            alt="Its Gastronomia - Ambiente"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/90/44/47/nosso-excelente-hamburguer.jpg?w=900&h=500&s=1"
                            alt="Its Gastronomia - Hambúrguer"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-2 bg-muted p-3 rounded-md">
                        <p className="text-sm font-medium">Como chegar:</p>
                        <p className="text-sm">
                          Da Reserva de Sapiranga, retorne à Vila de Praia do
                          Forte. O restaurante fica na Alameda da Lua, próximo
                          ao centro. São aproximadamente 10 minutos de carro da
                          reserva até o restaurante.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() =>
                          copyToClipboard(
                            "-12.5769, -38.0063, Its Gastronomia, Alameda da Lua, 198 - Praia do Forte, Mata de São João - BA, 48280-000",
                            "Its Gastronomia"
                          )
                        }
                      >
                        <Copy className="h-3 w-3 mr-1" /> Copiar localização
                      </Button>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" /> Tarde
                    </h3>
                    <div className="mt-2">
                      <p className="font-medium">Lago Azul nas Dunas</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Lago de água azul-turquesa cercado por dunas.
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> Mata de São João
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> Acesso: 9h às 17h
                        (verificar com guias locais)
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://media-cdn.tripadvisor.com/media/photo-s/07/1e/2f/38/praia-de-baixio-esplanada.jpg"
                            alt="Lago Azul - Vista aérea"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://s2.glbimg.com/YJC8XIhrHn8itPqnYl3lF3ew44Q=/s.glbimg.com/jo/g1/f/original/2015/01/03/p1040762.jpg"
                            alt="Lago Azul - Águas turquesa"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-2 bg-muted p-3 rounded-md">
                        <p className="text-sm font-medium">Como chegar:</p>
                        <p className="text-sm">
                          Do restaurante, você precisará de transporte (carro ou
                          buggy). O Lago Azul fica a aproximadamente 25 minutos
                          de carro da Vila. Siga pela Rodovia BA-099 em direção
                          a Imbassaí. Há placas indicativas no caminho.
                          Recomendamos contratar um guia local para melhor
                          experiência.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() =>
                          copyToClipboard(
                            "-12.4982, -37.9812, Lago Azul nas Dunas, Imbassaí, Mata de São João - BA, 48280-000",
                            "Lago Azul nas Dunas"
                          )
                        }
                      >
                        <Copy className="h-3 w-3 mr-1" /> Copiar localização
                      </Button>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Utensils className="h-4 w-4" /> Jantar
                    </h3>
                    <div className="mt-2">
                      <p className="font-medium">Xica's Bistrô</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Pratos locais e vegetarianos.
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> Alameda das Estrelas,
                        Praia do Forte
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> Horário de funcionamento:
                        18h às 23h
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/cd/94/4f/varandinha-gourmet.jpg?w=900&h=500&s=1"
                            alt="Xica's Bistrô - Varanda"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/20/e0/58/xica-s-bistro.jpg?w=800&h=400&s=1"
                            alt="Xica's Bistrô - Ambiente"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-2 bg-muted p-3 rounded-md">
                        <p className="text-sm font-medium">Como chegar:</p>
                        <p className="text-sm">
                          Do Lago Azul, retorne à Vila de Praia do Forte. O
                          restaurante fica na Alameda das Estrelas, próximo à
                          sua hospedagem. São aproximadamente 8 minutos de carro
                          do centro da Vila até o restaurante.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() =>
                          copyToClipboard(
                            "-12.5766, -38.0060, Xica's Bistrô, Alameda das Estrelas, 42 - Praia do Forte, Mata de São João - BA, 48280-000",
                            "Xica's Bistrô"
                          )
                        }
                      >
                        <Copy className="h-3 w-3 mr-1" /> Copiar localização
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="day4" className="mt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Dia 4 (31/03) - Encerramento e Partida
                  </CardTitle>
                  <Badge variant="outline">Segunda-feira</Badge>
                </div>
                <CardDescription>
                  Últimas atividades antes da partida
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" /> Manhã
                    </h3>
                    <div className="mt-2">
                      <p className="font-medium">Passeio livre pela vila</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Últimas compras de lembranças antes da partida.
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> Horário de funcionamento
                        das lojas: 9h às 22h
                      </p>
                      <div className="relative h-[200px] w-full overflow-hidden rounded-md mt-2">
                        <Image
                          src="https://www.abraceomundo.com/wp-content/uploads/2018/07/praia-do-forte-salvador.gif"
                          alt="Vila de Praia do Forte - Compras"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-2 bg-muted p-3 rounded-md">
                        <p className="text-sm font-medium">Sugestões:</p>
                        <p className="text-sm">
                          Visite as lojas de artesanato local na Alameda do Sol
                          e Alameda das Estrelas. Há diversas opções de
                          souvenirs, roupas de praia e artesanato baiano.
                          Recomendamos também visitar a feira de artesanato
                          próxima ao Projeto Tamar para as últimas lembranças.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" /> Opcional: Parque Municipal
                      Klaus Peters
                    </h3>
                    <div className="mt-2">
                      <p className="font-medium">
                        Parque Municipal Klaus Peters
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Área de preservação ambiental com trilhas e fauna local.
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" /> Próximo à Vila de Praia
                        do Forte
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> Horário de funcionamento:
                        8h às 16h
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://praiadoforte.org.br/wp-content/uploads/2024/05/parque-klaus-petter-em-praia-do-forte-por-Waldyr-Lantyer.jpg"
                            alt="Parque Municipal Klaus Peters - Vista geral"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                          <Image
                            src="https://praiadoforte.org.br/wp-content/uploads/2024/05/Portal-Praia-do-Forte-Klaus-Petter-por-Waldyr-Lantyer-01.jpg"
                            alt="Parque Municipal Klaus Peters - Portal"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="mt-2 bg-muted p-3 rounded-md">
                        <p className="text-sm font-medium">Como chegar:</p>
                        <p className="text-sm">
                          Da Vila de Praia do Forte, o parque fica a
                          aproximadamente 10 minutos de carro. Você pode
                          contratar um táxi ou usar o buggy alugado. O parque
                          oferece trilhas curtas e a oportunidade de observar a
                          fauna e flora local. Ideal para uma visita rápida
                          antes da partida.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() =>
                          copyToClipboard(
                            "-12.5801, -38.0102, Parque Municipal Klaus Peters, Estrada do Coco, Praia do Forte, Mata de São João - BA, 48280-000",
                            "Parque Municipal Klaus Peters"
                          )
                        }
                      >
                        <Copy className="h-3 w-3 mr-1" /> Copiar localização
                      </Button>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" /> Partida
                    </h3>
                    <div className="mt-2">
                      <p className="font-medium">Check-out e retorno</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Encerramento da estadia e retorno.
                      </p>
                      <p className="text-sm flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> Horário de check-out: até
                        12h
                      </p>
                      <div className="mt-2 bg-muted p-3 rounded-md">
                        <p className="text-sm font-medium">
                          Dicas para o retorno:
                        </p>
                        <p className="text-sm">
                          Verifique se não esqueceu nenhum pertence na
                          hospedagem. Caso precise de transporte para o
                          aeroporto ou rodoviária, recomendamos agendar com
                          antecedência. O trajeto de Praia do Forte até Salvador
                          leva aproximadamente 1h30.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Dicas Extras
              </CardTitle>
              <CardDescription>
                Informações úteis para sua viagem
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="flex items-center gap-2">
                    <Bike className="h-4 w-4" /> Transporte
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Aluguel de bicicleta ou buggy para explorar melhor a
                      região. Existem diversos pontos de aluguel na vila.
                      Recomendamos o "Praia do Forte Aluguel de Buggys" na
                      entrada da Vila ou "Bike Rental Praia do Forte" na Alameda
                      do Sol. Preços aproximados: Bicicletas - R$50/dia, Buggys
                      - R$250/dia.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="flex items-center gap-2">
                    <Home className="h-4 w-4" /> Reservas
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Restaurantes populares podem exigir reservas antecipadas,
                      especialmente durante a alta temporada. Recomendamos fazer
                      reservas com pelo menos 1 dia de antecedência para os
                      restaurantes Papa Gente e Terra Brasil. Para o Projeto
                      Tamar, não é necessário agendamento, mas para o passeio de
                      quadriciclo na Reserva de Sapiranga, recomendamos agendar
                      com 2 dias de antecedência.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="flex items-center gap-2">
                    <Sun className="h-4 w-4" /> O que levar
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Roupas leves, calçado confortável para trilhas, snorkel e
                      protetor solar. Não esqueça também de levar repelente,
                      chapéu ou boné, óculos de sol, uma garrafa de água
                      reutilizável e uma mochila pequena para os passeios. Para
                      as piscinas naturais, recomendamos sandálias aquáticas
                      devido às formações rochosas.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> Clima
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Verifique a previsão para adaptar o itinerário caso
                      necessário. A região costuma ter clima quente e úmido, com
                      possibilidade de chuvas rápidas à tarde. Em março, a
                      temperatura média varia entre 24°C e 30°C. Recomendamos
                      verificar a tábua de marés para os passeios às piscinas
                      naturais, que são mais visíveis durante a maré baixa.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Roteiro de Viagem - Praia do
            Forte. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
