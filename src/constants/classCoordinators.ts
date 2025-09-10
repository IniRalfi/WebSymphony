import JESIKA from "../../public/class_coordinators/jesika_tan.png"
import FADJRI from "../../public/class_coordinators/m_fadjri_akbar.png"
import MARCELLO from "../../public/class_coordinators/marcello_chrisdiantoro.png"
import NABILA from "../../public/class_coordinators/nabila_nur_anisa.png"
import RITO from "../../public/class_coordinators/rito_ramadhan.png"
import VIRSYA from "../../public/class_coordinators/virsya_meidina_andriadie.png"

export const CLASS_COORDINATORS = [
  {
    role: "Ketua Angkatan",
    name: "Rito Ramadhan",
    src: RITO,
  },
  {
    role: "Wakil Ketua Angkatan",
    name: "Jesika Tan",
    src: JESIKA,
  },
  {
    role: "Bendahara 1",
    name: "Nabila Nur Anisa",
    src: NABILA,
  },
  {
    role: "Bendahara 2",
    name: "Virsya Meidina Andriadie",
    src: VIRSYA,
  },
  {
    role: "Koordinator A",
    name: "M. Fadjri Akbar",
    src: FADJRI,
  },
  {
    role: "Koordinator B",
    name: "Marcello Chrisdiantoro",
    src: MARCELLO,
  },
]

export type classCoordinatorType = typeof CLASS_COORDINATORS
