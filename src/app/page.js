import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full bg-black min-h-screen">
      <section className="w-full min-h-screen">
        <div className="w-full absolute">
          <img className="w-full object-cover h-screen" src="/banner.png" />
        </div>
        <div className="relative w-full">
          <Navbar />
        </div>
        <div className=" relative mt-28  ml-32  ">
          <div className="flex w-full justify-between items-center gap-x-[725px]">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-3">
                <img src="/line.svg" />
                <span className="text-gray-500">Выбор Illuminous</span>
              </div>
              <h2 className="text-3xl text-white font-semibold">Джокер</h2>
              <p className="text-white">
                Готэм. Комик Артур Флек живет с больной матерью, <br /> которая
                с детства учит его «ходить с улыбкой»
              </p>
              <div className="flex cursor-pointer w-32 text-white text-sm py-2 rounded-3xl justify-center bg-orange-600 gap-x-2 items-center">
                <button>Смотреть</button>
                <img src="/play.svg" />
              </div>
            </div>
            <div className="flex-1   items-center">
              <img className="cursor-pointer" src="/arrow.svg" />
            </div>
          </div>
          <div className="flex mt-32">
            <img className="w-16" src="/statistic.svg" />
          </div>
        </div>
      </section>
      <section className="w-full mt-20 ">
        <div className="w-full px-20 h-40 flex flex-col">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl text-white font-semibold">
              Поиск по сайту
            </h1>
            <p className="text-gray-500">
              На нашем сайте вы найдете подходящие вам <br /> фильмы и сериалы
            </p>
            <div className="w-full mt-5 py-3 px-4 rounded bg-zinc-950 flex items-center justify-between">
              <input
                className="outline-none w-full flex items-center text-white bg-transparent"
                type="text"
                placeholder="Поиск..."
              />
              <img src="/search.svg" />
            </div>
          </div>
        </div>
        <div className="w-full  px-20 mt-40">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl text-white font-semibold">
              Смотрите фильмы, которые вам нравятся
            </h1>
            <p className="text-gray-400">
              На нашем сайте собрано огромное количество <br /> фильмов и
              сериалов на любой вкус
            </p>
            <div className="w-full flex justify-between h-32 gap-x-10 mt-6">
              <div className="w-full cursor-pointer flex items-center justify-center  gap-x-8 h-32 rounded-lg bg-zinc-950">
                <div>
                  <img className="w-16" src="/drama.svg" />
                </div>
                <div className="flex flex-col gap-y-1 items-start">
                  <h1 className="text-white text-xl font-semibold">Драма</h1>
                  <p className="flex text-orange-600">120k+ фильмов</p>
                </div>
              </div>

              <div className="w-full cursor-pointer flex items-center justify-center  gap-x-8 h-32 rounded-lg bg-zinc-950">
                <div>
                  <img className="w-16" src="/GroupTwo.svg" />
                </div>
                <div className="flex flex-col gap-y-1 items-start">
                  <h1 className="text-white text-xl font-semibold">Ужасы</h1>
                  <p className="flex text-orange-600">100k+ фильмов</p>
                </div>
              </div>
              <div className="w-full cursor-pointer flex items-center justify-center  gap-x-8 h-32 rounded-lg bg-zinc-950">
                <div>
                  <img className="w-16" src="/GroupThree.svg" />
                </div>
                <div className="flex flex-col gap-y-1 items-start">
                  <h1 className="text-white text-xl font-semibold">
                    Детективы
                  </h1>
                  <p className="flex text-orange-600">90k+ фильмов</p>
                </div>
              </div>
              <div className="w-60 flex items-center justify-end">
                <img className="cursor-pointer" src="/strel.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-20 mt-32">
          <nav className="w-full h-12 bg-zinc-950 text-white flex justify-center items-center rounded-lg">
            <ul className="flex cursor-pointer items-center justify-center gap-x-24 text-white">
              <li className="border-orange-500 border-b-2">Новинки</li>
              <li>Популярное</li>
              <li>Смотрят сейчас</li>
              <li>Рекомендации</li>
              <li>Топ 10</li>
              <li>Скоро на Illuminous</li>
            </ul>
          </nav>
          <div className="w-full flex justify-between gap-x-8 mt-12">
            <div className="w-full rounded-lg">
              <img className="cursor-pointer" src="/cinemaOne.png" />
              <div className="flex flex-col pt-4 px-5 gap-y-1">
                <h2 className="text-white font-semibold">Джон Уик 4</h2>
                <p className="text-white">2023</p>
              </div>
            </div>
            <div className="w-full rounded-lg">
              <img className="cursor-pointer" src="/cinemaTwo.png" />
              <div className="flex flex-col pt-4 px-5 gap-y-1">
                <h2 className="text-white font-semibold">Оппенгеймер</h2>
                <p className="text-white">2023</p>
              </div>
            </div>
            <div className="w-full rounded-lg">
              <img className="cursor-pointer" src="/cinemaThree.png" />
              <div className="flex flex-col pt-4 px-5 gap-y-1">
                <h2 className="text-white font-semibold">Сент-Омер</h2>
                <p className="text-white">2023</p>
              </div>
            </div>
            <div className="w-full rounded-lg">
              <img className="cursor-pointer" src="/cinemaFour.png" />
              <div className="flex flex-col pt-4 px-5 gap-y-1">
                <h2 className="text-white font-semibold">Земля бога</h2>
                <p className="text-white">2023</p>
              </div>
            </div>
            <div className="w-80 flex items-center justify-end ">
              <img className="flex cursor-pointer items-center" src="/strel.svg" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  justify-center mt-20">
        <div className="container relative flex m-auto items-center justify-  h-96 ">
          <div className="w-8/12 relative m-auto h-96 rounded-xl flex justiyf-end items-center pl-56 bg-zinc-950">
            <div className="w-full items-center  justify-end">
              <div className="flex items-center gap-x-3">
                <h3 className="text-white font-semibold text-2xl">
                  Интерстеллар
                </h3>
                <p className="text-white">2014</p>
              </div>
              <div className="w-full flex items-center pr-16 justify-between">

              <div className="flex flex-col pt-3">
                <ul className="flex cursor-pointer items-center text-orange-500 text-xs gap-x-5">
                  <li>Драма</li>
                  <li>Фантастика</li>
                  <li>Приключения</li>
                  <li>16+</li>
                </ul>
                <p className=" text-gray-500 pt-6">
                  Когда засуха, пыльные бури и вымирание растений <br />{" "}
                  приводят человечество к продовольственному <br /> кризису,
                  коллектив исследователей и учёных...
                </p>
                <button className="rounded-3xl cursor-pointer text-white bg-orange-600 w-40 mt-5 py-2">
                  Смотреть
                </button>
              </div>
              <div>
                <img className="w-2" src="/next.svg"/>
              </div>
              </div>
            </div>
          </div>
          <div className="w-56 rounded-xl absolute ml-36  ">
            <img className="cursor-pointer" src="/image.png" />
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-40 px-20 py-14 bg-zinc-950">
          <div className="w-full flex flex-col gap-y-3 items-center justify-center h-40 ">
            <p className="text-orange-500">Illuminous+</p>
            <h1 className="text-2xl text-white font-semibold">
              Фильмы и сериалы по подписке Illuminous+
            </h1>
            <h3 className="text-white text-xl">Бесплатно до конца года</h3>
          </div>
          <div className="w-full flex items-center justify-center  h-72 ">
            <div className="flex items-center justify-center gap-x-12">
              <div className="flex w-full flex-col cursor-pointer gap-y-5">
                <div className="flex w-[400px] items-center gap-x-5">
                  <img className="w-8 h-8" src="/people.svg" />
                  <p className="text-gray-400">
                    Одна подписка для всей семьи или друзей
                  </p>
                </div>
                <div className="flex items-center cursor-pointer gap-x-5">
                  <img className="w-8 h-8" src="/high_quality.svg" />
                  <p className="text-gray-400">Максимальное качество</p>
                </div>
                <div className="flex items-center cursor-pointer gap-x-5">
                  <img className="w-8 h-8" src="/offline.svg" />
                  <p className="text-gray-400">Просмотр офлайн</p>
                </div>
              </div>

              <div className="w-full flex flex-col gap-y-5">
                <div className="flex cursor-pointer items-center gap-x-5">
                  <img className="w-8 h-8" src="/lock.svg" />
                  <p className="text-gray-400">Никакой рекламы</p>
                </div>
                <div className="flex cursor-pointer items-center gap-x-5">
                  <img className="w-8 h-8" src="/film.svg" />
                  <p className="text-gray-400">
                    Каждый день найдётся, что посмотреть
                  </p>
                </div>
                <div className="flex cursor-pointer items-center gap-x-5">
                  <img className="w-8 h-8" src="/toggle.svg" />
                  <p className="text-gray-400">
                    Можно отключить в любой момент
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="w-56 p-1.5 bg-orange-600 text-sm rounded-3xl text-white cursor-pointer">
            Попробовать бесплатно
          </button>
        </div>

        <div className="w-full h-screen flex flex-col  items-center mt-32 ">
          <div className="w-1/2 flex flex-col items-center justify-center h-32">
            <h1 className="text-white text-2xl py-3 ">
              Выберите подписку которая подходит Вам
            </h1>
            <p className="text-gray-400">
              Мы представляем три варианта подписки, которые
            </p>
            <p className="text-gray-400">подойдут вам по ценеи потребностям</p>
          </div>
          <div className="flex w-full mt-8 px-20 items-center justify-between gap-x-7">
            <div className="w-full flex  flex-col gap-y-10 cursor-pointer bg-zinc-950 p-6 rounded-lg">
              <div className="flex flex-col items-center">
                <h2 className="text-white py-3 text-lg font-semibold">
                  Easy Illuminous
                </h2>
                <p className="text-gray-400">Для мобильного приложения. </p>
                <p className="text-gray-400"> Может смотреть 1 человек</p>
                <h1 className="text-3xl text-orange-600 font-semibold pt-8">
                  99 ₽/мес
                </h1>
              </div>
              <div className="flex flex-col gap-y-5 px-8 items-start">
                <div className="flex items-center gap-x-5">
                  <img src="/dot.svg" />
                  <p className="text-gray-400">Нет ограничений</p>
                </div>
                <div className="flex items-center gap-x-5">
                  <img src="/dot.svg" />
                  <p className="text-gray-400">Никакой рекламы</p>
                </div>
                <div className="flex items-center gap-x-5">
                  <img src="/dot.svg" />
                  <p className="text-gray-400">10 ТВ каналов</p>
                </div>
              </div>
              <div className="flex items-end pb-8 justify-center">
                <button className="p-2 px-10  rounded-3xl bg-orange-600 text-white text-sm">
                  Попробовать
                </button>
              </div>
            </div>

            <div className="w-full flex  flex-col gap-y-10 cursor-pointer  bg-zinc-950 p-6 rounded-lg">
              <div className="flex flex-col items-center">
                <h2 className="text-white py-3 text-lg font-semibold">
                  Illuminous+
                </h2>
                <p className="text-gray-400">Для всех устройств. Может  </p>
                <p className="text-gray-400"> смотреть 5 человек</p>
                <h1 className="text-3xl text-orange-600 font-semibold pt-8">
                199 ₽/мес
                </h1>
              </div>
              <div className="flex flex-col gap-y-5 px-8 items-start">
                <div className="flex items-center gap-x-5">
                  <img src="/dot.svg" />
                  <p className="text-gray-400">Нет ограничений</p>
                </div>
                <div className="flex items-center gap-x-5">
                  <img src="/dot.svg" />
                  <p className="text-gray-400">Никакой рекламы</p>
                </div>
                <div className="flex items-center gap-x-5">
                  <img src="/dot.svg" />
                  <p className="text-gray-400">25 ТВ каналов</p>
                </div>
              </div>
              <div className="flex items-end pb-8 justify-center">
                <button className="p-2 px-10  rounded-3xl bg-orange-600 text-white text-sm">
                  Попробовать
                </button>
              </div>
            </div>

            <div className="w-full flex  flex-col gap-y-10 cursor-pointer bg-zinc-950 p-6 rounded-lg">
              <div className="flex flex-col items-center">
                <h2 className="text-white py-3 text-lg font-semibold">
                Illuminous Gold
                </h2>
                <p className="text-gray-400">Полный каталог Illuminous без </p>
                <p className="text-gray-400">  ограничений</p>
                <h1 className="text-3xl text-orange-600 font-semibold pt-8">
                299 ₽/мес
                </h1>
              </div>
              <div className="flex flex-col gap-y-5 px-8 items-start">
                <div className="flex items-center gap-x-5">
                  <img src="/dot.svg" />
                  <p className="text-gray-400">Нет ограничений</p>
                </div>
                <div className="flex items-center gap-x-5">
                  <img src="/dot.svg" />
                  <p className="text-gray-400">Никакой рекламы</p>
                </div>
                <div className="flex items-center gap-x-5">
                  <img src="/dot.svg" />
                  <p className="text-gray-400">50 ТВ каналов</p>
                </div>
              </div>
              <div className="flex items-end pb-8 justify-center">
                <button className="p-2 px-10  rounded-3xl bg-orange-600 text-white text-sm">
                  Попробовать
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full flex flex-col bg-zinc-950 items-center justify-center mt-32">
        <div className="w-8/12 flex  items-center justify-between h-60 ">
          <ul className="flex flex-col text-white gap-y-2">
            <li className="text-lg" >Iluminous</li>
            <li>О нас</li>
            <li>Блог</li>
            <li>Вакансии</li>
            <li>Акции</li>
          </ul>
          <ul className="flex flex-col text-white gap-y-2">
          <li className="text-lg" >Iluminous</li>
            <li>О нас</li>
            <li>Блог</li>
            <li>Вакансии</li>
            <li>Акции</li>
          </ul>
          <div className="flex flex-col gap-y-2 text-white">
            <h2 className="pb-">Поддержка</h2>
            <div className="flex flex-col gap-y-4">

            <p>Мы всегда готовы вам помочь. <br/> Наши операторы онлайн 24/7</p>
            <div className="flex items-center gap-x-3">
              <img src="/tel.svg"/>
              <img src="/message.svg"/>
              <img src="/telegram.svg"/>

            </div>
            <button className="cursor-pointer p-1.5 px-1 w-36 text-xs  rounded-3xl bg-orange-600">
            Написать в чате
            </button>
            </div>

          </div>

        </div>
<div className="w-full h-12 flex items-center text-gray-500 justify-between px-32 bg-black">
  <p>© 2015-2023 Illuminous</p>
  <p>Пользовательские соглашения</p>

</div>
      </footer>
    </main>
  );
}
