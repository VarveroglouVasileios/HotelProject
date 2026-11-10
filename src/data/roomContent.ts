import type { L10n } from '@/lib/types'
import type { IconName } from '@/components/Icon.vue'

const l = (el: string, en: string): L10n => ({ el, en })

export interface RoomContent {
  view: L10n
  story: L10n
  amenities: IconName[]
  /** File names (without extension) in public/images. */
  gallery: string[]
}

export const amenityLabels: Record<IconName, L10n> = {
  bed: l('Διπλό κρεβάτι ή δύο μονά', 'Double bed or two singles'),
  users: l('Ευρύχωρο για παρέα', 'Room for a group'),
  ruler: l('Μεγάλος χώρος', 'Generous space'),
  wave: l('Θέα θάλασσα', 'Sea view'),
  sun: l('Ιδιωτική βεράντα', 'Private terrace'),
  wifi: l('Δωρεάν Wi-Fi', 'Free Wi-Fi'),
  coffee: l('Πρωινό στην αυλή', 'Breakfast in the courtyard'),
  car: l('Δωρεάν πάρκινγκ', 'Free parking'),
  snow: l('Κλιματισμός', 'Air conditioning'),
  kitchen: l('Μικρή κουζίνα', 'Kitchenette'),
  pool: l('Ιδιωτική πισίνα', 'Private pool'),
  leaf: l('Θέα στον ελαιώνα', 'Olive grove view'),
  clock: l('Ευέλικτο check-in', 'Flexible check-in'),
  pin: l('Κοντά στην παραλία', 'Close to the beach'),
  x: l('', ''),
  left: l('', ''),
  right: l('', ''),
  menu: l('', ''),
  arrow: l('', ''),
  wine: l('Μίνι μπαρ με τοπικά κρασιά', 'Minibar with local wines'),
  bell: l('Υποδοχή 8:00–22:00', 'Front desk 8:00–22:00'),
  anchor: l('Μεταφορά από το λιμάνι', 'Port transfer'),
  home: l('Ιδιωτικότητα', 'Privacy'),
  sunset: l('Δύση ήλιου από το μπαλκόνι', 'Sunset from the balcony'),
}

export const roomContent: Record<string, RoomContent> = {
  'garden-double': {
    view: l('Κήπος με ελιές', 'Olive garden'),
    story: l(
      'Ένα ήσυχο δωμάτιο στο ισόγειο, με πόρτα που ανοίγει κατευθείαν στη βεράντα και στον κήπο. Ξύλο ελιάς, λινά κλινοσκεπάσματα και τα πρωινά, ο ήλιος μπαίνει από τα δεξιά. Το δωμάτιο που διαλέγουν όσοι θέλουν απλά να ξεκουραστούν.',
      'A quiet ground-floor room whose door opens straight onto the terrace and the garden. Olive wood, linen bedding, and in the morning the sun comes in from the right. The room guests choose when they simply want to rest.',
    ),
    amenities: ['snow', 'sun', 'leaf', 'coffee', 'wifi', 'car'],
    gallery: ['garden-double', 'bathroom', 'breakfast'],
  },
  'sea-suite': {
    view: l('Κόλπος και θάλασσα', 'The bay and the sea'),
    story: l(
      'Η σουίτα με το μπαλκόνι στον κόλπο. Μεγάλο κρεβάτι, λευκές κουρτίνες που κουνάει το μελτέμι και ένα τραπεζάκι για το βραδινό ποτό. Στις 20:15 το καλοκαίρι, ο ήλιος βυθίζεται ακριβώς μπροστά σας.',
      'The suite with the balcony over the bay. A large bed, white curtains that the meltemi moves, and a small table for an evening drink. At 8:15 pm in summer, the sun sets right in front of you.',
    ),
    amenities: ['wave', 'sunset', 'wine', 'snow', 'wifi', 'coffee'],
    gallery: ['sea-suite', 'sunset', 'bathroom'],
  },
  'family-apartment': {
    view: l('Αυλή και ελαιώνας', 'Courtyard and grove'),
    story: l(
      'Δύο υπνοδωμάτια, σαλόνι και μικρή κουζίνα, με πλακάκι-κεραμίδι και ξύλινα δοκάρια. Έχει χώρο για παιδιά να παίζουν και για μεγάλους να μαγειρέψουν ένα απλό βραδινό. Παιδικό κρεβάτι κατόπιν αιτήματος.',
      'Two bedrooms, a living room and a small kitchen, with terracotta tiles and wooden beams. There is room for children to play and for adults to cook a simple dinner. Baby cot on request.',
    ),
    amenities: ['bed', 'kitchen', 'users', 'snow', 'wifi', 'car'],
    gallery: ['family-apartment', 'breakfast', 'olive-path'],
  },
  'pool-villa': {
    view: l('Πισίνα και θάλασσα στο βάθος', 'The pool, with the sea beyond'),
    story: l(
      'Ανεξάρτητη βίλα με ιδιωτική πισίνα, τρία υπνοδωμάτια και πλήρη ιδιωτικότητα, κάτω από τις ελιές. Το βράδυ τα φώτα του κήπου ανάβουν χαμηλά και η πισίνα γίνεται καθρέφτης. Για παρέες και οικογένειες που θέλουν το δικό τους σπίτι.',
      'A detached villa with a private pool, three bedrooms and complete privacy under the olive trees. In the evening the garden lights glow low and the pool becomes a mirror. For groups and families who want a home of their own.',
    ),
    amenities: ['pool', 'home', 'bed', 'car', 'snow', 'wifi'],
    gallery: ['pool-villa', 'pool-evening', 'bathroom'],
  },
}
