import { Atom, BookOpen, BrainCircuit, CheckCircle2, ChevronRight, ClipboardCheck, FlaskConical, GraduationCap, Moon, Search, Sparkles, SunMedium, Target, Trophy, Bookmark, Lightbulb, ArrowRightLeft, Layers3, NotebookPen, Eye, EyeOff, RefreshCw, ShieldCheck, FlaskRound, Landmark, CircleDashed } from 'lucide-react';

export const chapters = [
  {
    id: 'haloalkanes',
    name: 'Haloalkanes and Haloarenes',
    focus: 'SN1/SN2, stereochemistry, optical isomerism',
    progress: 78,
    summary: 'Master substitution, elimination, and stereochemical outcomes with named reactions like Finkelstein and Swarts.',
    keyPoints: ['SN1 vs SN2', 'Optical isomerism', 'Wurtz reaction', 'Aryl halides']
  },
  {
    id: 'alcohols',
    name: 'Alcohols, Phenols and Ethers',
    focus: 'Preparation, acidic strength, ether cleavage',
    progress: 69,
    summary: 'Understand oxidation state changes, acidity trends, and mechanism-based conversions.',
    keyPoints: ['Lucas test', 'Kolbe reaction', 'Phenol acidity', 'Ether cleavage']
  },
  {
    id: 'aldehydes',
    name: 'Aldehydes, Ketones and Carboxylic Acids',
    focus: 'Nucleophilic addition, aldol, carboxylate acidity',
    progress: 84,
    summary: 'Connect reagent behaviour with product formation and common enzyme-like synthetic logic.',
    keyPoints: ['Aldol condensation', 'Cannizzaro', 'Acidity of acids', 'Decarboxylation']
  },
  {
    id: 'amines',
    name: 'Amines',
    focus: 'Basicity, diazonium conversions, Hinsberg test',
    progress: 71,
    summary: 'Learn the effect of resonance, substitution, and diazonium chemistry on practical conversions.',
    keyPoints: ['Basicity order', 'Carbylamine test', 'Hinsberg test', 'Diazonium chemistry']
  },
  {
    id: 'biomolecules',
    name: 'Biomolecules',
    focus: 'Carbohydrates, proteins, nucleic acids',
    progress: 62,
    summary: 'Link structure to biological function and memorize essential biomolecule classifications.',
    keyPoints: ['Mutarotation', 'Peptide linkage', 'DNA/RNA', 'Monosaccharides']
  }
];

export const overviewStats = [
  { label: 'Named reactions', value: '42+', icon: FlaskConical },
  { label: 'Quick conversions', value: '120+', icon: ArrowRightLeft },
  { label: 'Practice sets', value: '35', icon: ClipboardCheck },
  { label: 'Revision streak', value: '7 days', icon: Trophy }
];

