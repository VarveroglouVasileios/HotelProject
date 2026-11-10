import type { L10n } from '@/lib/types'
import type { IconName } from '@/components/Icon.vue'

const l = (el: string, en: string): L10n => ({ el, en })

/** Fictional demo content. Photos are AI-generated. */
export interface GalleryItem {
  image: string
  alt: L10n
  caption: L10n
  /** CSS aspect ratio class for the masonry layout. */
  ratio: 'aspect-[4/5]' | 'aspect-square' | 'aspect-[4/3]'
}

export const gallery: GalleryItem[] = [
  { image: 'olive-path', alt: l('Πέτρινο μονοπάτι ανάμεσα σε ελιές προς το ξενοδοχείο', 'Stone path through olive trees to the hotel'), caption: l('Το μονοπάτι από τον ελαιώνα', 'The path through the olive grove'), ratio: 'aspect-[4/5]' },
  { image: 'pool-evening', alt: l('Η πισίνα το σούρουπο', 'The pool at dusk'), caption: l('Η πισίνα, λίγο μετά τη δύση', 'The pool, just after sunset'), ratio: 'aspect-square' },
  { image: 'lobby', alt: l('Η υποδοχή με ξύλο ελιάς και πέτρα', 'The front desk in olive wood and stone'), caption: l('Η υποδοχή, με το μέλι και το λάδι του τόπου', 'The front desk, with local honey and oil'), ratio: 'aspect-[4/3]' },
  { image: 'village', alt: l('Σοκάκι του χωριού με βουκαμβίλιες', 'Village lane with bougainvillea'), caption: l('Το χωριό, ένα χιλιόμετρο και μισό μακριά', 'The village, a kilometre and a half away'), ratio: 'aspect-[4/5]' },
  { image: 'bathroom', alt: l('Μπάνιο με ξύλο ελιάς και χάλκινες λεπτομέρειες', 'Bathroom with olive wood and brass details'), caption: l('Μπάνιο με φως από ψηλά', 'A bathroom lit from above'), ratio: 'aspect-square' },
  { image: 'sunset', alt: l('Βεράντα στη δύση του ήλιου', 'Terrace at sunset'), caption: l('Η δύση από τη βεράντα', 'Sunset from the terrace'), ratio: 'aspect-[4/3]' },
]

export interface DayPart {
  image: string
  time: L10n
  title: L10n
  text: L10n
}

export const dayParts: DayPart[] = [
  {
    image: 'breakfast',
    time: l('08:30', '8:30'),
    title: l('Πρωινό στην αυλή', 'Breakfast in the courtyard'),
    text: l('Ψωμί από ξυλόφουρνο, γιαούρτι, μέλι, σύκα και ό,τι έδωσε ο κήπος εκείνη την εβδομάδα. Καφές στο μπρίκι, όσο θέλετε.', 'Wood-oven bread, yoghurt, honey, figs and whatever the garden gave that week. Coffee from the briki, as long as you like.'),
  },
  {
    image: 'beach',
    time: l('12:00', '12:00'),
    title: l('Η παραλία', 'The beach'),
    text: l('Τετρακόσια μέτρα με τα πόδια μέσα από ελαιώνα. Πετσέτες και ομπρέλες από την υποδοχή, νερό με βότσαλο και σχεδόν ποτέ κόσμος.', 'Four hundred metres on foot through an olive grove. Towels and umbrellas from the front desk, clear pebble water and almost never a crowd.'),
  },
  {
    image: 'sunset',
    time: l('20:15', '8:15'),
    title: l('Δύση στη βεράντα', 'Sunset on the terrace'),
    text: l('Ένα ποτήρι κρασί από κάβα της περιοχής και η καλύτερη θέα του νησιού. Αν θέλετε ταβέρνα για το βράδυ, ρωτήστε μας.', 'A glass of wine from a local cellar and the best view on the island. If you want a taverna for the evening, just ask.'),
  },
]

export interface Distance {
  icon: IconName
  label: L10n
  value: L10n
}

export const distances: Distance[] = [
  { icon: 'wave', label: l('Παραλία', 'Beach'), value: l('400 μ. με τα πόδια', '400 m on foot') },
  { icon: 'home', label: l('Χωριό', 'Village'), value: l('1,5 χλμ.', '1.5 km') },
  { icon: 'anchor', label: l('Λιμάνι', 'Port'), value: l('12 χλμ. (15 λεπτά)', '12 km (15 min)') },
  { icon: 'car', label: l('Πάρκινγκ', 'Parking'), value: l('Δωρεάν, στο κτήμα', 'Free, on site') },
]

export interface Faq {
  q: L10n
  a: L10n
}

export const faqs: Faq[] = [
  {
    q: l('Τι ώρα είναι το check-in και το check-out;', 'What are check-in and check-out times?'),
    a: l('Check-in από τις 15:00 και check-out μέχρι τις 11:00. Αν φτάνετε νωρίτερα, αφήστε τις αποσκευές στην υποδοχή.', 'Check-in from 3 pm and check-out by 11 am. If you arrive earlier, leave your bags at the front desk.'),
  },
  {
    q: l('Πώς φτάνω από το λιμάνι;', 'How do I get here from the port?'),
    a: l('Είναι 15 λεπτά με το αυτοκίνητο. Πείτε μας την ώρα του πλοίου και μπορούμε να σας περιμένουμε στο λιμάνι.', 'It is a 15-minute drive. Tell us your ferry time and we can meet you at the port.'),
  },
  {
    q: l('Μπορώ να ακυρώσω την κράτηση;', 'Can I cancel my booking?'),
    a: l('Ναι, δωρεάν μέχρι 7 ημέρες πριν την άφιξη. Η πληρωμή γίνεται στο κατάλυμα.', 'Yes, free up to 7 days before arrival. Payment is made at the property.'),
  },
  {
    q: l('Δέχεστε παιδιά και κατοικίδια;', 'Do you welcome children and pets?'),
    a: l('Τα παιδιά είναι ευπρόσδεκτα και έχουμε παιδικά κρεβάτια. Για κατοικίδια, ρωτήστε μας πριν κλείσετε.', 'Children are welcome and we have baby cots. For pets, please ask before booking.'),
  },
  {
    q: l('Υπάρχει ελάχιστη διαμονή;', 'Is there a minimum stay?'),
    a: l('Δύο βράδια τις περισσότερες ημέρες και τρία βράδια από 15 Ιουλίου έως 31 Αυγούστου.', 'Two nights most days and three nights from 15 July to 31 August.'),
  },
]
