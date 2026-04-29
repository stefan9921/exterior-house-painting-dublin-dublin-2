// Local landmarks and intro sentences per area, used by /areas/[slug]/page.tsx.
// Picked landmarks deliberately well-known so the copy reads naturally.
export const areaIntros: Record<
  string,
  { landmarks: string; intro: string }
> = {
  navan: {
    landmarks: "Navan Shopping Centre, the Boyne River walk and Solstice Arts Centre",
    intro:
      "From Navan town centre out to Johnstown and Windtown, our Dublin-based painting crew works across Navan most weeks of the year. Painters Navan homeowners trust for exterior render, masonry and full house repaints.",
  },
  drogheda: {
    landmarks: "the Boyne Valley, St Laurence's Gate and Drogheda Marina",
    intro:
      "Drogheda's mix of period townhouses and modern estates needs different paint systems on every job. Our crew delivers the right prep and finish whether you're in the centre, Termonfeckin or out towards Bettystown.",
  },
  mullingar: {
    landmarks: "Lough Owel, Belvedere House and Mullingar Cathedral",
    intro:
      "Painters Mullingar households turn to for exterior masonry, render and full interior repaints. We schedule Mullingar runs once or twice a week from our Dublin 2 base.",
  },
  tallaght: {
    landmarks: "The Square Tallaght, Tallaght Stadium and Sean Walsh Park",
    intro:
      "From Old Bawn to Kilnamanagh, Tallaght's housing estates are the bread and butter of Dublin painting work. We've completed exterior repaints, full interiors, and apartment-block contracts across all of Tallaght's postcodes.",
  },
  swords: {
    landmarks: "Swords Castle, Pavilions Shopping Centre and the Ward River Valley",
    intro:
      "Painters Swords property owners book for both single-house exteriors and full apartment-block contracts. Quick access via the M1 means we can be on site for free quotes the next morning.",
  },
  bray: {
    landmarks: "Bray Head, the Promenade and Bray Marina",
    intro:
      "Bray's coastal exposure makes paint choice critical — salt air and prevailing south-westerlies eat through cheap finishes. We spec marine-grade primer plus weather-shield masonry coats for every Bray exterior.",
  },
  naas: {
    landmarks: "Naas Racecourse, Punchestown and the Grand Canal at Sallins",
    intro:
      "Painters Naas homeowners and businesses rely on for fixed-price quotes and on-time delivery. We cover Naas town centre, Sallins, Kill and the surrounding villages.",
  },
  celbridge: {
    landmarks: "Castletown House, the Liffey Walk and Celbridge Abbey",
    intro:
      "Celbridge's mix of heritage homes and 1980s estates demands a careful eye for prep — older render needs stabilising, newer pebbledash needs the right breathable coat. We bring both.",
  },
  lucan: {
    landmarks: "the Strawberry Beds, Lucan Demesne and Lucan Village",
    intro:
      "Painters Lucan residents call for exterior repaints, interior decoration and commercial fit-outs across Adamstown, Esker and Lucan Village.",
  },
  malahide: {
    landmarks: "Malahide Castle, Malahide Marina and the coastal walk to Portmarnock",
    intro:
      "Malahide's seafront properties need genuinely weatherproof paint systems. Our crew has repainted Georgian terraces, modern semis and shop fronts across the village and surrounding estates.",
  },
  blanchardstown: {
    landmarks: "Blanchardstown Centre, Tyrrelstown and the Tolka Valley Park",
    intro:
      "From the Blanchardstown estates to Castleknock and Clonsilla, our painters cover every postcode in Dublin 15. Same-week site visits, fixed-price quotes within 24 hours.",
  },
  ranelagh: {
    landmarks: "Ranelagh Gardens, the LUAS Green Line and the village strip",
    intro:
      "Ranelagh's rows of red-brick Victorians demand a careful approach to brick, render and ornate woodwork. We've worked on dozens of period homes between the village and Sandford Road.",
  },
  rathmines: {
    landmarks: "Rathmines Library, Portobello and Mountpleasant Square",
    intro:
      "Painters Rathmines tenants and landlords book for both quick rental refreshes and full Victorian restorations. We work seven days a week so weekend turnarounds are possible.",
  },
  sandyford: {
    landmarks: "Sandyford Business District, Stepaside and Three Rock Mountain",
    intro:
      "Sandyford's mix of office blocks and 90s housing estates suits both our commercial and residential teams. We schedule out-of-hours commercial work to keep your business running.",
  },
  blackrock: {
    landmarks: "Blackrock Park, the seafront DART line and Blackrock Market",
    intro:
      "Blackrock's coastal location means every exterior gets pre-treated for salt air. Our marine-grade prep work has kept Blackrock seafront paintwork looking sharp seven and eight years on.",
  },
  dundrum: {
    landmarks: "Dundrum Town Centre, the Dundrum LUAS line and Marlay Park",
    intro:
      "Dundrum's family homes — semis, bungalows, larger detached properties — are some of our most repeat-customer-heavy jobs. Word-of-mouth in Dundrum keeps the crew busy most weeks.",
  },
  maynooth: {
    landmarks: "Maynooth University, Carton House and the Royal Canal",
    intro:
      "From the campus to the rapidly growing estates around Carton Park and Lyreen Manor, painters Maynooth families call us for both exterior repaints and full-house decorating.",
  },
  greystones: {
    landmarks: "Greystones Harbour, the Cliff Walk to Bray and Charlesland",
    intro:
      "Greystones' seafront homes need the same coastal-grade prep as Bray and Blackrock. We pair primer-stabilised masonry with weather-shield topcoats engineered for salt-laden Wicklow air.",
  },
  clontarf: {
    landmarks: "Clontarf Promenade, St Anne's Park and Bull Island",
    intro:
      "Painters Clontarf locals trust for exterior masonry, sea-facing render and full house repaints. Clontarf's Edwardian and 1930s housing stock is some of the most rewarding to bring back to life.",
  },
  howth: {
    landmarks: "Howth Harbour, the Cliff Walk and Howth Summit",
    intro:
      "Howth's headland weather is brutal on cheap paint. We've spec'd and applied marine-grade masonry systems on dozens of Howth seafront properties — they hold their colour and shed water for years.",
  },
};

export function getAreaIntro(slug: string) {
  return (
    areaIntros[slug] ?? {
      landmarks: "the local high street and surrounding neighbourhoods",
      intro: `Our Dublin-based painting crew covers ${slug.replace("-", " ")} most weeks of the year for exterior repaints, masonry work and full interior projects.`,
    }
  );
}