export const reactionData = [
  {
    id: 'finkelstein',
    name: 'Finkelstein Reaction',
    type: 'Haloalkanes',
    equation: 'R–Cl + NaI → R–I + NaCl',
    reagents: ['NaI in dry acetone'],
    mechanism: ['SN2 backside attack by I⁻', 'Halide exchange due to NaCl/NaBr precipitation', 'Works best with primary alkyl halides'],
    trick: 'If product is iodide from chloride/bromide, think Finkelstein. Dry acetone drives equilibrium forward by precipitating NaX.',
    route: 'alkyl halide → alkyl iodide'
  },
  {
    id: 'swarts',
    name: 'Swarts Reaction',
    type: 'Haloalkanes',
    equation: 'R–Cl + AgF → R–F + AgCl',
    reagents: ['AgF', 'SbF3 / Hg2F2 (variation)'],
    mechanism: ['Halogen exchange by fluoride', 'Selective formation of alkyl fluoride', 'Not a simple SN2 in all cases'],
    trick: 'Swarts = fluorination of alkyl halides; remember it is a halogen-exchange reaction.',
    route: 'alkyl chloride → alkyl fluoride'
  },
  {
    id: 'wurtz',
    name: 'Wurtz Reaction',
    type: 'Haloalkanes',
    equation: '2R–X + 2Na → R–R + 2NaX',
    reagents: ['Na (metal)', 'Dry ether'],
    mechanism: ['Two alkyl halide molecules couple', 'Radical intermediates may be involved', 'Best for symmetric alkanes'],
    trick: 'Wurtz gives longer alkane by coupling; avoids tertiary halides because elimination dominates.',
    route: 'alkyl halide → higher alkane'
  },
  {
    id: 'williamson',
    name: 'Williamson Synthesis',
    type: 'Ethers',
    equation: 'R–O⁻ + R′–X → R–O–R′ + X⁻',
    reagents: ['Na metal / NaOH to form alkoxide', 'Primary alkyl halide'],
    mechanism: ['SN2 attack of alkoxide on alkyl halide', 'Works best with primary substrates', 'Avoid bulky secondary/tertiary alkyl halides'],
    trick: 'Williamson is the standard ether synthesis. Use primary halide to avoid elimination.',
    route: 'alcohol → ether'
  },
  {
    id: 'reimer',
    name: 'Reimer-Tiemann Reaction',
    type: 'Phenols',
    equation: 'C6H5OH + CHCl3 + NaOH → o-/p-hydroxybenzaldehyde',
    reagents: ['CHCl3', 'NaOH', 'H3O+'],
    mechanism: ['Dichlorocarbene generation', 'Electrophilic substitution on phenoxide', 'Ortho/para hydroxybenzaldehyde formation'],
    trick: 'Phenol + chloroform + alkali → salicylaldehyde; ortho major because phenoxide is strongly activated.',
    route: 'phenol → o-hydroxybenzaldehyde'
  },
  {
    id: 'kolbe',
    name: 'Kolbe’s Reaction',
    type: 'Phenols',
    equation: 'C6H5ONa + CO2 → o-HOC6H4COONa → salicylic acid',
    reagents: ['NaOH', 'CO2', 'H+'],
    mechanism: ['Phenoxide acts as nucleophile', 'Carboxylation at ortho position', 'Acid workup gives salicylic acid'],
    trick: 'Kolbe is carboxylation of phenoxide; product is salicylic acid.',
    route: 'phenol → salicylic acid'
  },
  {
    id: 'friedel-crafts-acylation',
    name: 'Friedel–Crafts Acylation',
    type: 'Arenes',
    equation: 'Ar–H + RCOCl / AlCl3 → Ar–COR + HCl',
    reagents: ['RCOCl', 'AlCl3'],
    mechanism: ['Electrophile generation', 'Aromatic substitution', 'Deprotonation restores aromaticity'],
    trick: 'Acylation is preferred over alkylation because product is deactivated and stops overreaction.',
    route: 'arene → aryl ketone'
  },
  {
    id: 'aldol',
    name: 'Aldol Condensation',
    type: 'Aldehydes/Ketones',
    equation: '2RCHO → β-hydroxy aldehyde → α,β-unsaturated aldehyde',
    reagents: ['NaOH / dil. base', 'Heat'],
    mechanism: ['Enolate formation', 'Nucleophilic attack on another carbonyl', 'Dehydration to conjugated product'],
    trick: 'Look for β-hydroxy and then α,β-unsaturated carbonyl. Base-catalysed condensation best with aldehydes bearing α-H.',
    route: 'aldehyde → β-hydroxy aldehyde / enal'
  },
  {
    id: 'cannizzaro',
    name: 'Cannizzaro Reaction',
    type: 'Aldehydes/Ketones',
    equation: '2HCHO + NaOH → CH3OH + HCOONa',
    reagents: ['Conc. NaOH'],
    mechanism: ['Hydride transfer between aldehydes', 'Disproportionation reaction', 'No α-H required'],
    trick: 'Aldehydes without α-H undergo Cannizzaro; formaldehyde gives methanol + formate.',
    route: 'non-α-H aldehyde → alcohol + carboxylate'
  },
  {
    id: 'rosenmund',
    name: 'Rosenmund Reduction',
    type: 'Aldehydes/Ketones',
    equation: 'RCOCl + H2 / Pd-BaSO4 → RCHO',
    reagents: ['H2', 'Pd-BaSO4'],
    mechanism: ['Selective catalytic hydrogenation of acid chloride', 'Prevents over-reduction to alcohol'],
    trick: 'Acid chlorides to aldehydes using poisoned catalyst; Rosenmund is the selective reduction route.',
    route: 'acid chloride → aldehyde'
  },
  {
    id: 'clemmensen',
    name: 'Clemmensen Reduction',
    type: 'Aldehydes/Ketones',
    equation: 'RCO–R′ + Zn/Hg + HCl → RCH2–R′',
    reagents: ['Zn-Hg', 'HCl'],
    mechanism: ['Reducing carbonyl to methylene'],
    trick: 'Carbonyl to CH2 under acidic conditions; works well for acid-sensitive groups with caution.',
    route: 'ketone → alkane'
  },
  {
    id: 'wolff-kishner',
    name: 'Wolff–Kishner Reduction',
    type: 'Aldehydes/Ketones',
    equation: 'RCO–R′ + NH2NH2 / KOH, heat → RCH2–R′',
    reagents: ['NH2NH2', 'KOH', 'Heat'],
    mechanism: ['Carbonyl converted to hydrazone then to methylene'],
    trick: 'Use Wolff–Kishner for basic conditions and acid-sensitive substrates; removes carbonyl oxygen.',
    route: 'carbonyl → alkane'
  },
  {
    id: 'gattermann-koch',
    name: 'Gattermann–Koch Reaction',
    type: 'Arenes',
    equation: 'Ar–H + CO + HCl / AlCl3 → Ar–CHO',
    reagents: ['CO', 'HCl', 'AlCl3/CuCl'],
    mechanism: ['Formylation via formyl cation equivalent'],
    trick: 'Aromatic aldehydes from benzene derivatives using CO and HCl; this is formylation under Gattermann–Koch conditions.',
    route: 'arene → aromatic aldehyde'
  },
  {
    id: 'hell-volhard-zelinsky',
    name: 'Hell–Volhard–Zelinsky Reaction',
    type: 'Carboxylic acids',
    equation: 'RCH2COOH + Br2 / P → α-bromo acid',
    reagents: ['Br2', 'Red phosphorus'],
    mechanism: ['α-Halogenation of carboxylic acids'],
    trick: 'The α-position gets brominated without affecting the carboxyl group because of phosphorus activation.',
    route: 'carboxylic acid → α-bromo acid'
  },
  {
    id: 'diazotization',
    name: 'Diazotization',
    type: 'Amines',
    equation: 'ArNH2 + NaNO2 + HCl, 0–5°C → ArN2+Cl−',
    reagents: ['NaNO2', 'HCl', '0–5 °C'],
    mechanism: ['Nitrosation of primary aromatic amine'],
    trick: 'Diazonium salts are prepared at low temperatures to avoid decomposition.',
    route: 'aniline → diazonium salt'
  },
  {
    id: 'sandmeyer',
    name: 'Sandmeyer Reaction',
    type: 'Amines',
    equation: 'ArN2+Cl− + CuCl/CuBr/CuCN → ArCl/ArBr/ArCN',
    reagents: ['CuCl', 'CuBr', 'CuCN', 'Cu2Cl2'],
    mechanism: ['Radical/inner-sphere substitution on diazonium salt'],
    trick: 'A diazonium group can be replaced by Cl, Br, CN, etc. using copper salts.',
    route: 'aryl diazonium → halide or cyanide'
  },
  {
    id: 'gattermann',
    name: 'Gattermann Reaction',
    type: 'Amines',
    equation: 'ArN2+Cl− + Cu/HCl → ArCl',
    reagents: ['Cu/HCl'],
    mechanism: ['Replacement of diazonium group by halogen without copper salts in a more basic sense'],
    trick: 'Gattermann is like Sandmeyer, but uses copper powder and HCl/HBr instead of CuX salts.',
    route: 'diazonium → aryl halide'
  },
  {
    id: 'hinsberg',
    name: 'Hinsberg Test',
    type: 'Amines',
    equation: 'RNH2 + C6H5SO2Cl → sulfonamide derivative',
    reagents: ['C6H5SO2Cl', 'KOH'],
    mechanism: ['Formation of sulfonamide and solubility differences'],
    trick: 'Primary amines form soluble sulfonamides in alkali; secondary amines form insoluble products; tertiary amines do not react.',
    route: 'amine classification'
  },
  {
    id: 'carbylamine',
    name: 'Carbylamine Reaction',
    type: 'Amines',
    equation: 'RNH2 + CHCl3 + 3KOH → RNC + 3KCl + 3H2O',
    reagents: ['CHCl3', 'KOH', 'Heat'],
    mechanism: ['Carbene-like intermediate leads to isocyanide'],
    trick: 'Only primary amines give foul-smelling isocyanide; this is a classic test for primary amines.',
    route: 'primary amine → isocyanide'
  },
  {
    id: 'grignard',
    name: 'Grignard Addition',
    type: 'Carbonyls',
    equation: 'R–MgX + R′CHO → R–CH(OMgX)–R′ → R–CH(OH)–R′',
    reagents: ['RMgX', 'dry ether', 'H3O+'],
    mechanism: ['Nucleophilic addition to carbonyl'],
    trick: 'Grignard reagent adds to carbonyls to form alcohols; carbonyl carbon becomes alcohol carbon.',
    route: 'carbonyl → alcohol'
  },
  {
    id: 'ozonolysis',
    name: 'Ozonolysis',
    type: 'Alkenes',
    equation: 'RCH=CHR′ + O3 → RCHO + R′CHO',
    reagents: ['O3', 'Zn/H2O or reductive workup'],
    mechanism: ['Formation and cleavage of ozonide'],
    trick: 'Ozonolysis cleaves C=C and gives carbonyl fragments; the alkene carbon skeleton determines product pieces.',
    route: 'alkene → carbonyl fragments'
  },
  {
    id: 'wurtz-fittig',
    name: 'Wurtz–Fittig Reaction',
    type: 'Arenes',
    equation: 'Ar–X + R–X + 2Na → Ar–R + 2NaX',
    reagents: ['Na', 'Dry ether'],
    mechanism: ['Coupling of aryl and alkyl halides'],
    trick: 'Mixture of aryl and alkyl halides gives alkylated aromatic product.',
    route: 'aryl halide + alkyl halide → biaryl/alkyl arene'
  },
  {
    id: 'friede-crafts-alkylation',
    name: 'Friedel–Crafts Alkylation',
    type: 'Arenes',
    equation: 'Ar–H + R–X + AlCl3 → Ar–R + HX',
    reagents: ['R–X', 'AlCl3'],
    mechanism: ['Carbocation electrophile formation', 'EAS substitution'],
    trick: 'This can overalkylate; acylation is often preferred for cleaner outcomes.',
    route: 'arene → alkyl benzene'
  },
  {
    id: 'nitration',
    name: 'Nitration',
    type: 'Arenes',
    equation: 'Ar–H + HNO3/H2SO4 → Ar–NO2',
    reagents: ['Conc. HNO3', 'Conc. H2SO4'],
    mechanism: ['Nitronium ion generation', 'Electrophilic aromatic substitution'],
    trick: 'The nitro group is deactivating and meta-directing on further substitution.',
    route: 'benzene → nitrobenzene'
  },
  {
    id: 'sulfonation',
    name: 'Sulfonation',
    type: 'Arenes',
    equation: 'Ar–H + H2SO4 / SO3 → Ar–SO3H',
    reagents: ['Conc. H2SO4', 'SO3'],
    mechanism: ['Electrophilic substitution with SO3'],
    trick: 'SO3H group is strongly activating for ortho/para direction in subsequent substitution.',
    route: 'arene → aromatic sulfonic acid'
  },
  {
    id: 'alkylation',
    name: 'Acylation of Alcohols',
    type: 'Alcohols',
    equation: 'ROH + R′COCl → R′COOR + HCl',
    reagents: ['Acyl chloride', 'Base'],
    mechanism: ['Nucleophilic substitution at acyl carbon'],
    trick: 'Alcohol acylation forms esters; the OH group is converted into an ester for protection or synthesis.',
    route: 'alcohol → ester'
  },
  {
    id: 'dehydration',
    name: 'Dehydration of Alcohols',
    type: 'Alcohols',
    equation: 'RCH2CH2OH → alkene + H2O',
    reagents: ['Conc. H2SO4 / heat'],
    mechanism: ['E1 for secondary/tertiary alcohols'],
    trick: 'Zaitsev product dominates unless steric hindrance or rearrangement changes the pathway.',
    route: 'alcohol → alkene'
  },
  {
    id: 'lucas',
    name: 'Lucas Test',
    type: 'Alcohols',
    equation: 'ROH + ZnCl2/HCl → RCl + H2O',
    reagents: ['Conc. HCl', 'ZnCl2'],
    mechanism: ['Substitution to alkyl chloride'],
    trick: 'Tertiary alcohols give turbidity immediately; primary alcohols react slowly.',
    route: 'alcohol classification'
  },
  {
    id: 'bh',
    name: 'Bromination of Phenol',
    type: 'Phenols',
    equation: 'C6H5OH + Br2 → 2,4,6-tribromophenol',
    reagents: ['Br2'],
    mechanism: ['Electrophilic aromatic substitution'],
    trick: 'Phenol is highly activated and brominates rapidly even without a catalyst.',
    route: 'phenol → tribromophenol'
  },
  {
    id: 'esterification',
    name: 'Esterification',
    type: 'Carboxylic acids',
    equation: 'RCOOH + R′OH → RCOOR′ + H2O',
    reagents: ['Conc. H2SO4', 'heat'],
    mechanism: ['Protonation of carbonyl oxygen, nucleophilic attack by alcohol'],
    trick: 'Carboxylic acid + alcohol under acidic conditions gives ester; water is removed to shift equilibrium.',
    route: 'acid + alcohol → ester'
  },
  {
    id: 'saponification',
    name: 'Saponification',
    type: 'Carboxylic acids',
    equation: 'RCOOR′ + NaOH → RCOONa + R′OH',
    reagents: ['NaOH'],
    mechanism: ['Base hydrolysis of ester'],
    trick: 'This process is used to make soaps from triglycerides and esters.',
    route: 'ester → carboxylate + alcohol'
  },
  {
    id: 'decarboxylation',
    name: 'Decarboxylation',
    type: 'Carboxylic acids',
    equation: 'RCOONa + NaOH/CaO → RH + Na2CO3',
    reagents: ['NaOH/CaO', 'heat'],
    mechanism: ['Loss of CO2 from carboxylate salt'],
    trick: 'Decarboxylation of β-keto acids and malonic acids is especially easy because of resonance stabilization.',
    route: 'carboxylic acid salt → alkane'
  },
  {
    id: 'ammonolysis',
    name: 'Ammonolysis of Haloalkanes',
    type: 'Amines',
    equation: 'R–X + NH3 → RNH2 + HX',
    reagents: ['NH3', 'heat'],
    mechanism: ['Nucleophilic substitution by ammonia'],
    trick: 'This is how primary amines are prepared from alkyl halides; further alkylation can lead to mixtures.',
    route: 'haloalkane → amine'
  },
  {
    id: 'gabriel',
    name: 'Gabriel Phthalimide Synthesis',
    type: 'Amines',
    equation: 'Phthalimide + KOH + R–X → N-alkyl phthalimide → RNH2',
    reagents: ['KOH', 'R–X', 'H3O+ or hydrolysis'],
    mechanism: ['SN2 substitution with phthalimide anion'],
    trick: 'This is a selective path to primary amines without worrying about over-alkylation.',
    route: 'alkyl halide → primary amine'
  },
  {
    id: 'hoffmann',
    name: 'Hofmann Bromamide Degradation',
    type: 'Amines',
    equation: 'RCONH2 + Br2 + NaOH → RNH2',
    reagents: ['Br2', 'NaOH', 'heat'],
    mechanism: ['Formation of isocyanate followed by rearrangement'],
    trick: 'Hofmann gives primary amine with one carbon less than amide.',
    route: 'amide → primary amine'
  },
  {
    id: 'benzoin',
    name: 'Benzoin Condensation',
    type: 'Aldehydes',
    equation: '2C6H5CHO + KCN → C6H5CH(OH)COC6H5',
    reagents: ['KCN', 'alcoholic solution'],
    mechanism: ['Cyanide catalyzed dimerization'],
    trick: 'Aromatic aldehydes without α-H can undergo benzoin condensation under cyanide catalysis.',
    route: 'benzaldehyde → benzoin'
  },
  {
    id: 'perkin',
    name: 'Perkin Reaction',
    type: 'Aldehydes',
    equation: 'ArCHO + CH3CO2Na/Ac2O → cinnamic acid derivative',
    reagents: ['Acetic anhydride', 'sodium acetate'],
    mechanism: ['Condensation of aromatic aldehyde with acid anhydride'],
    trick: 'Perkin forms α,β-unsaturated acid via condensation of aromatic aldehyde with acid anhydride.',
    route: 'aromatic aldehyde → cinnamic acid derivative'
  },
  {
    id: 'claisen-schmidt',
    name: 'Claisen–Schmidt Reaction',
    type: 'Aldehydes/Ketones',
    equation: 'ArCHO + RCOCH3 + NaOH → chalcone',
    reagents: ['NaOH', 'ethanol'],
    mechanism: ['Base-catalyzed crossed aldol condensation'],
    trick: 'This gives α,β-unsaturated carbonyl compounds with extended conjugation.',
    route: 'aldehyde + ketone → chalcone'
  },
  {
    id: 'barfoed',
    name: 'Barfoed Test',
    type: 'Carbohydrates',
    equation: 'Monosaccharides + Cu2+ solution → red ppt',
    reagents: ['Copper acetate in acid'],
    mechanism: ['Reduction of cupric ion'],
    trick: 'Barfoed differentiates monosaccharides from disaccharides based on speed of reduction.',
    route: 'carbohydrate detection'
  },
  {
    id: 'fehlings',
    name: 'Fehling’s Test',
    type: 'Carbohydrates',
    equation: 'Aldose + Cu2+ → Cu2O precipitate',
    reagents: ['CuSO4 + NaOH + Rochelle salt'],
    mechanism: ['Aldehyde oxidation'],
    trick: 'Aldehydes reduce Cu2+ to Cu2O; ketones generally do not.',
    route: 'reducing sugar detection'
  },
  {
    id: 'tollens',
    name: 'Tollens’ Test',
    type: 'Carbohydrates',
    equation: 'RCHO + [Ag(NH3)2]+ → Ag(s) + carboxylate',
    reagents: ['AgNO3', 'NH4OH'],
    mechanism: ['Silver mirror test'],
    trick: 'Aldehydes are oxidized; silver gets reduced to a shiny mirror.',
    route: 'aldehyde detection'
  },
  {
    id: 'mutarotation',
    name: 'Mutarotation',
    type: 'Carbohydrates',
    equation: 'α-D-glucose ⇌ β-D-glucose',
    reagents: ['Aqueous solution'],
    mechanism: ['Ring-chain tautomerization through open-chain form'],
    trick: 'Mutarotation is observed because α and β anomers interconvert in solution.',
    route: 'anomeric equilibrium'
  },
  {
    id: 'ninhydrin',
    name: 'Ninhydrin Test',
    type: 'Amino acids',
    equation: 'Amino acid + ninhydrin → purple Ruhemann’s purple',
    reagents: ['Ninhydrin'],
    mechanism: ['Oxidative decarboxylation and condensation'],
    trick: 'Primary amino acids produce purple colour; this is a common protein/amino acid test.',
    route: 'amino acid detection'
  },
  {
    id: 'methylation',
    name: 'Methylation of Phenol',
    type: 'Phenols',
    equation: 'C6H5OH + CH3I + NaOH → anisole',
    reagents: ['CH3I', 'NaOH'],
    mechanism: ['Williamson ether synthesis on phenoxide'],
    trick: 'Phenoxide can be alkylated to give aryl ether—this is a classic route to anisole.',
    route: 'phenol → anisole'
  }
];

