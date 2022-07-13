import { round } from "./script.js";

const thinks = ['thinks', 'think', 'knit', 'sink', 'tins', 'kish', 'kith', 'inks', 'kins', 'kits', 'skin', 'skit', 'tink', 'hint', 'hist', 'hits', 'nish', 'shin', 'sith', 'thin', 'this', 'nits', 'snit', 'kiths', 'knish', 'knits', 'skint', 'stink', 'tinks', 'hints', 'thins'];

const rowing = ['rowing', 'grow', 'wing', 'ring', 'wrong', 'gnow', 'gown', 'wino', 'worn', 'girn', 'giro', 'grin', 'inro', 'iron', 'noir', 'nori', 'roin', 'grown', 'owing', 'wring', 'giron', 'groin'];

const flight = ['flight', 'light', 'fight', 'hilt', 'gift', 'filth', 'thig', 'flit', 'lift', 'lith', 'gilt'];

const builds = ['builds', 'bluids', 'build', 'bluid', 'bids', 'buds', 'dibs', 'dubs', 'libs', 'slub', 'lids', 'sild', 'slid', 'suid'];

const writer = ['writer', 'write', 'wirer', 'twier', 'wrier', 'trier', 'tire', 'tier', 'trew', 'weir', 'wert', 'wire', 'wite', 'writ', 'iter', 'rite'];

const bitter = ['bitter', 'biter', 'tribe', 'britt', 'rebit', 'tetri', 'titer', 'titre', 'trite', 'bite', 'tire', 'bier', 'bitt', 'brei', 'brie', 'brit', 'iter', 'rite', 'tier', 'tret'];

////////////////////////////
const should = ['should', 'dhols', 'holds', 'ludos', 'dhol', 'dosh', 'dush', 'hods', 'hold', 'shod', 'hols', 'huso', 'losh', 'lush', 'shul', 'dols', 'duos', 'loud', 'ludo', 'luds', 'olds', 'ouds', 'sold', 'udos', 'soul'];

const boring = ['boring', 'orbing', 'robing', 'bingo', 'boing', 'bring', 'inorb', 'robin', 'giron', 'groin', 'bing', 'bong', 'brig', 'brog', 'gobi', 'biro', 'born', 'brin', 'brio', 'girn', 'giro', 'grin', 'ring', 'inro', 'iron', 'noir', 'nori', 'roin',];

const gilded = ['gilded', 'glided', 'gelid', 'glide', 'idled', 'deid', 'died', 'geld', 'gied', 'gild', 'gled', 'glid', 'deli', 'diel', 'eild', 'glei', 'idle', 'lied',];

const stitch = ['stitch', 'chits', 'stich', 'titch', 'chis', 'chit', 'ichs', 'itch', 'hist', 'hits', 'shit', 'sith', 'this', 'cist', 'tics', 'tits'];

const falter = ['falter', 'after', 'aleft', 'feral', 'fetal', 'flare', 'frate', 'trefa', 'alert', 'alter', 'artel', 'later', 'ratel', 'taler', 'fale', 'fare', 'farl', 'fart', 'fate', 'feal', 'fear', 'feat', 'felt', 'feta', 'flat', 'flea', 'frat', 'fret', 'leaf', 'left', 'raft', 'reft', 'terf', 'tref', 'aret', 'earl', 'late', 'lear', 'leat', 'rale', 'rate', 'real', 'tael', 'tale', 'tare', 'teal', 'tear', 'tela'];

const proper = ['proper', 'propre', 'preop', 'porer', 'prore', 'repro', 'roper', 'pepo', 'perp', 'pope', 'prep', 'prop', 'repp', 'pore', 'repo', 'rope'];

const letter = ['letter', 'lettre', 'ettle', 'relet', 'leer', 'leet', 'reel', 'rete', 'teel', 'teer', 'tele', 'tete', 'tree', 'tret'];

const number = ['number', 'brume', 'umber', 'umbre', 'rumen', 'berm', 'numb', 'bren', 'burn', 'menu', 'mure', 'neum', 'rube', 'rume', 'unbe', 'rune'];

const submit = ['submit', 'busti', 'musit', 'mutis', 'tuism', 'bums', 'mibs', 'bist', 'bits', 'bust', 'buts', 'imus', 'mist', 'must', 'muti', 'muts', 'smit', 'smut', 'stim' ,'stub', 'stum', 'sumi', 'tubs', 'tums', 'suit', 'tuis'];

const timber = ['betrim', 'timber', 'timbre', 'biter', 'merit', 'miter', 'mitre', 'rebit', 'remit', 'timer', 'tribe', 'berm', 'brim', 'bier', 'bite', 'brei', 'brie', 'brit', 'emir', 'emit', 'item', 'meri', 'mire', 'mite', 'riem', 'rime', 'term', 'time', 'trem', 'trim', 'iter', 'rite', 'tier', 'tire']

const search = ['search', 'arches', 'chares', 'chaser', 'eschar', 'raches', 'aches', 'chare', 'chars', 'chase', 'crash', 'rache', 'reach', 'hares', 'hears', 'rheas', 'share', 'shear', 'acers', 'acres', 'cares', 'carse', 'races', 'sacre', 'scare', 'scrae', 'serac', 'ache', 'arch', 'cash', 'char', 'cher', 'each', 'rach', 'sech', 'hare', 'hear', 'hers', 'rahs', 'rash', 'rehs', 'resh', 'rhea', 'shea', 'acer', 'aces', 'acre', 'arcs', 'care', 'cars', 'case', 'race', 'recs', 'scar', 'ares', 'arse', 'ears', 'eras', 'rase', 'sear', 'sera'];

const answer = ['answer', 'awners', 'resawn', 'awner', 'resaw', 'rewan', 'sawer', 'sewan', 'sewar', 'sware', 'swear', 'wanes', 'wares', 'warns', 'weans', 'wears', 'wrens', 'earns', 'nares', 'nears', 'saner', 'snare', 'anew', 'awes', 'awns', 'news', 'rawn', 'raws', 'rews', 'sawn', 'sewn', 'swan', 'wane', 'wans', 'ware', 'warn', 'wars', 'wase', 'wean', 'wear', 'wens', 'wren', 'ares', 'arse', 'eans', 'earn', 'ears', 'eras', 'erns', 'naes', 'nare', 'near', 'rase', 'rean', 'sane', 'sean', 'sear', 'sena', 'snar'];

const carbon = ['carbon', 'corban', 'bacon', 'banco', 'bronc', 'carbo', 'carob', 'coarb', 'cobra', 'acorn', 'baron', 'borna', 'narco', 'racon', 'banc', 'carb', 'crab', 'acro', 'arco', 'barn', 'boar', 'bona', 'bora', 'born', 'bran', 'carn', 'corn', 'cran', 'cron', 'narc', 'orca', 'roan'];

const street = ['street', 'retest', 'setter', 'tester', 'ester', 'reset', 'steer', 'stere', 'teres', 'terse', 'teste', 'tetes', 'trees', 'trest', 'trets', 'eres', 'erst', 'rees', 'rest', 'rete', 'rets', 'seer', 'sere', 'sett', 'stet', 'tees', 'test', 'tete', 'tets', 'tree', 'tres', 'tret'];

