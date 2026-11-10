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

export type FaqCategory = 'arrival' | 'rooms' | 'booking' | 'area'

export interface Faq {
  cat: FaqCategory
  q: L10n
  a: L10n
}

export const faqCategories: { id: FaqCategory; label: L10n; icon: IconName }[] = [
  { id: 'arrival', label: l('Άφιξη', 'Arrival'), icon: 'clock' },
  { id: 'rooms', label: l('Δωμάτια και φαγητό', 'Rooms and food'), icon: 'bed' },
  { id: 'booking', label: l('Κράτηση και πληρωμή', 'Booking and payment'), icon: 'bell' },
  { id: 'area', label: l('Η περιοχή', 'The area'), icon: 'pin' },
]

export interface QuickFact {
  icon: IconName
  value: L10n
  label: L10n
}

export const quickFacts: QuickFact[] = [
  { icon: 'clock', value: l('από 15:00', 'from 3 pm'), label: l('Check-in', 'Check-in') },
  { icon: 'clock', value: l('έως 11:00', 'by 11 am'), label: l('Check-out', 'Check-out') },
  { icon: 'bell', value: l('7 ημέρες', '7 days'), label: l('Δωρεάν ακύρωση πριν την άφιξη', 'Free cancellation before arrival') },
  { icon: 'bed', value: l('2 βράδια', '2 nights'), label: l('Ελάχιστη διαμονή (3 από 15/7 έως 31/8)', 'Minimum stay (3 from 15 Jul to 31 Aug)') },
]

export const faqs: Faq[] = [
  {
    cat: 'arrival',
    q: l('Τι ώρα είναι το check-in και το check-out;', 'What are check-in and check-out times?'),
    a: l('Check-in από τις 15:00 και check-out μέχρι τις 11:00. Αν φτάνετε νωρίτερα, αφήστε τις αποσκευές στην υποδοχή και πηγαίνετε για μπάνιο. Θα σας ειδοποιήσουμε μόλις ετοιμαστεί το δωμάτιο.', 'Check-in from 3 pm and check-out by 11 am. If you arrive earlier, leave your bags at the front desk and go for a swim. We will let you know as soon as your room is ready.'),
  },
  {
    cat: 'arrival',
    q: l('Φτάνω αργά το βράδυ. Θα με περιμένετε;', 'I arrive late in the evening. Will someone be there?'),
    a: l('Η υποδοχή λειτουργεί 8:00–22:00. Για πιο αργά, γράψτε μας την ώρα και θα αφήσουμε το κλειδί και οδηγίες για να μπείτε με την ησυχία σας.', 'The front desk is open 8:00–22:00. For later arrivals, tell us your time and we will leave your key and directions so you can settle in quietly.'),
  },
  {
    cat: 'arrival',
    q: l('Πώς φτάνω από το λιμάνι;', 'How do I get here from the port?'),
    a: l('Είναι 15 λεπτά με το αυτοκίνητο. Πείτε μας την ώρα του πλοίου και μπορούμε να σας περιμένουμε στο λιμάνι. Η μεταφορά κανονίζεται μαζί μας πριν την άφιξη.', 'It is a 15-minute drive. Tell us your ferry time and we can meet you at the port. Transfers are arranged with us before you arrive.'),
  },
  {
    cat: 'arrival',
    q: l('Χρειάζομαι αυτοκίνητο;', 'Do I need a car?'),
    a: l('Για την παραλία και το φαγητό δεν χρειάζεστε: η παραλία είναι 400 μέτρα και δύο ταβέρνες είναι σε απόσταση περπατήματος. Για να γνωρίσετε το νησί, ένα αυτοκίνητο ή σκούτερ βοηθά. Το πάρκινγκ είναι δωρεάν.', 'For the beach and for dinner you do not: the beach is 400 metres away and two tavernas are within walking distance. To explore the island, a car or scooter helps. Parking is free.'),
  },
  {
    cat: 'rooms',
    q: l('Τι περιλαμβάνει το πρωινό;', 'What does breakfast include?'),
    a: l('Ψωμί από ξυλόφουρνο, γιαούρτι, μέλι, φρούτα, αυγά και τοπικά τυριά. Έχουμε επιλογές χωρίς γλουτένη και vegan αν μας το πείτε από πριν.', 'Wood-oven bread, yoghurt, honey, fruit, eggs and local cheeses. We have gluten-free and vegan options if you tell us beforehand.'),
  },
  {
    cat: 'rooms',
    q: l('Δέχεστε παιδιά και κατοικίδια;', 'Do you welcome children and pets?'),
    a: l('Τα παιδιά είναι ευπρόσδεκτα και έχουμε παιδικά κρεβάτια, ειδικά στο οικογενειακό διαμέρισμα. Για κατοικίδια, ρωτήστε μας πριν κλείσετε.', 'Children are welcome and we have baby cots, especially in the family apartment. For pets, please ask before booking.'),
  },
  {
    cat: 'rooms',
    q: l('Έχουν τα δωμάτια κλιματισμό και Wi-Fi;', 'Do the rooms have air conditioning and Wi-Fi?'),
    a: l('Ναι, όλα τα δωμάτια έχουν κλιματισμό και δωρεάν Wi-Fi σε όλο το κτήμα.', 'Yes, every room has air conditioning and there is free Wi-Fi throughout the estate.'),
  },
  {
    cat: 'booking',
    q: l('Μπορώ να ακυρώσω την κράτηση;', 'Can I cancel my booking?'),
    a: l('Ναι, δωρεάν μέχρι 7 ημέρες πριν την άφιξη. Μετά, επικοινωνήστε μαζί μας και θα βρούμε μια λύση, για παράδειγμα αλλαγή ημερομηνίας.', 'Yes, free up to 7 days before arrival. After that, get in touch and we will find a solution, for example changing your dates.'),
  },
  {
    cat: 'booking',
    q: l('Πότε και πώς πληρώνω;', 'When and how do I pay?'),
    a: l('Η πληρωμή γίνεται στο κατάλυμα, με μετρητά ή κάρτα. Δεν χρειάζεται προκαταβολή για να κλείσετε.', 'Payment is made at the property, in cash or by card. No deposit is needed to book.'),
  },
  {
    cat: 'booking',
    q: l('Υπάρχει ελάχιστη διαμονή;', 'Is there a minimum stay?'),
    a: l('Δύο βράδια τις περισσότερες ημέρες και τρία βράδια από 15 Ιουλίου έως 31 Αυγούστου.', 'Two nights most days and three nights from 15 July to 31 August.'),
  },
  {
    cat: 'area',
    q: l('Πότε είναι η καλύτερη εποχή να έρθω;', 'When is the best time to visit?'),
    a: l('Από τα τέλη Μαΐου έως τις αρχές Οκτωβρίου κάνετε μπάνιο. Ο Ιούνιος και ο Σεπτέμβριος έχουν ζεστή θάλασσα, λιγότερο κόσμο και καλύτερες τιμές.', 'From late May to early October you can swim. June and September bring warm water, fewer people and better prices.'),
  },
  {
    cat: 'area',
    q: l('Τι προτείνετε να κάνω στη γύρω περιοχή;', 'What do you recommend nearby?'),
    a: l('Βόλτα στο χωριό το απόγευμα, ταβέρνα με φρέσκο ψάρι στο λιμανάκι και μια διαδρομή στα βουνά με το αυτοκίνητο. Στην υποδοχή έχουμε χάρτη με τα αγαπημένα μας σημεία.', 'An afternoon walk in the village, a taverna with fresh fish by the little harbour and a drive up into the mountains. At the front desk we have a map with our favourite places.'),
  },
]