export const reagentGroups = {
  oxidizing: [
    {
      name: 'PCC',
      formula: 'Pyridinium chlorochromate',
      use: 'Primary alcohol → aldehyde; secondary alcohol → ketone',
      example: 'CH3CH2OH → CH3CHO'
    },
    {
      name: 'KMnO4',
      formula: 'Potassium permanganate',
      use: 'Oxidizes alkenes, alcohols, side chains; strong oxidative conditions',
      example: 'RCH=CHR′ → carbonyl cleavage'
    },
    {
      name: 'CrO3',
      formula: 'Chromic anhydride',
      use: 'Alcohol oxidation under acidic conditions',
      example: 'RCH2OH → RCHO → RCOOH'
    }
  ],
  reducing: [
    {
      name: 'LiAlH4',
      formula: 'Lithium aluminium hydride',
      use: 'Strong reduction of carbonyls, acids, esters',
      example: 'RCOOH → RCH2OH'
    },
    {
      name: 'NaBH4',
      formula: 'Sodium borohydride',
      use: 'Selective reduction of aldehydes and ketones',
      example: 'RCHO → RCH2OH'
    },
    {
      name: 'Rosenmund',
      formula: 'H2 / Pd-BaSO4',
      use: 'Acid chloride → aldehyde',
      example: 'RCOCl → RCHO'
    },
    {
      name: 'Clemmensen',
      formula: 'Zn-Hg / HCl',
      use: 'Carbonyl → CH2',
      example: 'RCOR′ → RCH2R′'
    },
    {
      name: 'Wolff-Kishner',
      formula: 'NH2NH2 / KOH / heat',
      use: 'Carbonyl → CH2 under basic conditions',
      example: 'RCOCH3 → RCH2CH3'
    }
  ],
  grignard: [
    {
      name: 'RMgX + aldehyde',
      formula: 'Grignard reagent',
      use: 'Add to aldehydes/ketones to yield alcohols',
      example: 'CH3MgBr + CH3CHO → secondary alcohol'
    },
    {
      name: 'RMgX + ester',
      formula: 'Grignard reagent',
      use: 'Forms tertiary alcohol after two additions',
      example: 'RCOOR′ + 2RMgX → tertiary alcohol'
    },
    {
      name: 'RMgX + CO2',
      formula: 'Grignard reagent',
      use: 'Carboxylic acid after acidic workup',
      example: 'RMgX + CO2 → RCOOH'
    }
  ]
};