const spread = ['spread', 'drapes', 'padres', 'parsed', 'rasped', 'spader', 'spared', 'drape', 'draps', 'padre', 'pards', 'pared', 'prads', 'spade', 'spaed', 'spard', 'spred', 'apers', 'apres', 'asper', 'pares', 'parse', 'pears', 'prase', 'presa', 'reaps', 'spare', 'spear', 'arsed', 'dares', 'dears', 'eards', 'rased', 'reads', 'aped', 'daps', 'derp', 'drap', 'pads', 'pard', 'peds', 'prad', 'sped', 'aper', 'apes', 'apse', 'pare', 'pars', 'pase', 'pear', 'peas', 'raps', 'rasp', 'reap', 'reps', 'spae', 'spar', 'ards', 'ared', 'dare', 'dear', 'eard', 'rade', 'rads', 'read', 'reds', 'sade', 'sard', 'ares', 'arse', 'ears', 'eras', 'rase', 'sear', 'sera'];

const format = ['format', 'foram', 'forma', 'amort', 'morat', 'farm', 'foam', 'form', 'from', 'afro', 'faro', 'fart', 'fora', 'fort', 'frat', 'raft', 'atom', 'mart', 'moat', 'mora', 'mort', 'roam', 'roma', 'tram', 'rato', 'rota', 'taro', 'tora'];

const second = ['second', 'codens', 'coden', 'codes', 'coeds', 'coned', 'cosed', 'decos', 'scend', 'cones', 'onces', 'scone', 'nodes', 'nosed', 'sonde', 'code', 'cods', 'coed', 'cond', 'deco', 'docs', 'cens', 'cone', 'cons', 'cose', 'ecos', 'once', 'seco', 'dens', 'does', 'done', 'dons', 'dose', 'ends', 'neds', 'node', 'nods', 'odes', 'send', 'eons', 'noes', 'nose', 'ones', 'sone'];

const normal = ['normal', 'manor', 'maron', 'molar', 'monal', 'moral', 'norma', 'romal', 'roman', 'loran', 'loam', 'loma', 'mano', 'marl', 'moan', 'mola', 'mona', 'mora', 'morn', 'noma', 'norm', 'roam', 'roma', 'larn', 'loan', 'lorn', 'oral', 'roan'];

/////////////////////

const freight = ['freight', 'heft', 'frig', 'gift', 'fire', 'fret', 'frit', 'heir', 'hire', 'reft', 'rife', 'rift', 'tehr', 'terf', 'tref', 'geit', 'gert', 'girt', 'gite', 'grit', 'tige', 'trig', 'iter', 'rite', 'tier', 'tire', 'fight', 'firth', 'frith', 'thief', 'eight', 'girth', 'grief', 'grift', 'grith', 'right', 'freit', 'refit', 'their', 'tiger', 'fright', 'regift', 'fighter', 'refight'];

const drizzle = ['drizzle', 'lezz', 'deli', 'diel', 'dire', 'idle', 'ired', 'lied', 'ride', 'lier', 'lire', 'riel', 'rile', 'zizel', 'idler', 'riled'];

const storage = ['aero', 'ager', 'ages', 'ares', 'arts', 'ates', 'ears', 'east', 'eats', 'egos', 'eras', 'ergo', 'ergs', 'eros', 'erst', 'etas', 'gaes', 'gars', 'gast', 'gate', 'gats', 'gear', 'gest', 'geta', 'gets', 'goas', 'goat', 'goer', 'goes', 'gore', 'grat', 'oars', 'oast', 'oats', 'ogre', 'ores', 'orts', 'osar', 'rage', 'rags', 'rase', 'rate', 'rato', 'rats', 'regs', 'rest', 'rets', 'roes', 'rose', 'rota', 'rote', 'rots', 'sage', 'sago', 'sate', 'sear', 'seat', 'sego', 'sera', 'seta', 'soar', 'sora', 'sore', 'sort', 'stag', 'star', 'stoa', 'tags', 'taos', 'tare', 'taro', 'tars', 'tear', 'teas', 'tegs', 'toea', 'toes', 'toga', 'togs', 'tora', 'tore', 'tors', 'tres', 'tsar', 'agers', 'argot', 'arose', 'aster', 'ergot', 'gater', 'gates', 'gator', 'gears', 'getas', 'goats', 'goers', 'gores', 'gorse', 'grate', 'great', 'groat', 'grots', 'oater', 'ogres', 'orate', 'rages', 'rates', 'ratos', 'resat', 'retag', 'roast', 'roset', 'rotas', 'rotes', 'sager', 'sarge', 'sargo', 'sorta', 'stage', 'stare', 'stoae', 'store', 'tares', 'targe', 'taros', 'tears', 'terga', 'toeas', 'togae', 'togas', 'toras', 'tores', 'torse', 'trogs', 'argots', 'ergots', 'garote', 'gaster', 'gaters', 'gators', 'goster', 'graste', 'grates', 'greats', 'groats', 'groset', 'orgeat', 'retags', 'sorage', 'stager', 'storge', 'targes', 'toerag', 'oaters', 'orates', 'osetra', 'roates', 'sertao', 'garotes', 'orgeats', 'storage', 'toerags'];

const concept = ['cope', 'cent', 'cone', 'cote', 'nope', 'once', 'open', 'pent', 'peon', 'poet', 'pone', 'pont', 'pote', 'tope', 'note', 'tone', 'copen', 'ponce', 'cento', 'conte', 'netop', 'oncet', 'concept'];

const pursuit = ['pits', 'ptui', 'puri', 'purs', 'puts', 'rips', 'rust', 'ruts', 'spit', 'spur', 'stir', 'suit', 'tips', 'trip', 'tuis', 'tups', 'urps', 'urus', 'puris', 'sirup', 'situp', 'spirt', 'sprit', 'spurt', 'stirp', 'strip', 'trips', 'turps', 'usurp', 'purist', 'upstir', 'pursuit'];

const dynamic = ['acid', 'amid', 'amin', 'ayin', 'cadi', 'caid', 'cain', 'cyan', 'cyma', 'maid', 'main', 'many', 'mica', 'mina', 'mind', 'myna', 'acidy', 'amnic', 'candy', 'canid', 'cnida', 'manic', 'mincy', 'nicad', 'cyanid', 'dynamic'];

const propose = ['epos', 'eros', 'oops', 'opes', 'ores', 'pepo', 'peps', 'perp', 'peso', 'poor', 'poos', 'pope', 'pops', 'pore', 'pose', 'prep', 'prop', 'pros', 'repo', 'repp', 'reps', 'roes', 'rope', 'rose', 'sore', 'pepos', 'perps', 'poops', 'popes', 'pores', 'poser', 'preop', 'preps', 'props', 'prose', 'proso', 'repos', 'repps', 'roose', 'ropes', 'sopor', 'spoor', 'spore', 'oppose', 'porose', 'preops', 'propose', 'opposer'];

const athlete = ['alee', 'eath', 'haet', 'hale', 'halt', 'hate', 'heal', 'heat', 'heel', 'late', 'lath', 'leet', 'tael', 'tale', 'tate', 'teal', 'teat', 'teel', 'tela', 'tele', 'teth', 'thae', 'that', 'thee', 'elate', 'lathe', 'latte', 'lethe', 'teeth', 'telae', 'theta', 'lathee', 'athlete'];

const science = ['cees', 'cine', 'esne', 'ices', 'nice', 'seen', 'sene', 'sice', 'sine', 'cense', 'cines', 'niece', 'scene', 'seine', 'since', 'ecesic', 'nieces', 'scenic', 'science'];

const feeling = ['feel', 'file', 'fine', 'flee', 'gene', 'gien', 'glee', 'glen', 'lief', 'lien', 'life', 'line', 'ling', 'neif', 'elfin', 'feign', 'fling', 'genie', 'ingle', 'liege', 'feeing', 'feline', 'feeling', 'fleeing'];

