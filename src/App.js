import HeaderBlock from "./Components/HeaderBlock/HeaderBlock";
import SkillsBlock from "./Components/SkillsBlock/SkillsBlock";
import JobsBlock from "./Components/JobsBlock/JobsBlock";
import Education from "./Components/Education/Education";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

import education_img from "./Assets/Images/sibsutis_photo.png"

function App() {
  return (
    <div>
      <HeaderBlock />
      <SkillsBlock />
      <JobsBlock />
      <Education 
        universityName="Сибирский Государственный Университет Телекоммуникаций и Информатики (СибГУТИ)"
        period="2018 - 2022"
        direction='Институт Телекоммуникаций. Направление "Информационные Системы и Технологии".'
        description="Закончил с отличием, получил степень бакалавра. За годы обучения в университете приобрел начальные навыки
          разработки и работы с прикладным ПО. Больше всего запомнились предметы: Архитектуры информационных
          систем, управление данными, алгоритмы обработки цифровых изображений и основы программирования
          трехмерной графики."
        imgPath={education_img}
        alt="education" 
      />
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