export const conversionMatrix = {
  start: [
    'Alcohol',
    'Alkene',
    'Alkyl halide',
    'Aldehyde',
    'Ketone',
    'Carboxylic acid',
    'Amines',
    'Benzene'
  ],
  target: [
    'Alkene',
    'Alcohol',
    'Aldehyde',
    'Carboxylic acid',
    'Amine',
    'Ester',
    'Aryl halide',
    'Benzene derivative'
  ],
  routes: [
    {
      from: 'Alcohol',
      to: 'Aldehyde',
      method: 'PCC oxidation',
      steps: ['Primary alcohol', 'PCC oxidation', 'Aldehyde isolated']
    },
    {
      from: 'Alcohol',
      to: 'Carboxylic acid',
      method: 'KMnO4 or CrO3',
      steps: ['Primary alcohol', 'Strong oxidation', 'Carboxylic acid formed']
    },
    {
      from: 'Alkene',
      to: 'Alcohol',
      method: 'Hydration / H3O+',
      steps: ['Markovnikov addition', 'Protonation of alkene', 'Water attack']
    },
    {
      from: 'Alkyl halide',
      to: 'Amine',
      method: 'Ammonolysis or Gabriel synthesis',
      steps: ['NH3 substitution', 'Amination', 'Primary amine formed']
    },
    {
      from: 'Aldehyde',
      to: 'Alcohol',
      method: 'NaBH4 or LiAlH4',
      steps: ['Hydride attack', 'Reduction', 'Alcohol product']
    },
    {
      from: 'Ketone',
      to: 'Alkane',
      method: 'Clemmensen or Wolff-Kishner',
      steps: ['Carbonyl reduction', 'Hydrazone or Zn/Hg route', 'Methylene product']
    },
    {
      from: 'Carboxylic acid',
      to: 'Ester',
      method: 'Esterification',
      steps: ['Protonate carbonyl', 'Alcohol attack', 'Water elimination']
    },
    {
      from: 'Amines',
      to: 'Aryl halide',
      method: 'Diazotization + Sandmeyer',
      steps: ['Convert to diazonium', 'CuCl / CuBr / CuCN replacement']
    }
  ]
};