const further = ['fret', 'heft', 'hurt', 'reft', 'ruer', 'ruth', 'thru', 'tref', 'true', 'turf', 'truer', 'fuhrer', 'hurter', 'further'];

const archive = ['ache', 'acre', 'arch', 'aver', 'care', 'cave', 'chai', 'char', 'chia', 'cire', 'each', 'hair', 'hare', 'have', 'hear', 'heir', 'hire', 'hive', 'race', 'rave', 'rhea', 'rice', 'rich', 'rive', 'vair', 'vera', 'vice', 'vier', 'aiver', 'areic', 'carve', 'caver', 'cavie', 'ceria', 'chair', 'chare', 'chive', 'crave', 'erica', 'haver', 'reach', 'vicar', 'achier', 'cahier', 'archive'];

const because = ['aces', 'base', 'beau', 'bees', 'cabs', 'case', 'cees', 'cube', 'cubs', 'cues', 'ease', 'ecus', 'sabe', 'scab', 'suba', 'abuse', 'beaus', 'cause', 'cease', 'cubes', 'sauce', 'scuba', 'because'];

const payment = ['amen', 'ante', 'etna', 'mane', 'many', 'mate', 'mean', 'meat', 'meta', 'myna', 'name', 'nape', 'neap', 'neat', 'nema', 'pane', 'pant', 'pate', 'paty', 'pean', 'peat', 'pent', 'tame', 'tamp', 'tape', 'team', 'temp', 'tepa', 'tyne', 'type', 'yean', 'ament', 'empty', 'etyma', 'matey', 'meant', 'meany', 'meaty', 'menta', 'panty', 'paten', 'peaty', 'yamen', 'yenta', 'tympan', 'payment'];

const service = ['cees', 'cere', 'cire', 'cris', 'ever', 'eves', 'ices', 'ires', 'recs', 'rees', 'reis', 'revs', 'rice', 'rise', 'rive', 'seer', 'sere', 'sice', 'sire', 'veer', 'vees', 'vice', 'vier', 'vies', 'vise', 'ceres', 'cires', 'cries', 'reive', 'rices', 'rives', 'scree', 'serve', 'sever', 'sieve', 'siree', 'siver', 'veers', 'verse', 'vices', 'viers', 'vires', 'cerise', 'reives', 'revise', 'scrive', 'scrieve', 'service'];

const company = ['camo', 'camp', 'capo', 'coma', 'comp', 'cony', 'copy', 'cyan', 'cyma', 'mano', 'many', 'mayo', 'mony', 'mopy', 'myna', 'noma', 'pacy', 'pony', 'anomy', 'campo', 'campy', 'capon', 'copay', 'cyano', 'macon', 'yapon', 'canopy', 'company'];

const another = ['aeon', 'aero', 'ante', 'earn', 'eath', 'etna', 'haen', 'haet', 'hant', 'hare', 'hart', 'hate', 'hear', 'heat', 'hent', 'hern', 'hero', 'hone', 'hora', 'horn', 'near', 'neat', 'nota', 'note', 'oath', 'rant', 'rate', 'rath', 'rato', 'rent', 'rhea', 'roan', 'rota', 'rote', 'tahr', 'tare', 'tarn', 'taro', 'tear', 'tern', 'thae', 'than', 'then', 'thro', 'toea', 'tone', 'tora', 'tore', 'torn', 'antre', 'atone', 'earth', 'hater', 'heart', 'heron', 'honer', 'neath', 'north', 'noter', 'oaten', 'oater', 'orate', 'other', 'rathe', 'tenor', 'thane', 'thorn', 'throe', 'toner', 'torah', 'trona', 'trone', 'anther', 'atoner', 'hornet', 'nother', 'ornate', 'thenar', 'throne', 'another'];

const partner = ['ante', 'aper', 'earn', 'etna', 'nape', 'neap', 'near', 'neat', 'pane', 'pant', 'pare', 'parr', 'part', 'pate', 'pean', 'pear', 'peat', 'pent', 'pert', 'prat', 'rant', 'rapt', 'rare', 'rate', 'reap', 'rear', 'rent', 'tape', 'tare', 'tarn', 'tarp', 'tear', 'tepa', 'tern', 'trap', 'antre', 'apter', 'arpen', 'parer', 'paten', 'pater', 'peart', 'prate', 'rater', 'reran', 'taper', 'tarre', 'terra', 'arpent', 'enrapt', 'entrap', 'errant', 'parent', 'prater', 'ranter', 'trepan', 'partner'];

const protect = ['cero', 'cope', 'core', 'cote', 'crop', 'pert', 'poet', 'pore', 'port', 'repo', 'rope', 'rote', 'tope', 'torc', 'tore', 'tort', 'tote', 'tret', 'trop', 'trot', 'coper', 'crept', 'octet', 'otter', 'petto', 'recto', 'repot', 'rotte', 'toper', 'torte', 'toter', 'trope', 'copter', 'cotter', 'potter', 'protect'];

const without = ['thio', 'thou', 'toit', 'tout', 'twit', 'whit', 'with', 'outhit', 'outwit', 'without', 'outwith'];

const deliver = ['deer', 'deil', 'dele', 'deli', 'dere', 'diel', 'dire', 'dirl', 'dive', 'dree', 'eide', 'ever', 'evil', 'idle', 'ired', 'lede', 'leer', 'lied', 'lier', 'lire', 'live', 'rede', 'reed', 'reel', 'ride', 'riel', 'rile', 'rive', 'veer', 'veil', 'veld', 'vide', 'vied', 'vier', 'vile', 'virl', 'delve', 'devel', 'devil', 'diver', 'drive', 'edile', 'eider', 'elder', 'elide', 'elver', 'ervil', 'idler', 'lever', 'lieve', 'lived', 'liver', 'livre', 'reive', 'revel', 'riled', 'rived', 'viler', 'delver', 'derive', 'drivel', 'eviler', 'levied', 'levier', 'lieder', 'liever', 'reived', 'relied', 'relive', 'revile', 'veiled', 'veiler', 'deliver', 'livered', 'relived', 'reviled'];

const machine = ['ache', 'acme', 'acne', 'ahem', 'amen', 'amie', 'amin', 'cain', 'came', 'cane', 'chai', 'cham', 'chia', 'chin', 'cine', 'each', 'emic', 'haem', 'haen', 'hame', 'hemi', 'inch', 'mace', 'mach', 'main', 'mane', 'mean', 'mica', 'mice', 'mien', 'mina', 'mine', 'name', 'nema', 'nice', 'amice', 'amine', 'amnic', 'anime', 'chain', 'chime', 'china', 'chine', 'hance', 'hemic', 'hemin', 'mache', 'manic', 'miche', 'minae', 'mince', 'niche', 'anemic', 'chaine', 'cinema', 'haemic', 'haemin', 'iceman', 'manche', 'machine'];

const elegant = ['agee', 'alee', 'ante', 'egal', 'elan', 'etna', 'gaen', 'gale', 'gane', 'gate', 'gelt', 'gene', 'gent', 'geta', 'glee', 'glen', 'gnat', 'lane', 'lang', 'late', 'lean', 'leet', 'lent', 'neat', 'tael', 'tale', 'tang', 'teal', 'teel', 'teen', 'tela', 'tele', 'agene', 'agent', 'aglee', 'aglet', 'anele', 'angel', 'angle', 'eagle', 'eaten', 'elate', 'enate', 'genet', 'glean', 'gleet', 'laten', 'leant', 'telae', 'tenge', 'eaglet', 'gelant', 'gelate', 'gentle', 'lateen', 'legate', 'negate', 'tangle', 'telega', 'elegant'];

