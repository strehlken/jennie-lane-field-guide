/**
 * Content for the "What You Can Do" tab.
 * Pure data — no DOM, no rendering.
 *
 * Schema:
 *   safety:    expandable safety strip at top of tab
 *   sections:  top-level groupings (Kitchen, Workshop)
 *   buckets:   sub-buckets within each section
 *   items:     individual entries in a bucket
 *
 * Each item has:
 *   label   — bold lead-in text (plant name or use)
 *   spId    — optional; cross-links to #sp-N in the field guide
 *   note    — the rest of the line
 *
 * Each bucket has:
 *   title       — header text
 *   timing      — one of: "now", "weeks", "summer-fall", "fall", "anytime"
 *   bucketNote  — optional; trailing parenthetical note for buckets where all items share one species
 */

window.usesData = {

  safety: {
    summary: "Before you forage: what's sprayed, what's poisonous.",
    blocks: [
      {
        heading: "Ask the landscaper",
        body: "What they apply (pre-emergents, weed-and-feed, fertilizer NPK, grub treatment) and whether anyone sprays for mosquitoes. Drift reaches roughly ten feet past the mowed edge. Mosquito spray on shrub foliage means no harvest from those leaves or flowers for two weeks."
      },
      {
        heading: "Don't eat / keep kids clear",
        body: "Azalea (sp-10), pieris (sp-11), hydrangea (sp-9), daffodil bulbs (sp-16), black locust seeds + bark + leaves (sp-3 — flowers OK), sweetspire (sp-12) until confirmed. Daffodil rule: if a crushed leaf has no onion smell, do not eat. Bulbs have been mistaken for onions with serious consequences."
      }
    ]
  },

  sections: [

    // ============================================================
    // KITCHEN
    // ============================================================
    {
      id: "kitchen",
      kicker: "PART I",
      title: "Kitchen",
      intro: "Eat, drink, brew, cook, preserve. Most of these are seasonal — the timing tag tells you what's actually doable now.",
      buckets: [

        {
          title: "Eat raw",
          timing: "now",
          items: [
            { label: "Elm samaras", spId: "sp-2", note: "green papery seeds, eat by the handful straight off the branch. Tender for about two more weeks." },
            { label: "Garlic mustard", spId: "sp-14", note: "leaves, flowers, young stems. Garlicky, slightly bitter. The patch is huge — harvest hard." },
            { label: "Lilac florets", spId: "sp-7", note: "when they open. Pluck individual florets off the cluster. Perfumy, slightly bitter. Two-week window." },
            { label: "Redbud flowers", spId: "sp-8", note: "if confirmed. Magenta, pea-flavored, salad topper. Watch for bloom in the next 1–2 weeks." }
          ]
        },

        {
          title: "Cook first",
          timing: "now",
          items: [
            { label: "Stinging nettle tops", spId: "sp-15", note: "gloves on, top 4–6 inches. Boil 2–3 minutes, then treat as spinach. Heat kills the sting completely." },
            { label: "Bamboo shoots", spId: "sp-17", note: "new spring shoots emerging now. Slice, boil 20 minutes, change the water once. Raw shoots are cyanogenic — never skip the boil." },
            { label: "Garlic-mustard root", spId: "sp-14", note: "horseradish substitute. Grate fresh into vinegar." }
          ]
        },

        {
          title: "Tea",
          timing: "anytime",
          items: [
            { label: "Arborvitae foliage", spId: "sp-1", note: "pinch of fan-leaf in hot water. Very high Vitamin C. Don't drink gallons (thujone in concentration), but the occasional cup is fine and historically significant." },
            { label: "Spicebush twigs", spId: "sp-6", note: "snap a young twig, simmer 10 minutes. Allspice and citrus. One of the best wild teas in the Northeast." },
            { label: "Willow bark or twigs", spId: "sp-5", note: "chew a green twig or simmer the bark. Salicin → mild aspirin effect. Doubles as the medicinal entry." }
          ]
        },

        {
          title: "Tap for sap",
          timing: "now — closing",
          items: [
            { label: "Red maple", spId: "sp-4", note: "drill 1.5 inches deep, tap a spile, hang a bucket. Boil down roughly 50:1 to syrup. Lower sugar than sugar maple but the same product. Days left before buds end the run." }
          ]
        },

        {
          title: "Fritters & fried flowers",
          timing: "weeks",
          items: [
            { label: "Black locust flowers", spId: "sp-3", note: "May–June. Strip whole racemes from the cluster, dip in batter, fry. Sweet, fragrant. Flowers only — seeds, bark, leaves are toxic." },
            { label: "Lilac florets", spId: "sp-7", note: "same treatment, lighter floral flavor." },
            { label: "Redbud flowers", spId: "sp-8", note: "also batter-fryable, holds shape well." }
          ]
        },

        {
          title: "Syrups & jellies",
          timing: "weeks → fall",
          items: [
            { label: "Lilac syrup", spId: "sp-7", note: "steep flowers in hot simple syrup, strain. Two-week harvest window starting soon." },
            { label: "Black locust honey or syrup", spId: "sp-3", note: "May–June. Infuse honey with the flowers, or simmer into syrup." },
            { label: "Redbud-flower jelly", spId: "sp-8", note: "pectin and sugar. Ends up bright pink." },
            { label: "Spicebush-berry shrub or rum", spId: "sp-6", note: "fall harvest. Red berries infuse vinegar or spirits beautifully." },
            { label: "Barberry jelly", spId: "sp-13", note: "fall. Tart, high in Vitamin C. Harvest is also ecologically virtuous — invasive." }
          ]
        },

        {
          title: "Pickle & preserve",
          timing: "fall, mostly",
          items: [
            { label: "Redbud buds", spId: "sp-8", note: "pick before they open, brine like capers." },
            { label: "Garlic-mustard seeds", spId: "sp-14", note: "late summer. Dry the pods, thresh out seeds, grind = mustard." },
            { label: "Barberry berries", spId: "sp-13", note: "dry on a tray. Use like sumac on rice and meat dishes." },
            { label: "Bamboo shoots", spId: "sp-17", note: "boil first (always), then lacto-ferment or vinegar pickle. Keeps for months." }
          ]
        },

        {
          title: "Medicine",
          timing: "anytime",
          items: [
            { label: "Willow bark or twigs", spId: "sp-5", note: "salicin — aspirin's grandfather. Chew a green twig for a headache, or simmer bark for fever tea." },
            { label: "Stinging nettle", spId: "sp-15", note: "anti-inflammatory infusion or cooked greens. Iron, calcium, magnesium, A, C, K." },
            { label: "Barberry root bark", spId: "sp-13", note: "berberine — antimicrobial, well-studied. Strong stuff. Small doses." },
            { label: "Elm inner bark", spId: "sp-2", note: "mucilaginous, soothes sore throats. Slippery-elm equivalent." },
            { label: "Spicebush", spId: "sp-6", note: "warming tonic. Tea for colds and slow stomachs." }
          ]
        }

      ]
    },

    // ============================================================
    // WORKSHOP
    // ============================================================
    {
      id: "workshop",
      kicker: "PART II",
      title: "Workshop",
      intro: "Build, weave, burn. Most of this is anytime work — no seasonal pressure.",
      buckets: [

        {
          title: "Build with bamboo",
          timing: "anytime",
          bucketNote: "All from the bamboo grove (sp-17). Cut mature culms — yellow-green and hard, not new shoots. Dry 2–4 weeks before structural use.",
          items: [
            { label: "Shelter frames", note: "lash culms with cordage for tripods, lean-tos, kid forts." },
            { label: "Fishing rods, spear shafts", note: "straight, light, very strong for the weight." },
            { label: "Garden stakes, trellises, bean poles", note: "endless supply, free, replaces every plastic stake you've bought." },
            { label: "Water vessels", note: "cut between two nodes — sealed bottom, open top. Holds water." },
            { label: "Torches", note: "split the top into a brush, stuff with tinder, soak in fat or wax." },
            { label: "Tool handles", note: "durable and replaceable when they break." }
          ]
        },

        {
          title: "Cordage & weaving",
          timing: "anytime",
          items: [
            { label: "Willow live-staking", spId: "sp-5", note: "drive a fresh-cut willow branch into wet ground — it grows into a new tree. Free fence row. Plant property edges this way." },
            { label: "Willow basketry", spId: "sp-5", note: "cut whips, soak overnight, weave. Beginner-friendly material." },
            { label: "Nettle stem fiber", spId: "sp-15", note: "ret the stems in water for a week, scrape, twist. Strong as flax. Real cordage." },
            { label: "Bamboo splits", spId: "sp-17", note: "split a culm into thin strips for lashing or mat-weaving." }
          ]
        },

        {
          title: "Firewood & tinder",
          timing: "anytime",
          items: [
            { label: "Black locust", spId: "sp-3", note: "premium. Burns hot, long, low ash. Hardest common firewood in the Northeast. Also the best fence-post material." },
            { label: "Red maple", spId: "sp-4", note: "solid moderate firewood, splits clean." },
            { label: "Bamboo", spId: "sp-17", note: "burns hot and fast, cracks loud, throws sparks. Good kindling — watch the pops." },
            { label: "Hydrangea hollow stems", spId: "sp-9", note: "dried = excellent tinder. The one practical use of the toxic shrub." },
            { label: "Arborvitae trimmings", spId: "sp-1", note: "resinous, catches fast. Kindling." },
            { label: "Fallen-corner deadwood", note: "the fallen-tree corner has seasoned willow and elm/cottonwood already on the ground. Take what's down. Leave what's standing — snags are critical wildlife habitat." }
          ]
        }

      ]
    }

  ]
};