export const practiceQuestions = [
  {
    chapter: 'Haloalkanes and Haloarenes',
    question: 'Explain why CH3CH2Cl reacts faster with NaOH than (CH3)3CCl under SN2 conditions.',
    hint: 'Think about steric hindrance and backside attack.',
    answer: 'Primary alkyl halides undergo SN2 readily because the backside attack is less hindered. Tertiary halides are sterically crowded and prefer SN1 or elimination, making them slower in SN2.',
    difficulty: 'Moderate'
  },
  {
    chapter: 'Alcohols, Phenols and Ethers',
    question: 'Why is phenol more acidic than ethanol?',
    hint: 'Consider resonance stabilization of the conjugate base.',
    answer: 'Phenoxide ion is resonance stabilized over the aromatic ring, stabilizing the conjugate base. Ethoxide has no comparable stabilization, so phenol is more acidic.',
    difficulty: 'Easy'
  },
  {
    chapter: 'Aldehydes, Ketones and Carboxylic Acids',
    question: 'Why do aldehydes undergo nucleophilic addition more readily than ketones?',
    hint: 'Check steric and electronic factors.',
    answer: 'Aldehydes are less sterically hindered and the carbonyl carbon is more electrophilic than in ketones. Ketones have two alkyl groups that donate electron density and increase steric repulsion.',
    difficulty: 'Moderate'
  },
  {
    chapter: 'Amines',
    question: 'Arrange the following in order of decreasing basicity in aqueous solution: NH3, (CH3)2NH, C6H5NH2, (CH3)3N.',
    hint: 'Remember the role of resonance and solvation.',
    answer: '(CH3)2NH > CH3NH2 > (CH3)3N > C6H5NH2 (approximate order in aqueous solution)',
    difficulty: 'Hard'
  },
  {
    chapter: 'Biomolecules',
    question: 'Why does glucose show mutarotation?',
    hint: 'Think of anomeric equilibrium in water.',
    answer: 'α- and β-anomers of glucose interconvert through the open-chain form in solution; this changes the specific rotation over time, giving mutarotation.',
    difficulty: 'Easy'
  }
];