const emerald = ['alee', 'alme', 'dale', 'dame', 'dare', 'deal', 'dear', 'deem', 'deer', 'dele', 'deme', 'dere', 'derm', 'dram', 'dree', 'earl', 'lade', 'lame', 'lard', 'lead', 'lear', 'lede', 'leer', 'made', 'male', 'mare', 'marl', 'mead', 'meal', 'meed', 'meld', 'mere', 'merl', 'rale', 'read', 'real', 'ream', 'rede', 'reed', 'reel', 'adeem', 'alder', 'ameer', 'armed', 'derma', 'dream', 'eared', 'edema', 'elder', 'lader', 'lamed', 'lamer', 'laree', 'madre', 'medal', 'merde', 'merle', 'ramee', 'realm', 'dealer', 'dermal', 'leader', 'marled', 'medlar', 'melder', 'reamed', 'remade', 'emerald'];

const tedious = ['dies', 'diet', 'dite', 'dits', 'does', 'doit', 'dose', 'dost', 'dote', 'dots', 'dues', 'duet', 'duit', 'duos', 'dust', 'edit', 'etui', 'ides', 'odes', 'ouds', 'oust', 'outs', 'side', 'site', 'stud', 'sued', 'suet', 'suit', 'teds', 'tide', 'tied', 'ties', 'tods', 'toed', 'toes', 'tuis', 'udos', 'used', 'utes', 'deist', 'diets', 'dites', 'doest', 'doits', 'dotes', 'douse', 'duets', 'duits', 'edits', 'eidos', 'etuis', 'odist', 'outed', 'sited', 'stied', 'suite', 'tides', 'touse', 'duties', 'ousted', 'studio', 'suited', 'todies', 'toused', 'outside', 'tedious'];

const theater = ['eath', 'haet', 'hare', 'hart', 'hate', 'hear', 'heat', 'here', 'rate', 'rath', 'rete', 'rhea', 'tahr', 'tare', 'tart', 'tate', 'tear', 'teat', 'teth', 'thae', 'that', 'thee', 'tree', 'tret', 'arete', 'earth', 'eater', 'ether', 'hater', 'heart', 'rathe', 'tater', 'teeth', 'tetra', 'there', 'theta', 'three', 'treat', 'aether', 'hatter', 'heater', 'hereat', 'reheat', 'tether', 'threat', 'theater', 'theatre', 'thereat'];

const therapy = ['aery', 'aper', 'arty', 'eath', 'epha', 'eyra', 'haet', 'hare', 'harp', 'hart', 'hate', 'heap', 'hear', 'heat', 'hype', 'hyte', 'pare', 'part', 'pate', 'path', 'paty', 'pear', 'peat', 'pert', 'phat', 'prat', 'pray', 'prey', 'pyre', 'rapt', 'rate', 'rath', 'reap', 'rhea', 'tahr', 'tape', 'tare', 'tarp', 'tear', 'tepa', 'thae', 'they', 'trap', 'tray', 'trey', 'tyer', 'type', 'tyre', 'yare', 'yeah', 'year', 'apery', 'apter', 'earth', 'harpy', 'hater', 'hayer', 'heapy', 'heart', 'hyper', 'party', 'pater', 'payer', 'peart', 'peaty', 'prate', 'raphe', 'rathe', 'repay', 'rhyta', 'taper', 'teary', 'earthy', 'hearty', 'tephra', 'teraph', 'threap', 'therapy'];

const natural = ['alan', 'alar', 'anta', 'aunt', 'aura', 'latu', 'luna', 'lunt', 'nala', 'nurl', 'rant', 'runt', 'tala', 'tarn', 'tuna', 'turn', 'ulan', 'ulna', 'alant', 'altar', 'antra', 'artal', 'aural', 'lauan', 'laura', 'lunar', 'natal', 'ratal', 'ratan', 'ruana', 'talar', 'ulnar', 'ultra', 'antral', 'anural', 'ranula', 'tarnal', 'natural'];

const neglect = ['elt', 'cent', 'cete', 'gelt', 'gene', 'gent', 'glee', 'glen', 'leet', 'lent', 'teel', 'teen', 'tele', 'elect', 'genet', 'gleet', 'tenge', 'gentle', 'neglect'];

const holding = ['ding', 'dino', 'diol', 'dong', 'gild', 'gold', 'hind', 'hold', 'hong', 'idol', 'lido', 'ling', 'lino', 'lion', 'loid', 'loin', 'long', 'nigh', 'nodi', 'noil', 'dingo', 'doing', 'hongi', 'indol', 'lingo', 'login', 'ohing', 'doling', 'holing', 'holding'];

const heiress = ['eses', 'heir', 'here', 'hers', 'hies', 'hire', 'hiss', 'ires', 'rees', 'reis', 'resh', 'rise', 'seer', 'sees', 'seis', 'sere', 'sers', 'shes', 'shri', 'sire', 'sirs', 'sris', 'erses', 'heirs', 'heres', 'hiree', 'hires', 'rises', 'seers', 'seise', 'seres', 'sheer', 'shier', 'shies', 'shire', 'shris', 'siree', 'sires', 'hirees', 'hisser', 'reshes', 'seiser', 'series', 'sheers', 'shiers', 'shires', 'sirees', 'heiress'];

const realist = ['ails', 'airs', 'airt', 'aits', 'ales', 'alit', 'alt,s ares', 'aril', 'arts', 'ates', 'earl', 'ears', 'east', 'eats', 'eras', 'erst', 'etas', 'ilea', 'ires', 'isle', 'iter', 'lair', 'lari', 'lars', 'lase', 'last', 'late', 'lati', 'lats', 'lear', 'leas', 'leis', 'lest', 'lets', 'liar', 'lier', 'lies', 'lira', 'lire', 'list', 'lite', 'lits', 'rail', 'rais', 'rale', 'rase', 'rate', 'rats', 'real', 'reis', 'rest', 'rets', 'rial', 'rias', 'riel', 'rile', 'rise', 'rite', 'sail', 'sale', 'salt', 'sari', 'sate', 'sati', 'seal', 'sear', 'seat', 'sera', 'seta', 'sial', 'silt', 'sire', 'site', 'slat', 'slit', 'star', 'stir', 'tael', 'tail', 'tale', 'tali', 'tare', 'tars', 'teal', 'tear', 'teas', 'tela', 'tels', 'tier', 'ties', 'tile', 'tils', 'tire', 'tirl', 'tres', 'tsar', 'airts', 'aisle', 'alert', 'alist', 'alter', 'ariel', 'arils', 'arise', 'arles', 'artel', 'aster', 'astir', 'earls', 'irate', 'islet', 'istle', 'lairs', 'lares', 'laris', 'laser', 'later', 'lears', 'least', 'liars', 'liers', 'liras', 'litas', 'liter', 'litre', 'rails', 'raise', 'rales', 'ratel', 'rates', 'reals', 'relit', 'resat', 'resit', 'retia', 'rials', 'riels', 'riles', 'rites', 'serai', 'seral', 'setal', 'sitar', 'slate', 'slier', 'stair', 'stale', 'stare', 'steal', 'stela', 'stile', 'stria', 'taels', 'tails', 'taler', 'tales', 'tares', 'tarsi', 'teals', 'tears', 'telia', 'terai', 'tesla', 'tiers', 'tiler', 'tiles', 'tires', 'tirls', 'trail', 'trial', 'tries', 'airest', 'alerts', 'alters', 'ariels', 'artels', 'estral', 'laster', 'lister', 'liters', 'litres', 'ratels', 'relist', 'resail', 'retail', 'retial', 'sailer', 'salter', 'saltie', 'satire', 'serail', 'serial', 'slater', 'staler', 'stelai', 'stelar', 'striae', 'tailer', 'talers', 'terais', 'tilers', 'trails', 'trials', 'realist', 'retails', 'saltier', 'saltire', 'slatier', 'tailers'];

////////////////////

const creation = ['acne', 'acre', 'aeon', 'aero', 'airn', 'airt', 'ante', 'anti', 'arco', 'cain', 'cane', 'cant', 'care', 'carn', 'cart', 'cate', 'cent', 'cero', 'ciao', 'cine', 'cion', 'cire', 'cite', 'coat', 'coin', 'coir', 'cone', 'coni', 'core', 'corn', 'cote', 'crit', 'earn', 'etic', 'etna', 'icon', 'inro', 'into', 'iota', 'iron', 'iter', 'naoi', 'narc', 'near', 'neat', 'nice', 'nite', 'noir', 'nori', 'nota', 'note', 'once', 'orca', 'otic', 'race', 'rain', 'rani', 'rant', 'rate', 'rato', 'rein', 'rent', 'rice', 'riot', 'rite', 'roan', 'rota', 'rote', 'roti', 'tace', 'taco', 'tain', 'tare', 'tarn', 'taro', 'tear', 'tern', 'tier', 'tine', 'tire', 'tiro', 'toea', 'tone', 'tora', 'torc', 'tore', 'tori', 'torn', 'trio', 'acorn', 'actin', 'actor', 'antic', 'antre', 'areic', 'atone', 'cairn', 'caner', 'canoe', 'canto', 'caret', 'carte', 'cater', 'cento', 'ceria', 'citer', 'coati', 'conte', 'coria', 'cotan', 'crane', 'crate', 'crone', 'enact', 'entia', 'erica', 'inert', 'inter', 'intro', 'irate', 'irone', 'nacre', 'narco', 'naric', 'nicer', 'niter', 'nitre', 'nitro', 'noria', 'noter', 'oaten', 'oater', 'ocean', 'ocrea', 'octan', 'oncet', 'ontic', 'orate', 'orcin', 'racon', 'rance', 'ratio', 'react', 'recit', 'recon', 'recta', 'recti', 'recto', 'retia', 'riant', 'taroc', 'tenia', 'tenor', 'terai', 'tinea', 'toner', 'tonic', 'toric', 'trace', 'train', 'triac', 'trice', 'trine', 'trona', 'trone', 'acetin', 'action', 'aeonic', 'aortic', 'aroint', 'atoner', 'atonic', 'canoer', 'canter', 'cantor', 'carnet', 'carnie', 'carton', 'cation', 'centai', 'centra', 'citron', 'coater', 'coiner', 'contra', 'cornea', 'cornet', 'cortin', 'craton', 'cretin', 'enatic', 'nectar', 'noetic', 'norite', 'notice', 'octane', 'orcein', 'orient', 'ornate', 'ratine', 'ration', 'recant', 'recoat', 'recoin', 'retain', 'retina', 'tanrec', 'tonier', 'trance’, ‘aconite', 'carotin', 'ceratin', 'certain', 'cointer', 'cortina', 'creatin', 'enactor', 'erotica', 'noticer', 'tacrine', 'actioner', 'anoretic', 'creation', 'reaction'];

const pristine = ['erns', 'erst', 'inti', 'ires', 'iris', 'iter', 'nest', 'nets', 'nisi', 'nite', 'nits', 'pein', 'pens', 'pent', 'peri', 'pert', 'pest', 'pets', 'pier', 'pies', 'pine', 'pins', 'pint', 'pirn', 'pits', 'rein', 'reis', 'rent', 'reps', 'rest', 'rets', 'rins', 'ripe', 'rips', 'rise', 'rite', 'sent', 'sept', 'sine', 'sipe', 'sire', 'site', 'snip', 'snit', 'spin', 'spit', 'step', 'stir', 'tens', 'tern', 'tier', 'ties', 'tine', 'tins', 'tipi', 'tips', 'tire', 'tres', 'trip', 'inept', 'inert', 'inset', 'inter', 'intis', 'neist', 'nerts', 'nisei', 'niter', 'nites', 'nitre', 'peins', 'peris', 'piers', 'pines', 'pints', 'pirns', 'piste', 'prest', 'pries', 'print', 'prise', 'reins', 'rents', 'repin', 'resin', 'resit', 'rinse', 'ripen', 'ripes', 'risen', 'rites', 'senti', 'serin', 'siren', 'snipe', 'speir', 'spent', 'spier', 'spine', 'spire', 'spirt', 'spite', 'sprit', 'stein', 'stern', 'stipe', 'stirp', 'strep', 'strip', 'terns', 'tiers', 'tines', 'tipis', 'tires', 'tries', 'trine', 'tripe', 'trips', 'esprit', 'estrin', 'inerts', 'insert', 'instep', 'inters', 'niters', 'nitres', 'periti', 'pinier', 'pinite', 'pitier', 'pities', 'priest', 'prints', 'pterin', 'repins', 'ripens', 'ripest', 'seniti', 'sinter', 'sniper', 'spinet', 'spirit', 'sprent', 'sprint', 'sprite', 'stripe', 'tiepin', 'tinier', 'triens', 'trines', 'tripes', 'inspire', 'piniest', 'pinites', 'pitiers', 'pterins', 'spinier', 'tiepins', 'tipsier', 'pristine'];

const software = ['aero', 'afro', 'ares', 'arfs', 'arts', 'ates', 'awes', 'ears', 'east', 'eats', 'efts', 'eras', 'eros', 'erst', 'etas', 'fare', 'faro', 'fart', 'fast', 'fate', 'fats', 'fear', 'feat', 'fest', 'feta', 'fets', 'foes', 'fora', 'fore', 'fort', 'frae', 'frat', 'fret', 'froe', 'frow', 'oafs', 'oars', 'oast', 'oats', 'ores', 'orts', 'osar', 'owes', 'owse', 'raft', 'rase', 'rate', 'rato', 'rats', 'raws', 'refs', 'reft', 'rest', 'rets', 'roes', 'rose', 'rota', 'rote', 'rots', 'rows', 'safe', 'sate', 'sear', 'seat', 'sera', 'serf', 'seta', 'soar', 'sofa', 'soft', 'sora', 'sore', 'sort', 'star', 'staw', 'stew', 'stoa', 'stow', 'swat', 'swot', 'taos', 'tare', 'taro', 'tars', 'taws', 'tear', 'teas', 'tews', 'toea', 'toes', 'tora', 'tore', 'tors', 'tows', 'tref', 'tres', 'trow', 'tsar', 'twae', 'twas', 'twos', 'waes', 'waft', 'ware', 'wars', 'wart', 'wast', 'wats', 'wear', 'weft', 'wert', 'west', 'wets', 'woes', 'wore', 'wort', 'wost', 'wots', 'afore', 'after', 'arose', 'aster', 'fares', 'faros', 'farts', 'fates', 'fatso', 'fears', 'feast', 'feats', 'fetas', 'fetor', 'fores', 'forte', 'forts', 'frats', 'frets', 'froes', 'frost', 'frows', 'oater', 'ofter', 'orate', 'rafts', 'rates', 'ratos', 'resat', 'resaw', 'resow', 'roast', 'roset', 'rotas', 'rotes', 'safer', 'sawer', 'serow', 'sewar', 'sofar', 'softa', 'sorta', 'sowar', 'sower', 'stare', 'stoae', 'store', 'straw', 'strew', 'strow', 'sware', 'swarf', 'swart', 'swear', 'sweat', 'swore', 'tares', 'taros', 'tawer', 'tawse', 'tears', 'toeas', 'toras', 'tores', 'torse', 'tower', 'trews', 'trows', 'twaes', 'wafer', 'wafts', 'wares', 'warts', 'waste', 'water', 'wears', 'wefts', 'worse', 'worst', 'worts', 'wrest', 'wrote', 'afters', 'faster', 'fetors', 'forest', 'fortes', 'foster', 'frowst', 'oaters', 'orates', 'osetra', 'rawest', 'softer', 'strafe', 'tawers', 'towers', 'twofer', 'wafers', 'wafter', 'waster', 'waters', 'worset', 'foresaw', 'fretsaw', 'twofers', 'wafters', 'software'];