export const flashcards = [
  {
    front: 'Name the reagent used to convert RCOCl to RCHO.',
    back: 'Rosenmund reduction: H2 / Pd-BaSO4',
    tag: 'Reduction'
  },
  {
    front: 'Product of Reimer-Tiemann reaction with phenol?',
    back: 'Salicylaldehyde (o-hydroxybenzaldehyde) major product',
    tag: 'Phenol'
  },
  {
    front: 'What test identifies primary amines?',
    back: 'Carbylamine test gives foul-smelling isocyanide',
    tag: 'Amines'
  },
  {
    front: 'What is the key trick in Williamson synthesis?',
    back: 'Use a primary alkyl halide and alkoxide; tertiary halides cause elimination',
    tag: 'Ethers'
  },
  {
    front: 'Which reagent converts alcohol to aldehyde without overoxidation?',
    back: 'PCC selectively oxidizes primary alcohols to aldehydes',
    tag: 'Oxidation'
  }
];

export const iconMap = {
  atom: Atom,
  book: BookOpen,
  brain: BrainCircuit,
  check: CheckCircle2,
  magic: Sparkles,
  moon: Moon,
  sun: SunMedium,
  target: Target,
  trophy: Trophy,
  bookmark: Bookmark,
  idea: Lightbulb,
  swirl: RefreshCw,
  shield: ShieldCheck,
  lab: FlaskRound,
  cap: GraduationCap,
  notebook: NotebookPen,
  layers: Layers3,
  left: ChevronRight,
  search: Search,
  landmark: Landmark,
  dashed: CircleDashed
};