const original = ['agin', 'agio', 'agon', 'airn', 'anil', 'aril', 'gain', 'gaol', 'girl', 'girn', 'giro', 'glia', 'gnar', 'goal', 'gran', 'grin', 'ilia', 'inia', 'inro', 'iron', 'lain', 'lair', 'lang', 'lari', 'liar', 'ling', 'lino', 'lion', 'lira', 'liri', 'loan', 'loin', 'long', 'lorn', 'nail', 'naoi', 'noil', 'noir', 'nori', 'oral', 'ragi', 'rail', 'rain', 'rang', 'rani', 'rial', 'ring', 'roan', 'roil', 'aioli', 'algin', 'algor', 'align', 'aloin', 'along', 'anglo', 'argil', 'argol', 'argon', 'garni', 'giron', 'glair', 'gnarl', 'gonia', 'goral', 'grail', 'grain', 'groan', 'groin', 'iring', 'largo', 'liang', 'ligan', 'linga', 'lingo', 'logan', 'logia', 'login', 'loran', 'noria', 'orang', 'organ', 'ailing', 'airing', 'gloria', 'nilgai', 'oaring', 'oiling', 'onagri', 'origan', 'origin', 'riling', 'lairing', 'ligroin', 'railing', 'roiling', 'original'];

const constant = ['acts', 'anon', 'ants', 'cans', 'cant', 'cast', 'cats', 'coat', 'conn', 'cons', 'cost', 'cots', 'nans', 'naos', 'nona', 'nota', 'oast', 'oats', 'ocas', 'scan', 'scat', 'scot', 'snot', 'soca', 'stat', 'stoa', 'stot', 'taco', 'tact', 'tans', 'taos', 'tats', 'tons', 'tost', 'tots', 'ancon', 'ascot', 'canon', 'canso', 'canst', 'canto', 'cants', 'coast', 'coats', 'conns', 'costa', 'cotan', 'cotta', 'nonas', 'octan', 'santo', 'scant', 'scatt', 'stoat', 'tacos', 'tacts', 'tanto', 'toast', 'cannot', 'canons', 'canton', 'cantos', 'cotans', 'cottas', 'octans', 'octant', 'sonant', 'cantons', 'octants', 'constant'];

const squirrel = ['errs', 'ires', 'isle', 'leis', 'lier', 'lies', 'lieu', 'lire', 'lues', 'lure', 'reis', 'riel', 'rile', 'rise', 'ruer', 'rues', 'rule', 'ruse', 'sire', 'slue', 'slur', 'suer', 'sure', 'user', 'ileus', 'liers', 'lieus', 'lurer', 'lures', 'quire', 'riels', 'riles', 'riser', 'ruers', 'ruler', 'rules', 'sieur', 'slier', 'surer', 'lurers', 'quires', 'risque', 'rulers', 'rulier', 'squire', 'surlier', 'squirrel'];

const tomorrow = ['moor', 'moot', 'mort', 'room', 'root', 'rort', 'roto', 'toom', 'toro', 'torr', 'trow', 'worm', 'wort', 'morro', 'motor', 'rotor', 'morrow', 'moorwort', 'rootworm', 'tomorrow', 'wormroot'];

const complete = ['celt', 'cepe', 'cete', 'clop', 'clot', 'cole', 'colt', 'come', 'comp', 'cope', 'cote', 'leet', 'lept', 'lope', 'meet', 'melt', 'mete', 'mole', 'molt', 'mope', 'mote', 'peel', 'pele', 'pelt', 'plot', 'poem', 'poet', 'pole', 'pome', 'teel', 'teem', 'tele', 'temp', 'tole', 'tome', 'tope', 'celom', 'clepe', 'clept', 'clomp', 'comet', 'compt', 'comte', 'elect', 'elope', 'emote', 'metol', 'motel', 'telco', 'tempo', 'topee', 'cleome', 'coempt', 'compel', 'metope', 'omelet', 'pelmet', 'telome', 'temple', 'compete', 'telecom', 'complete'];

const standard = ['adds', 'anas', 'ands', 'ansa', 'anta', 'ants', 'arts', 'dada', 'dads', 'dans', 'darn', 'dart', 'data', 'drat', 'nada', 'nard', 'rads', 'rand', 'rant', 'rats', 'sand', 'sard', 'star', 'tads', 'tans', 'tarn', 'tars', 'trad', 'tsar', 'antas', 'antra', 'dadas', 'darns', 'darts', 'drats', 'nadas', 'nards', 'rands', 'rants', 'ratan', 'saran', 'stand', 'tarns', 'trans', 'ratans', 'strand', 'dastard', 'standard'];

const proposal = ['alps', 'also', 'apos', 'apps', 'laps', 'lars', 'loop', 'loos', 'lops', 'oars', 'oops', 'opal', 'oral', 'osar', 'palp', 'pals', 'paps', 'pars', 'plop', 'polo', 'pols', 'pool', 'poor', 'poos', 'pops', 'prao', 'proa', 'prop', 'pros', 'raps', 'rasp', 'salp', 'slap', 'slop', 'soap', 'soar', 'sola', 'solo', 'sora', 'spar', 'loops', 'opals', 'orals', 'orlop', 'palps', 'parol', 'plops', 'polar', 'polos', 'pools', 'poops', 'praos', 'proas', 'props', 'proso', 'sapor', 'sloop', 'solar', 'sopor', 'spool', 'spoor', 'orlops', 'parols', 'polars', 'poplar', 'saloop', 'sporal', 'apropos', 'poplars', 'proposal'];

const document = ['cent', 'code', 'coed', 'come', 'cone', 'cote', 'cued', 'cute', 'deco', 'demo', 'dent', 'dome', 'done', 'dote', 'doum', 'duce', 'duct', 'duet', 'dune', 'dunt', 'mend', 'meno', 'menu', 'meou', 'mode', 'mote', 'moue', 'muon', 'mute', 'neum', 'node', 'nome', 'note', 'omen', 'once', 'tend', 'toed', 'tome', 'tone', 'tune', 'udon', 'unco', 'unde', 'undo', 'unto', 'cento', 'centu', 'coden', 'comet', 'comte', 'coned', 'conte', 'coted', 'coude', 'count', 'demon', 'donut', 'douce', 'dunce', 'educt', 'monde', 'monte', 'mound', 'mount', 'muted', 'muton', 'noted', 'notum', 'odeum', 'oncet', 'ounce', 'outed', 'tendu', 'toned', 'tuned', 'unmet', 'centum', 'docent', 'menudo', 'counted', 'demount', 'mounted', 'document'];

const bathroom = ['ambo', 'atom', 'baht', 'barm', 'bath', 'boar', 'boat', 'boho', 'boom', 'boor', 'boot', 'bora', 'bort', 'bota', 'both', 'brat', 'broo', 'harm', 'hart', 'hobo', 'hoot', 'hora', 'mart', 'math', 'moat', 'moor', 'moot', 'mora', 'mort', 'moth', 'oath', 'rath', 'rato', 'roam', 'room', 'root', 'rota', 'roto', 'tahr', 'taro', 'thro', 'tomb', 'toom', 'tora', 'toro', 'tram', 'abhor', 'abmho', 'abohm', 'abort', 'amort', 'bhoot', 'boart', 'booth', 'bromo', 'broom', 'broth', 'motor', 'ortho', 'rhomb', 'robot', 'taboo', 'tabor', 'tharm', 'thoro', 'throb', 'torah', 'athrob', 'bathroom'];

const everyone = ['eery', 'envy', 'erne', 'even', 'ever', 'eyen', 'eyer', 'eyne', 'eyre', 'neve', 'oven', 'over', 'oyer', 'rove', 'veer', 'very', 'yore', 'envoy', 'every', 'nerve', 'nervy', 'never', 'onery', 'reeve', 'roven', 'veery', 'evener', 'veneer', 'venery', 'everyone'];

const download = ['alow', 'awol', 'dado', 'dawn', 'dodo', 'dona', 'down', 'land', 'lawn', 'load', 'loan', 'loon', 'lown', 'nolo', 'wand', 'woad', 'wold', 'wood', 'wool', 'adown', 'nodal', 'woald', 'onload', 'download', 'woodland'];

const business = ['bens', 'bine', 'bins', 'bise', 'buns', 'buss', 'nebs', 'ness', 'nibs', 'nubs', 'seis', 'sibs', 'sine', 'sins', 'snib', 'snub', 'subs', 'sues', 'suns', 'suss', 'unbe', 'uses', 'bines', 'bises', 'buses', 'issue', 'nisus', 'sines', 'sinus', 'sises', 'snibs', 'snubs', 'busies', 'busses', 'issues', 'sinuses', 'business'];

const mountain = ['amin', 'anon', 'anti', 'atom', 'aunt', 'auto', 'into', 'iota', 'main', 'mano', 'maun', 'maut', 'mina', 'mint', 'moat', 'muni', 'muon', 'naoi', 'noma', 'nona', 'nota', 'noun', 'omit', 'tain', 'tuna', 'unai', 'unit', 'unto', 'amino', 'amnio', 'anion', 'matin', 'miaou', 'mount', 'muton', 'niton', 'notum', 'onium', 'tauon', 'toman', 'union', 'unman', 'amnion', 'amount', 'anoint', 'manito', 'manitu', 'muntin', 'nation', 'nomina', 'numina', 'outman', 'tinman', 'manitou', 'tinamou', 'mountain'];

const strength = ['engs', 'ergs', 'erns', 'erst', 'eths', 'gens', 'gent', 'gest', 'gets', 'hens', 'hent', 'hern', 'hers', 'hest', 'hets', 'negs', 'nest', 'nets', 'nett', 'regs', 'rent', 'resh', 'rest', 'rets', 'sent', 'sett', 'stet', 'tegs', 'tens', 'tent', 'tern', 'test', 'teth', 'tets', 'then', 'tres', 'tret', 'gents', 'hents', 'herns', 'nerts', 'netts', 'rents', 'shent', 'stent', 'stern', 'tenth', 'tents', 'terns', 'teths', 'thegn', 'thens', 'trets', 'tenths', 'thegns', 'strength'];

const marriage = ['agar', 'ager', 'agma', 'amia', 'amie', 'amir', 'area', 'aria', 'emir', 'gama', 'game', 'gear', 'germ', 'gram', 'grim', 'maar', 'mage', 'magi', 'mair', 'mara', 'mare', 'mega', 'mire', 'raga', 'rage', 'ragi', 'raia', 'rami', 'rare', 'ream', 'rear', 'rime', 'agria', 'aimer', 'airer', 'amiga', 'arame', 'armer', 'gamer', 'grama', 'grime', 'image', 'marge', 'maria', 'ramie', 'rearm', 'regma', 'rerig', 'rimer', 'gamier', 'imager', 'maigre', 'megara', 'mirage', 'armiger', 'marriage'];

const computer = ['cero', 'come', 'comp', 'cope', 'core', 'corm', 'cote', 'coup', 'crop', 'cure', 'curt', 'cute', 'ecru', 'euro', 'meou', 'merc', 'mope', 'more', 'mort', 'mote', 'moue', 'mure', 'mute', 'omer', 'perm', 'pert', 'poem', 'poet', 'pome', 'pore', 'port', 'pour', 'pout', 'prom', 'puce', 'pure', 'repo', 'romp', 'rope', 'rote', 'roue', 'roup', 'rout', 'rump', 'temp', 'term', 'tome', 'tope', 'torc', 'tore', 'tour', 'trop', 'true', 'tump', 'comer', 'comet', 'compt', 'comte', 'coper', 'coupe', 'court', 'crept', 'croup', 'cruet', 'crump', 'curet', 'cuter', 'eruct', 'erupt', 'metro', 'moper', 'mucor', 'mucro', 'muter', 'outer', 'outre', 'proem', 'recto', 'recut', 'repot', 'route', 'tempo', 'toper', 'tromp', 'trope', 'truce', 'trump', 'tumor', 'coempt', 'copter', 'couter', 'croupe', 'croute', 'pouter', 'precut', 'recoup', 'roupet', 'trompe', 'troupe', 'uptore', 'compute', 'crumpet', 'computer'];

const solution = ['into', 'ions', 'lino', 'lins', 'lint', 'lion', 'list', 'lits', 'litu', 'loin', 'loon', 'loos', 'loot', 'lost', 'loti', 'lots', 'lout', 'lunt', 'nils', 'nits', 'noil', 'nolo', 'nous', 'nuts', 'oils', 'olio', 'onos', 'onto', 'onus', 'oots', 'oust', 'outs', 'silo', 'silt', 'slit', 'slot', 'snit', 'snot', 'soil', 'soli', 'solo', 'soon', 'soot', 'soul', 'stun', 'suit', 'tils', 'tins', 'toil', 'tolu', 'tons', 'tool', 'toon', 'tuis', 'tuns', 'unit', 'unto', 'linos', 'lints', 'lions', 'loins', 'loons', 'loots', 'lotos', 'lotus', 'louis', 'louts', 'lunts', 'noils', 'nolos', 'olios', 'snool', 'snoot', 'snout', 'solon', 'sotol', 'stool', 'suint', 'toils', 'tolus', 'tonus', 'tools', 'toons', 'units', 'unlit', 'until', 'insoul', 'insult', 'lotion', 'outsin', 'solion', 'stolon', 'sunlit', 'tonsil', 'lotions', 'soliton', 'solution'];

const paradise = ['aide', 'aids', 'airs', 'aped', 'aper', 'apes', 'apse', 'area', 'ares', 'aria', 'arid', 'asea', 'dais', 'daps', 'dare', 'dear', 'dies', 'dips', 'dire', 'drip', 'ears', 'eras', 'idea', 'ides', 'ired', 'ires', 'padi', 'pads', 'paid', 'pair', 'para', 'pard', 'pare', 'pars', 'pase', 'pear', 'peas', 'peds', 'peri', 'pias', 'pied', 'pier', 'pies', 'rads', 'raia', 'raid', 'rais', 'raps', 'rase', 'rasp', 'read', 'reap', 'reds', 'reis', 'reps', 'rias', 'ride', 'rids', 'ripe', 'rips', 'rise', 'sade', 'sadi', 'said', 'sard', 'sari', 'sear', 'sera', 'side', 'sipe', 'sire', 'spae', 'spar', 'sped', 'aider', 'aides', 'aired', 'apers', 'apres', 'areas', 'arepa', 'arias', 'arise', 'aside', 'asper', 'dares', 'deair', 'dears', 'drape', 'dries', 'drips', 'ideas', 'irade', 'padis', 'padre', 'padri', 'pairs', 'paisa', 'paise', 'parae', 'paras', 'pardi', 'pards', 'pared', 'pares', 'paris', 'parse', 'pears', 'peris', 'piers', 'prase', 'presa', 'pride', 'pried', 'pries', 'prise', 'raias', 'raids', 'raise', 'rapid', 'rased', 'reads', 'reaps', 'redia', 'redip', 'resid', 'rides', 'riped', 'ripes', 'sapid', 'sepia', 'serai', 'siped', 'sired', 'spade', 'spaed', 'spare', 'spear', 'speir', 'spied', 'spier', 'spire', 'aiders', 'arepas', 'aspire', 'deairs', 'diaper', 'drapes', 'irades', 'padres', 'paired', 'parade', 'pardie', 'paries', 'parsed', 'praise', 'prides', 'prised', 'raised', 'rapids', 'rasped', 'redias', 'redips', 'repaid', 'resaid', 'sarape', 'spader', 'spared', 'sparid', 'spider', 'spirea', 'spired', 'spread', 'aspired', 'despair', 'diapers', 'parades', 'praised', 'spiraea', 'paradise'];

const republic = ['bice', 'bier', 'bile', 'birl', 'blip', 'blue', 'blur', 'brie', 'burl', 'burp', 'ceil', 'cire', 'clip', 'club', 'clue', 'crib', 'cube', 'curb', 'cure', 'curl', 'ecru', 'epic', 'lice', 'lier', 'lieu', 'lipe', 'lire', 'lube', 'luce', 'lure', 'peri', 'pice', 'pier', 'pile', 'pleb', 'plie', 'puce', 'pule', 'puli', 'pure', 'puri', 'purl', 'rice', 'riel', 'rile', 'ripe', 'rube', 'rule', 'uric', 'bicep', 'birle', 'bluer', 'cripe', 'cruel', 'cuber', 'cupel', 'curie', 'liber', 'lucre', 'peril', 'picul', 'plier', 'price', 'pubic', 'puler', 'relic', 'rubel', 'ruble', 'ulcer', 'ureic', 'lubric', 'public', 'republic'];

const gracious = ['agio', 'airs', 'arco', 'arcs', 'asci', 'cars', 'ciao', 'cigs', 'cogs', 'coir', 'cors', 'crag', 'cris', 'crus', 'curs', 'gars', 'gaur', 'giro', 'goas', 'guar', 'oars', 'ocas', 'orca', 'orcs', 'osar', 'ours', 'ragi', 'rags', 'rais', 'rias', 'rigs', 'rocs', 'ruga', 'rugs', 'sago', 'sari', 'scag', 'scar', 'soar', 'soca', 'sora', 'sori', 'sour', 'sura', 'uric', 'ursa', 'agios', 'arcus', 'argus', 'auric', 'auris', 'cargo', 'cigar', 'coirs', 'corgi', 'coria', 'crags', 'curia', 'curio', 'gaurs', 'giros', 'guaco', 'guars', 'guiro', 'orcas', 'orgic', 'ragis', 'sargo', 'scaur', 'scour', 'scrag', 'sugar', 'cargos', 'cigars', 'corgis', 'cougar', 'curios', 'giaour', 'guacos', 'guiros', 'orgiac', 'rugosa', 'scoria', 'souari', 'soucar', 'carious', 'cougars', 'curiosa', 'giaours', 'gracious'];



export const masterList = {
  rowing,
  thinks,
  flight,
  builds,
  writer,
  bitter,
  should,
  boring,
  gilded,
  stitch,
  falter,
  proper,
  letter,
  number,
  submit,
  timber,
  search,
  answer,
  carbon,
  street,
  spread,
  format,
  second,
  normal,
  freight,
  drizzle,
  concept,
  pursuit,
  dynamic,
  propose,
  athlete,
  science,
  feeling,
  further,
  archive,
  because,
  payment,
  service,
  company,
  another,
  partner,
  protect,
  without,
  deliver,
  machine,
  elegant,
  emerald,
  tedious,
  theater,
  therapy,
  natural,
  neglect,
  holding,
  heiress,
  realist,
  storage,
  creation,
  pristine,
  software,
  original,
  constant,
  squirrel,
  tomorrow,
  complete,
  standard,
  proposal,
  document,
  bathroom,
  everyone,
  download,
  business,
  mountain,
  strength,
  marriage,
  computer,
  solution,
  paradise,
  republic,
  gracious,
};



export const WORDS = {
  rowing,
  thinks,
  flight,
  builds,
  writer,
  bitter,
  should,
  boring,
  gilded,
  stitch,
  falter,
  proper,
  letter,
  number,
  submit,
  timber,
  search,
  answer,
  carbon,
  street,
  spread,
  format,
  second,
  normal,
}; 

const sevWords = {
  freight,
  drizzle,
  concept,
  pursuit,
  dynamic,
  propose,
  athlete,
  science,
  feeling,
  further,
  archive,
  because,
  payment,
  service,
  company,
  another,
  partner,
  protect,
  without,
  deliver,
  machine,
  elegant,
  emerald,
  tedious,
  theater,
  therapy,
  natural,
  neglect,
  holding,
  heiress,
  realist,
  storage,
};

const eightWords = {
  creation,
  pristine,
  software,
  original,
  constant,
  squirrel,
  tomorrow,
  complete,
  standard,
  proposal,
  document,
  bathroom,
  everyone,
  download,
  business,
  mountain,
  strength,
  marriage,
  computer,
  solution,
  paradise,
  republic,
  gracious,
};

async function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
};


let keys = Object.keys(WORDS);
let sevKeys = Object.keys(sevWords);
let eightKeys = Object.keys(eightWords);
shuffle(keys);
shuffle(sevKeys);
shuffle(eightKeys);

let sevList = sevKeys.slice(0, 3);

function randomNumb() {
 return Math.floor(Math.random() * keys.length);
}

 export const randomNumber = randomNumb()


// KEEP BELOW UNTIL WORD LENGTH INCREASES ARE COMPLETE

/*   let answers = {
  list: keys.slice(0, 5)
} */

// KEEP ABOVE UNTIL WORD LENGTH INCREASES ARE COMPLETE

export let answers = {
  list: [keys[0], keys[1], sevKeys[0], sevKeys[1], eightKeys[0]],
} 



let shuffled =  {
  word: answers.list[0],
}

export { shuffled };

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

export async function resetMe () {
  shuffle(keys);
  shuffle(sevKeys);
  shuffle(eightKeys);
  answers.list = [keys[0], keys[1], sevKeys[0], sevKeys[1], eightKeys[0]];
 // document.getElementById("test-there").innerHTML = `${answers.list}`;
  shuffled.word = answers.list[0];
  return document.getElementById("shuffled-word").innerHTML = 'Ready?';
}



export async function nextRound() {
  //deleteWord();
  //import { roundNumber } from "./script.js";
 // shuffled.word = wordOne[(round.number - 1)];
  shuffled.word = answers.list[(round.number - 1)];
return document.getElementById("shuffled-word").innerHTML = `${(shuffled.word).shuffle()}`;
}