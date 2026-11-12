export interface QuestionItem {
  id: number
  source: string
  en: string
  hi: string
  options: string[]
  answer: number
  answer_letter: string
  answer_text: string
  explanation: string
  tip: string
}

export interface SetMeta {
  id: string
  title: string
  section: 'qualifying' | 'gk_gs' | 'subject'
  section_name: string
  subject: string
  filename: string
  question_count: number
}

export const SETS_CATALOG: SetMeta[] = [
  {
    "id": "bpsc-tre4-english-literature-80q",
    "title": "English Literature Practice (80Q)",
    "section": "subject",
    "section_name": "Part-III Subject Practice (80 Marks)",
    "subject": "English Literature",
    "filename": "bpsc-tre4-english-literature-80q.docx",
    "question_count": 80
  },
  {
    "id": "bpsc-tre4-general-studies-40q",
    "title": "General Studies Practice Set 1 (40Q)",
    "section": "gk_gs",
    "section_name": "Part-II General Studies (40 Marks)",
    "subject": "General Studies",
    "filename": "bpsc-tre4-general-studies-40q.docx",
    "question_count": 40
  },
  {
    "id": "bpsc-tre4-general-studies-v2",
    "title": "General Studies Practice Set 2 (40Q)",
    "section": "gk_gs",
    "section_name": "Part-II General Studies (40 Marks)",
    "subject": "General Studies",
    "filename": "bpsc-tre4-general-studies-v2.docx",
    "question_count": 40
  },
  {
    "id": "bpsc-tre4-hindi-literature-80q",
    "title": "Hindi Literature Practice (80Q)",
    "section": "subject",
    "section_name": "Part-III Subject Practice (80 Marks)",
    "subject": "Hindi Literature",
    "filename": "bpsc-tre4-hindi-literature-80q.docx",
    "question_count": 80
  },
  {
    "id": "bpsc-tre4-qualifying-paper-40q",
    "title": "Language Qualifying Set 1 (40Q)",
    "section": "qualifying",
    "section_name": "Part-I Language Qualifying",
    "subject": "Language Qualifying",
    "filename": "bpsc-tre4-qualifying-paper-40q.docx",
    "question_count": 40
  },
  {
    "id": "bpsc-tre4-qualifying-paper-set2-40q",
    "title": "Language Qualifying Set 2 (40Q)",
    "section": "qualifying",
    "section_name": "Part-I Language Qualifying",
    "subject": "Language Qualifying",
    "filename": "bpsc-tre4-qualifying-paper-set2-40q.docx",
    "question_count": 40
  },
  {
    "id": "bpsc-tre4-sanskrit-80q",
    "title": "Sanskrit Subject Practice (80Q)",
    "section": "subject",
    "section_name": "Part-III Subject Practice (80 Marks)",
    "subject": "Sanskrit",
    "filename": "bpsc-tre4-sanskrit-80q.docx",
    "question_count": 80
  },
  {
    "id": "bpsc-tre4-science-80q",
    "title": "Science Subject Practice (80Q)",
    "section": "subject",
    "section_name": "Part-III Subject Practice (80 Marks)",
    "subject": "Science",
    "filename": "bpsc-tre4-science-80q.docx",
    "question_count": 80
  }
];

export const SETS_DATA: Record<string, QuestionItem[]> = {
  "bpsc-tre4-english-literature-80q": [
    {
      "id": 1,
      "source": "Chaucer & Middle English",
      "en": "Who is considered the Father of English Poetry?",
      "hi": "Who is considered the Father of English Poetry?",
      "options": [
        "William Shakespeare",
        "Geoffrey Chaucer",
        "Edmund Spenser",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Geoffrey Chaucer",
      "explanation": "Geoffrey Chaucer (c. 1340s–1400) is heralded as the 'Father of English Poetry' and 'Father of English Literature' for establishing the East Midland Middle English dialect as the primary standard national literary language in works like The Canterbury Tales.",
      "tip": "John Dryden praised Chaucer as 'the father of English poetry', while Matthew Arnold criticized him for lacking 'high seriousness'."
    },
    {
      "id": 2,
      "source": "Middle English Literature",
      "en": "How many pilgrims (excluding Chaucer and the Host) are introduced in the General Prologue to The Canterbury Tales?",
      "hi": "How many pilgrims (excluding Chaucer and the Host) are introduced in the General Prologue to The Canterbury Tales?",
      "options": [
        "29",
        "30",
        "31",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "29",
      "explanation": "Chaucer explicitly states at the Tabard Inn in Southwark that there were 'wel nyne and twenty in a compaignye' (29 pilgrims). Including Chaucer himself makes 30, and the Host (Harry Bailly) makes 31.",
      "tip": "Carefully read whether the question excludes or includes the narrator (Chaucer) and Harry Bailly. Only the pilgrims = 29; total party riding to Canterbury = 31."
    },
    {
      "id": 3,
      "source": "Elizabethan Poetry",
      "en": "Which rhyme scheme is used in the Spenserian Stanza?",
      "hi": "Which rhyme scheme is used in the Spenserian Stanza?",
      "options": [
        "ababbcbcc",
        "ababcdcd",
        "aabbccdde",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "ababbcbcc",
      "explanation": "Edmund Spenser invented the Spenserian stanza for The Faerie Queene. It consists of 9 lines: eight lines of iambic pentameter followed by a final twelve-syllable iambic hexameter (alexandrine), rhyming ababbcbcc.",
      "tip": "Spenserian stanza formula: 9 lines, rhyme scheme ababbcbcc, 9th line = Alexandrine (6 feet / 12 syllables). Adopted later by Keats (The Eve of St. Agnes) and Shelley (Adonais)."
    },
    {
      "id": 4,
      "source": "Shakespearean Tragedy",
      "en": "In which play does Shakespeare write the famous line: 'Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage'?",
      "hi": "In which play does Shakespeare write the famous line: 'Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage'?",
      "options": [
        "Hamlet",
        "King Lear",
        "Macbeth",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Macbeth",
      "explanation": "This celebrated soliloquy is uttered by Macbeth in Act V, Scene 5 upon hearing of the death of Lady Macbeth, expressing the existential nihilism of human life as 'a tale told by an idiot, full of sound and fury, signifying nothing.'",
      "tip": "Famous soliloquies: 'To be or not to be' = Hamlet; 'Tomorrow, and tomorrow, and tomorrow' = Macbeth; 'Blow, winds, and crack your cheeks' = King Lear."
    },
    {
      "id": 5,
      "source": "Shakespearean Sonnets",
      "en": "Shakespeare's sonnets consist of how many sonnets in total, and to whom are sonnets 1 to 126 generally addressed?",
      "hi": "Shakespeare's sonnets consist of how many sonnets in total, and to whom are sonnets 1 to 126 generally addressed?",
      "options": [
        "154 sonnets; Fair Youth",
        "154 sonnets; Dark Lady",
        "152 sonnets; Earl of Southampton",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "154 sonnets; Fair Youth",
      "explanation": "Shakespeare published a collection of 154 sonnets in 1609 (by Thomas Thorpe). Sonnets 1 to 126 are addressed to a handsome young nobleman (the 'Fair Youth'), 127 to 152 to the 'Dark Lady', and 153–154 to Cupid.",
      "tip": "Shakespearean Sonnet division: 1–126 = Fair Youth; 127–152 = Dark Lady; 153–154 = Allegorical/Cupid. Form: 3 quatrains + 1 rhyming couplet (abab cdcd efef gg)."
    },
    {
      "id": 6,
      "source": "17th Century Poetry",
      "en": "Who coined the phrase 'Metaphysical Poets' in his biographical work Lives of the Most Eminent English Poets?",
      "hi": "Who coined the phrase 'Metaphysical Poets' in his biographical work Lives of the Most Eminent English Poets?",
      "options": [
        "John Dryden",
        "Samuel Johnson",
        "Alexander Pope",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Samuel Johnson",
      "explanation": "Dr. Samuel Johnson coined the critical term in his essay on Abraham Cowley in Lives of the Poets (1779), noting that 'the metaphysical poets were men of learning... their wit was a kind of discordia concors.'",
      "tip": "Dryden first used 'metaphysics' regarding Donne in satire ('he affects the metaphysics'), but Dr. Samuel Johnson established 'Metaphysical School/Poets' as a literary classification."
    },
    {
      "id": 7,
      "source": "Metaphysical Conceits",
      "en": "John Donne's poem 'A Valediction: Forbidding Mourning' contains the celebrated conceit comparing two lovers' souls to",
      "hi": "John Donne's poem 'A Valediction: Forbidding Mourning' contains the celebrated conceit comparing two lovers' souls to",
      "options": [
        "two ships passing in the dark",
        "the twin compasses of a draughtsman",
        "two tears reflecting the globe",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "the twin compasses of a draughtsman",
      "explanation": "Donne uses a classic metaphysical conceit comparing the souls of separated lovers to the stiff twin legs of a drawing compass: 'If they be two, they are two so / As stiff twin compasses are two.'",
      "tip": "A 'Metaphysical Conceit' is an extended, startling, highly intellectualized comparison between two drastically dissimilar things (e.g., lovers' souls and a geometric compass)."
    },
    {
      "id": 8,
      "source": "Puritan Age & Epic",
      "en": "Milton's Paradise Lost was originally published in 1667 in how many books?",
      "hi": "Milton's Paradise Lost was originally published in 1667 in how many books?",
      "options": [
        "12 books",
        "10 books",
        "24 books",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "10 books",
      "explanation": "The first edition of John Milton's epic Paradise Lost was published in 1667 in 10 books. The second edition of 1674 was reorganized into 12 books (by dividing Books 7 and 10) to match Virgil's Aeneid.",
      "tip": "First edition (1667) = 10 books; Second definitive edition (1674) = 12 books. Verse form = unrhymed iambic pentameter (blank verse)."
    },
    {
      "id": 9,
      "source": "Milton's Poetry",
      "en": "What is the stated grand purpose of John Milton in writing Paradise Lost?",
      "hi": "What is the stated grand purpose of John Milton in writing Paradise Lost?",
      "options": [
        "To narrate the fall of Lucifer and his angels",
        "To justify the ways of God to men",
        "To defend the Puritan Revolution",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "To justify the ways of God to men",
      "explanation": "In Book I (lines 25–26), Milton declares his epic invocation: 'That to the heighth of this great argument / I may assert Eternal Providence, / And justify the ways of God to men.'",
      "tip": "Remember Milton's exact phrasing: 'justify the ways of God to men', contrasting with Alexander Pope's aim in An Essay on Man: 'vindicate the ways of God to man.'"
    },
    {
      "id": 10,
      "source": "Restoration Drama",
      "en": "Which Restoration dramatist wrote the famous comedy of manners The Way of the World (1700)?",
      "hi": "Which Restoration dramatist wrote the famous comedy of manners The Way of the World (1700)?",
      "options": [
        "William Wycherley",
        "William Congreve",
        "George Etherege",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "William Congreve",
      "explanation": "William Congreve's masterpiece The Way of the World (featuring lovers Mirabell and Millamant and their famous 'proviso scene') represents the pinnacle of Restoration Comedy of Manners.",
      "tip": "The Country Wife = William Wycherley; The Man of Mode = George Etherege; The Way of the World = William Congreve."
    },
    {
      "id": 11,
      "source": "Augustan Age & Satire",
      "en": "Alexander Pope's The Rape of the Lock is a mock-heroic epic based on an actual incident involving the cutting of a lock of hair of",
      "hi": "Alexander Pope's The Rape of the Lock is a mock-heroic epic based on an actual incident involving the cutting of a lock of hair of",
      "options": [
        "Arabella Fermor",
        "Martha Blount",
        "Lady Mary Wortley Montagu",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Arabella Fermor",
      "explanation": "Lord Petre clipped a lock of hair from Miss Arabella Fermor (represented as Belinda in the poem) without her permission, precipitating a bitter feud between two prominent Catholic families.",
      "tip": "The Rape of the Lock: Mock-epic machinery includes Sylphs (Ariel - air), Gnomes (Umbriel - earth), Nymphs (water), Salamanders (fire), and the game of Ombre."
    },
    {
      "id": 12,
      "source": "Augustan Prose",
      "en": "Jonathan Swift's celebrated political allegory and prose satire Gulliver's Travels (1726) contains how many voyages?",
      "hi": "Jonathan Swift's celebrated political allegory and prose satire Gulliver's Travels (1726) contains how many voyages?",
      "options": [
        "3 voyages",
        "4 voyages",
        "5 voyages",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "4 voyages",
      "explanation": "Gulliver undertakes 4 voyages: Part 1 - Lilliput (tiny people); Part 2 - Brobdingnag (giants); Part 3 - Laputa, Balnibarbi, Glubbdubdrib, Luggnagg, and Japan; Part 4 - Country of the Houyhnhnms (rational horses vs. Yahoos).",
      "tip": "Sequence of Gulliver's Travels: 1. Lilliput (6 inches high) -> 2. Brobdingnag (60 feet high) -> 3. Laputa (flying island) -> 4. Houyhnhnms (virtuous horses)."
    },
    {
      "id": 13,
      "source": "18th Century Prose",
      "en": "Who compiled the first comprehensive and authoritative A Dictionary of the English Language in 1755?",
      "hi": "Who compiled the first comprehensive and authoritative A Dictionary of the English Language in 1755?",
      "options": [
        "James Boswell",
        "Samuel Johnson",
        "Oliver Goldsmith",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Samuel Johnson",
      "explanation": "Dr. Samuel Johnson single-handedly compiled A Dictionary of the English Language over nearly nine years, publishing it in two folio volumes on 15 April 1755, defining over 40,000 words with literary quotations.",
      "tip": "Johnson's famous definition of lexicographer: 'a writer of dictionaries; a harmless drudge.' His life was chronicled by James Boswell in The Life of Samuel Johnson (1791)."
    },
    {
      "id": 14,
      "source": "Romantic Movement",
      "en": "The publication of which work in 1798 is universally accepted as the formal commencement of the Romantic Movement in England?",
      "hi": "The publication of which work in 1798 is universally accepted as the formal commencement of the Romantic Movement in England?",
      "options": [
        "Songs of Innocence and Experience by William Blake",
        "Lyrical Ballads by Wordsworth and Coleridge",
        "Preface to Shakespeare by Samuel Johnson",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Lyrical Ballads by Wordsworth and Coleridge",
      "explanation": "The joint, anonymous publication of Lyrical Ballads in 1798 by William Wordsworth and Samuel Taylor Coleridge launched English Romanticism. The celebrated 'Preface' explaining its revolutionary poetic theory was added in the 1800 edition.",
      "tip": "Lyrical Ballads (1798) opens with Coleridge's 'The Rime of the Ancient Mariner' and concludes with Wordsworth's 'Lines Composed a Few Miles above Tintern Abbey'."
    },
    {
      "id": 15,
      "source": "Romantic Literary Criticism",
      "en": "How did William Wordsworth famously define poetry in his 'Preface to Lyrical Ballads' (1800)?",
      "hi": "How did William Wordsworth famously define poetry in his 'Preface to Lyrical Ballads' (1800)?",
      "options": [
        "The spontaneous overflow of powerful feelings recollected in tranquillity",
        "The best words in the best order",
        "Criticism of life governed by the laws of poetic truth and beauty",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "The spontaneous overflow of powerful feelings recollected in tranquillity",
      "explanation": "Wordsworth defined poetry as 'the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquillity.' Coleridge defined prose as 'words in their best order' and poetry as 'the best words in the best order.'",
      "tip": "Definitions to memorize: Wordsworth = 'spontaneous overflow of powerful feelings'; Coleridge = 'the best words in the best order'; Matthew Arnold = 'criticism of life'."
    },
    {
      "id": 16,
      "source": "Keats & Romantic Poetry",
      "en": "Which Romantic poet authored the phrase 'Beauty is truth, truth beauty,—that is all / Ye know on earth, and all ye need to know'?",
      "hi": "Which Romantic poet authored the phrase 'Beauty is truth, truth beauty,—that is all / Ye know on earth, and all ye need to know'?",
      "options": [
        "P. B. Shelley",
        "John Keats",
        "Lord Byron",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "John Keats",
      "explanation": "These famous concluding lines appear in John Keats's 'Ode on a Grecian Urn' (1819), encapsulating his aesthetic philosophy equating timeless art, truth, and supreme beauty.",
      "tip": "Keats's major 1819 Odes: 'Ode to a Nightingale', 'Ode on a Grecian Urn', 'Ode on Melancholy', 'Ode to Psyche', 'To Autumn'. Concept of 'Negative Capability' = Keats."
    },
    {
      "id": 17,
      "source": "Pastoral Elegy",
      "en": "P. B. Shelley wrote his pastoral elegy Adonais (1821) to mourn the premature death of which fellow poet?",
      "hi": "P. B. Shelley wrote his pastoral elegy Adonais (1821) to mourn the premature death of which fellow poet?",
      "options": [
        "Lord Byron",
        "John Keats",
        "Robert Southey",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "John Keats",
      "explanation": "Shelley composed the pastoral elegy Adonais in 55 Spenserian stanzas following the tragic death of John Keats in Rome from tuberculosis at age 25 in February 1821.",
      "tip": "Famous English Elegies: Lycidas (Milton for Edward King); Adonais (Shelley for John Keats); In Memoriam (Tennyson for Arthur Henry Hallam); Thyrsis (Arnold for A.H. Clough)."
    },
    {
      "id": 18,
      "source": "19th Century Novel",
      "en": "Which female Romantic novelist wrote Pride and Prejudice, Sense and Sensibility, and Emma?",
      "hi": "Which female Romantic novelist wrote Pride and Prejudice, Sense and Sensibility, and Emma?",
      "options": [
        "Charlotte Brontë",
        "Jane Austen",
        "Mary Shelley",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Jane Austen",
      "explanation": "Jane Austen (1775–1817) masterfully depicted English landed gentry in domestic novels of manners, including Sense and Sensibility (1811), Pride and Prejudice (1813), and Emma (1815).",
      "tip": "Austen described her art as working on 'the little bit (two inches wide) of ivory on which I work with so fine a brush.'"
    },
    {
      "id": 19,
      "source": "Victorian Poetry",
      "en": "Who wrote the Victorian masterpiece In Memoriam A.H.H. (1850) that comforted Queen Victoria after Prince Albert's death?",
      "hi": "Who wrote the Victorian masterpiece In Memoriam A.H.H. (1850) that comforted Queen Victoria after Prince Albert's death?",
      "options": [
        "Robert Browning",
        "Alfred, Lord Tennyson",
        "Matthew Arnold",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Alfred, Lord Tennyson",
      "explanation": "Alfred, Lord Tennyson spent 17 years writing In Memoriam to grieve the sudden death of his Cambridge friend Arthur Henry Hallam. Published in 1850, it led to his appointment as Poet Laureate succeeding Wordsworth.",
      "tip": "In Memoriam Stanza: iambic tetrameter rhyming abba. Contains the famous line: ''Tis better to have loved and lost / Than never to have loved at all.'"
    },
    {
      "id": 20,
      "source": "Victorian Poetry",
      "en": "The dramatic monologue technique reached its highest psychological mastery in the Victorian poetry of",
      "hi": "The dramatic monologue technique reached its highest psychological mastery in the Victorian poetry of",
      "options": [
        "Alfred Tennyson",
        "Robert Browning",
        "D. G. Rossetti",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Robert Browning",
      "explanation": "Robert Browning perfected the dramatic monologue in poems like 'My Last Duchess', 'Fra Lippo Lippi', 'Andrea del Sarto', and 'Porphyria's Lover', revealing the speaker's hidden psyche through uninhibited speech to a silent auditor.",
      "tip": "Dramatic Monologue components: Single speaker (not the poet), specific dramatic crisis, presence of a silent listener, and unwitting revelation of the speaker's true character."
    },
    {
      "id": 21,
      "source": "Victorian Fiction",
      "en": "Charles Dickens's novel A Tale of Two Cities (1859) is set in which two historic cities during the French Revolution?",
      "hi": "Charles Dickens's novel A Tale of Two Cities (1859) is set in which two historic cities during the French Revolution?",
      "options": [
        "London and Rome",
        "London and Paris",
        "Paris and Vienna",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "London and Paris",
      "explanation": "The novel opens with the celebrated line 'It was the best of times, it was the worst of times' and alternates its historical plot between London (England) and Paris (France) during the Reign of Terror.",
      "tip": "Protagonist Sydney Carton sacrifices his life on the guillotine for Charles Darnay: 'It is a far, far better thing that I do, than I have ever done.'"
    },
    {
      "id": 22,
      "source": "Victorian Realism",
      "en": "Under what male pseudonym did Mary Ann Evans publish her masterly Victorian novels including Middlemarch and Silas Marner?",
      "hi": "Under what male pseudonym did Mary Ann Evans publish her masterly Victorian novels including Middlemarch and Silas Marner?",
      "options": [
        "Currer Bell",
        "George Eliot",
        "Acton Bell",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "George Eliot",
      "explanation": "Mary Ann Evans adopted the pen name 'George Eliot' to ensure her serious realist fiction would be judged on its merits rather than dismissed as light domestic female romance. Middlemarch (1871–72) is subtitled 'A Study of Provincial Life'.",
      "tip": "Victorian Pseudonyms: Mary Ann Evans = George Eliot; Charlotte Brontë = Currer Bell; Emily Brontë = Ellis Bell; Anne Brontë = Acton Bell."
    },
    {
      "id": 23,
      "source": "Hardy & Regional Novel",
      "en": "Thomas Hardy set the tragic plots of his major novels (such as Tess of the d'Urbervilles and The Mayor of Casterbridge) in the fictional semi-rural region called",
      "hi": "Thomas Hardy set the tragic plots of his major novels (such as Tess of the d'Urbervilles and The Mayor of Casterbridge) in the fictional semi-rural region called",
      "options": [
        "Malgudi",
        "Barsetshire",
        "Wessex",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Wessex",
      "explanation": "Thomas Hardy revived the ancient Anglo-Saxon kingdom name 'Wessex' to designate the regional fictional landscape of south and south-west England where his fatalistic rural tragedies unfold.",
      "tip": "Literary Geographies: Wessex = Thomas Hardy; Barsetshire = Anthony Trollope; Lake District = Wordsworth; Malgudi = R. K. Narayan; Yoknapatawpha = William Faulkner."
    },
    {
      "id": 24,
      "source": "Late Victorian Drama",
      "en": "Who wrote the play The Importance of Being Earnest (1895), a supreme masterpiece of Victorian wit and epigrammatic satire?",
      "hi": "Who wrote the play The Importance of Being Earnest (1895), a supreme masterpiece of Victorian wit and epigrammatic satire?",
      "options": [
        "George Bernard Shaw",
        "Oscar Wilde",
        "J. M. Synge",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Oscar Wilde",
      "explanation": "Oscar Wilde's farcical comedy of manners The Importance of Being Earnest, subtitled 'A Trivial Comedy for Serious People', satirizes Victorian earnestness, hypocrisy, and social propriety through characters like Jack Worthing, Algernon, and Lady Bracknell.",
      "tip": "Wilde was the central figure of the Aesthetic Movement ('Art for Art's Sake' / l'art pour l'art). Famous character: Lady Bracknell and her interrogation about the handbag."
    },
    {
      "id": 25,
      "source": "Victorian Critical Poetry",
      "en": "Which poem by Matthew Arnold laments the receding 'Sea of Faith' in the face of Victorian scientific skepticism and industrialism?",
      "hi": "Which poem by Matthew Arnold laments the receding 'Sea of Faith' in the face of Victorian scientific skepticism and industrialism?",
      "options": [
        "The Scholar-Gipsy",
        "Thyrsis",
        "Dover Beach",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Dover Beach",
      "explanation": "In 'Dover Beach' (1867), Arnold uses the pebble-strewn beach of Dover at night to symbolize the retreat of religious faith, concluding that humanity is stranded 'as on a darkling plain / Swept with confused alarms of struggle and flight.'",
      "tip": "'Sea of Faith' receding + 'melancholy, long, withdrawing roar' = Matthew Arnold's 'Dover Beach'."
    },
    {
      "id": 26,
      "source": "Modernist Poetry",
      "en": "T. S. Eliot's landmark modernist poem The Waste Land (1922) opens with which famous paradoxical line?",
      "hi": "T. S. Eliot's landmark modernist poem The Waste Land (1922) opens with which famous paradoxical line?",
      "options": [
        "April is the cruellest month",
        "Let us go then, you and I",
        "In my beginning is my end",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "April is the cruellest month",
      "explanation": "Section I of The Waste Land ('The Burial of the Dead') begins: 'April is the cruellest month, breeding / Lilacs out of the dead land, mixing / Memory and desire', inverting Chaucer's joyful spring opening in the Canterbury Tales.",
      "tip": "The Waste Land has 5 sections: 1. The Burial of the Dead; 2. A Game of Chess; 3. The Fire Sermon; 4. Death by Water; 5. What the Thunder Said. Dedicated to Ezra Pound ('il miglior fabbro')."
    },
    {
      "id": 27,
      "source": "Modernist Fiction",
      "en": "Which modernist stream-of-consciousness novel by James Joyce depicts a single day (16th June 1904) in the life of Leopold Bloom in Dublin?",
      "hi": "Which modernist stream-of-consciousness novel by James Joyce depicts a single day (16th June 1904) in the life of Leopold Bloom in Dublin?",
      "options": [
        "A Portrait of the Artist as a Young Man",
        "Ulysses",
        "Finnegans Wake",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Ulysses",
      "explanation": "James Joyce's monumental novel Ulysses (1922) chronicles the encounters of Leopold Bloom, Stephen Dedalus, and Molly Bloom in Dublin over the course of Thursday, 16 June 1904 (now celebrated internationally as 'Bloomsday').",
      "tip": "Ulysses parallels Homer's Odyssey across 18 episodes and concludes with Molly Bloom's unpunctuated 8-sentence stream-of-consciousness soliloquy ending in 'yes I said yes I will Yes.'"
    },
    {
      "id": 28,
      "source": "20th Century Drama",
      "en": "Who wrote the play Waiting for Godot (1953), the foremost exemplar of the Theatre of the Absurd?",
      "hi": "Who wrote the play Waiting for Godot (1953), the foremost exemplar of the Theatre of the Absurd?",
      "options": [
        "Harold Pinter",
        "Samuel Beckett",
        "Eugene Ionesco",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Samuel Beckett",
      "explanation": "Irish playwright Samuel Beckett wrote Waiting for Godot (originally in French as En attendant Godot), where two tramps, Vladimir and Estragon, endlessly wait by a solitary tree for a mysterious figure named Godot who never arrives.",
      "tip": "Critic Vivian Mercier famously summarized Waiting for Godot: 'a play where nothing happens, twice.' Key term: Theatre of the Absurd (coined by Martin Esslin).\nSECTION 2: LITERARY CRITICISM, THEORY, INDIAN WRITING IN ENGLISH & AMERICAN LITERATURE (Q.29 to Q.55)"
    },
    {
      "id": 29,
      "source": "Classical Criticism (Aristotle)",
      "en": "In his Poetics, Aristotle defines 'Tragedy' as an imitation of an action that is serious, complete, and of a certain magnitude, effecting through pity and fear the purgation of such emotions, which he terms",
      "hi": "In his Poetics, Aristotle defines 'Tragedy' as an imitation of an action that is serious, complete, and of a certain magnitude, effecting through pity and fear the purgation of such emotions, which he terms",
      "options": [
        "Hamartia",
        "Catharsis",
        "Anagnorisis",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Catharsis",
      "explanation": "Aristotle uses the Greek medical/ritual term 'Catharsis' (katharsis) to designate the therapeutic emotional purgation or purification of pity (eleos) and fear (phobos) experienced by the tragic audience.",
      "tip": "Aristotelian Tragedy terms: Catharsis = emotional purgation; Hamartia = tragic error of judgment; Anagnorisis = recognition/discovery; Peripeteia = reversal of fortune; Hubris = insolent pride."
    },
    {
      "id": 30,
      "source": "Classical Poetics",
      "en": "What is the term coined by Aristotle for the tragic flaw or fatal error of judgment that precipitates the hero's downfall?",
      "hi": "What is the term coined by Aristotle for the tragic flaw or fatal error of judgment that precipitates the hero's downfall?",
      "options": [
        "Peripeteia",
        "Hamartia",
        "Nemesis",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Hamartia",
      "explanation": "Hamartia (derived from Greek for 'missing the mark' in archery) denotes the tragic flaw, miscalculation, or moral blindness that brings about the tragic protagonist's ruin.",
      "tip": "Othello's credulous jealousy, Hamlet's procrastination, and Macbeth's vaulting ambition are classic Shakespearean examples of Hamartia."
    },
    {
      "id": 31,
      "source": "Coleridge's Literary Theory",
      "en": "In Biographia Literaria (1817), S. T. Coleridge famously distinguished between two faculties of the poetic mind, namely",
      "hi": "In Biographia Literaria (1817), S. T. Coleridge famously distinguished between two faculties of the poetic mind, namely",
      "options": [
        "Primary Imagination and Secondary Imagination",
        "Fancy and Imagination",
        "Wit and Judgement",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "More than one of the above",
      "explanation": "In Chapter XIII of Biographia Literaria, Coleridge introduces both distinctions: first, between Fancy (a mechanical, aggregating mode of memory) and Imagination (creative, synthetic power); and second, subdividing Imagination into 'Primary' (universal perception) and 'Secondary' (conscious artistic creation).",
      "tip": "Because Coleridge formulates BOTH the Fancy vs. Imagination distinction and the Primary vs. Secondary Imagination division, BPSC Option (D) is triggered."
    },
    {
      "id": 32,
      "source": "Romantic Criticism",
      "en": "Which celebrated critical phrase was formulated by S. T. Coleridge to describe the reader's mental state required to appreciate romantic and supernatural literature?",
      "hi": "Which celebrated critical phrase was formulated by S. T. Coleridge to describe the reader's mental state required to appreciate romantic and supernatural literature?",
      "options": [
        "Negative Capability",
        "Objective Correlative",
        "Willing suspension of disbelief",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Willing suspension of disbelief",
      "explanation": "In Chapter XIV of Biographia Literaria, Coleridge explains that in his contributions to Lyrical Ballads (such as 'The Ancient Mariner'), his endeavor was to transfer human interest to supernatural incidents, procuring 'that willing suspension of disbelief for the moment, which constitutes poetic faith.'",
      "tip": "Match critical concepts to authors: Willing suspension of disbelief = Coleridge; Negative Capability = Keats; Objective Correlative = T. S. Eliot; Touchstone Method = Matthew Arnold."
    },
    {
      "id": 33,
      "source": "T. S. Eliot's Criticism",
      "en": "T. S. Eliot coined the concept of 'Objective Correlative' in which of his critical essays?",
      "hi": "T. S. Eliot coined the concept of 'Objective Correlative' in which of his critical essays?",
      "options": [
        "Tradition and the Individual Talent",
        "Hamlet and His Problems",
        "The Metaphysical Poets",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Hamlet and His Problems",
      "explanation": "In 'Hamlet and His Problems' (1919), Eliot defined the 'objective correlative' as 'a set of objects, a situation, a chain of events which shall be the formula of that particular emotion', infamously declaring Shakespeare's Hamlet 'an artistic failure' because Hamlet's emotion exceeded the facts.",
      "tip": "Eliot's landmark essays: 'Hamlet and His Problems' (Objective Correlative); 'The Metaphysical Poets' (Dissociation of Sensibility); 'Tradition and the Individual Talent' (Impersonal theory of poetry)."
    },
    {
      "id": 34,
      "source": "Modernist Criticism",
      "en": "The critical concept of 'Dissociation of Sensibility'—the separation of thought from feeling that occurred in 17th-century English poetry—was advanced by",
      "hi": "The critical concept of 'Dissociation of Sensibility'—the separation of thought from feeling that occurred in 17th-century English poetry—was advanced by",
      "options": [
        "I. A. Richards",
        "T. S. Eliot",
        "F. R. Leavis",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "T. S. Eliot",
      "explanation": "In 'The Metaphysical Poets' (1921), Eliot argued that poets like Donne possessed a mechanism of sensibility that could devour any kind of experience ('they felt their thought as immediately as the odour of a rose'), but in the 17th century a 'dissociation of sensibility' set in from Milton and Dryden onward.",
      "tip": "Unified Sensibility = Metaphysical poets (thought and feeling fused); Dissociation of Sensibility = Post-Restoration poetry (intellect and emotion split)."
    },
    {
      "id": 35,
      "source": "New Criticism",
      "en": "Which foundational New Critical text was authored by W. K. Wimsatt Jr. and Monroe Beardsley regarding the error of judging a literary work by the author's intended meaning?",
      "hi": "Which foundational New Critical text was authored by W. K. Wimsatt Jr. and Monroe Beardsley regarding the error of judging a literary work by the author's intended meaning?",
      "options": [
        "The Affective Fallacy",
        "The Intentional Fallacy",
        "Seven Types of Ambiguity",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "The Intentional Fallacy",
      "explanation": "In 'The Intentional Fallacy' (1946), Wimsatt and Beardsley argued that an author's design or intention is neither available nor desirable as a standard for judging the success of a work of literary art. In 'The Affective Fallacy' (1949), they argued against judging poetry by its psychological emotional effect on the reader.",
      "tip": "Wimsatt & Beardsley's two fallacies: Intentional Fallacy = confusing the poem with its author's intent; Affective Fallacy = confusing the poem with its emotional effect on the reader."
    },
    {
      "id": 36,
      "source": "Postcolonial Theory",
      "en": "Who authored the seminal postcolonial critical text Orientalism (1978), analyzing how the West historically constructed and represented the East as inferior, exotic, and irrational?",
      "hi": "Who authored the seminal postcolonial critical text Orientalism (1978), analyzing how the West historically constructed and represented the East as inferior, exotic, and irrational?",
      "options": [
        "Homi K. Bhabha",
        "Gayatri Chakravorty Spivak",
        "Edward W. Said",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Edward W. Said",
      "explanation": "Palestinian-American scholar Edward Said published Orientalism in 1978, drawing upon Michel Foucault's concepts of discourse and power to demonstrate how Western colonial scholarship systematically produced an ideologically biased representation of the Orient.",
      "tip": "Postcolonial Trinity: Edward Said (Orientalism); Homi Bhabha (Hybridity, Mimicry, Third Space); Gayatri Spivak ('Can the Subaltern Speak?', Strategic Essentialism)."
    },
    {
      "id": 37,
      "source": "Subaltern Studies & Theory",
      "en": "The celebrated postcolonial essay 'Can the Subaltern Speak?' (1988), examining the systemic silencing of marginalized colonized subjects (particularly women), was written by",
      "hi": "The celebrated postcolonial essay 'Can the Subaltern Speak?' (1988), examining the systemic silencing of marginalized colonized subjects (particularly women), was written by",
      "options": [
        "Gayatri Chakravorty Spivak",
        "Edward Said",
        "Frantz Fanon",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Gayatri Chakravorty Spivak",
      "explanation": "Gayatri Chakravorty Spivak's influential essay examines how colonial archives and indigenous patriarchal structures mutually silence the subaltern woman, illustrated through the historical prohibition of Sati in colonial India.",
      "tip": "The term 'Subaltern' was originally borrowed from Marxist theorist Antonio Gramsci's Prison Notebooks to denote socially subordinated, disenfranchised groups."
    },
    {
      "id": 38,
      "source": "Deconstruction & Theory",
      "en": "Who delivered the revolutionary 1966 Johns Hopkins lecture 'Structure, Sign, and Play in the Discourse of the Human Sciences', inaugurating Post-Structuralism and Deconstruction?",
      "hi": "Who delivered the revolutionary 1966 Johns Hopkins lecture 'Structure, Sign, and Play in the Discourse of the Human Sciences', inaugurating Post-Structuralism and Deconstruction?",
      "options": [
        "Roland Barthes",
        "Jacques Derrida",
        "Michel Foucault",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Jacques Derrida",
      "explanation": "Jacques Derrida's lecture challenged structuralism's belief in a fixed, transcendent center or origin in linguistic structures, introducing key deconstructive concepts such as 'decentering', 'play', and later 'différance'.",
      "tip": "Derrida coined 'Différance' (combining differing and deferring of meaning) and wrote Of Grammatology (1967). Famous quote: 'There is nothing outside the text' (Il n'y a pas de hors-texte)."
    },
    {
      "id": 39,
      "source": "Indian Writing in English",
      "en": "Rabindranath Tagore was awarded the Nobel Prize in Literature in 1913 for his translated collection of spiritual lyrics titled",
      "hi": "Rabindranath Tagore was awarded the Nobel Prize in Literature in 1913 for his translated collection of spiritual lyrics titled",
      "options": [
        "The Post Office",
        "Gora",
        "Gitanjali (Song Offerings)",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Gitanjali (Song Offerings)",
      "explanation": "Rabindranath Tagore became the first non-European Nobel laureate in Literature in 1913 for Gitanjali (Song Offerings), published in English translation in 1912 with an introduction by W. B. Yeats.",
      "tip": "Gitanjali contains 103 English prose poems translated by Tagore himself from his Bengali collections (Gitanjali, Gitimalya, Naivedya). Opens with 'Thou hast made me endless, such is thy pleasure.'"
    },
    {
      "id": 40,
      "source": "Indian English Novel",
      "en": "Who wrote Untouchable (1935) and Coolie (1936), portraying the bitter socio-economic plight of marginalized outcasts in colonial India?",
      "hi": "Who wrote Untouchable (1935) and Coolie (1936), portraying the bitter socio-economic plight of marginalized outcasts in colonial India?",
      "options": [
        "R. K. Narayan",
        "Mulk Raj Anand",
        "Raja Rao",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Mulk Raj Anand",
      "explanation": "Mulk Raj Anand, one of the foundational 'Big Three' of Indian English fiction, wrote Untouchable (depicting a single day in the life of Bakha, a latrine cleaner) with a preface by E. M. Forster, and Coolie (chronicling Munoo's tragic exploitation).",
      "tip": "The 'Big Three' of Indian English Novel: Mulk Raj Anand (social realism & protest), R. K. Narayan (gentle irony in Malgudi), and Raja Rao (philosophical & metaphysical prose)."
    },
    {
      "id": 41,
      "source": "R. K. Narayan & Malgudi",
      "en": "Which Indian English novelist created the celebrated fictional South Indian town of Malgudi?",
      "hi": "Which Indian English novelist created the celebrated fictional South Indian town of Malgudi?",
      "options": [
        "Raja Rao",
        "R. K. Narayan",
        "Bhabani Bhattacharya",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "R. K. Narayan",
      "explanation": "R. K. Narayan introduced the idyllic, microcosmic fictional town of Malgudi in his debut novel Swami and Friends (1935), subsequently setting almost all his novels and short stories (The Guide, The Bachelor of Arts, The English Teacher) there.",
      "tip": "R. K. Narayan won the Sahitya Akademi Award in 1960 for The Guide (adapted into the iconic 1965 film starring Dev Anand)."
    },
    {
      "id": 42,
      "source": "Raja Rao & Gandhian Novel",
      "en": "Raja Rao's landmark novel Kanthapura (1938) narrates the impact of Gandhian non-violent agitation on a remote south Indian village through the oral storytelling voice of an old woman named",
      "hi": "Raja Rao's landmark novel Kanthapura (1938) narrates the impact of Gandhian non-violent agitation on a remote south Indian village through the oral storytelling voice of an old woman named",
      "options": [
        "Ratna",
        "Rangamma",
        "Achakka",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Achakka",
      "explanation": "Kanthapura is narrated in the oral Sthala-purana style of traditional Harikatha by the grandmotherly narrator Achakka, chronicling young Moorthy's mobilization of the villagers under Mahatma Gandhi's call.",
      "tip": "Raja Rao's famous Foreword to Kanthapura: 'We cannot write like the English. We should not. We cannot write only as Indians... Our method of expression has to be a dialect which will some day prove to be as distinctive and colorful as the Irish or the American.'"
    },
    {
      "id": 43,
      "source": "Indian English Poetry",
      "en": "Nissim Ezekiel, regarded as the father of modern post-independence Indian English poetry, wrote which autobiographical, ironical masterpiece about rural superstition?",
      "hi": "Nissim Ezekiel, regarded as the father of modern post-independence Indian English poetry, wrote which autobiographical, ironical masterpiece about rural superstition?",
      "options": [
        "'Enterprise'",
        "'Night of the Scorpion'",
        "'Background, Casually'",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "'Night of the Scorpion'",
      "explanation": "'Night of the Scorpion' (from The Exact Name, 1965) dramatizes a mother being stung by a scorpion on a rainy night, contrasting peasant folk rituals ('May the sins of your previous birth be burned away tonight') with the skeptical father's rationalist remedies, ending with the mother's selfless blessing.",
      "tip": "Ezekiel's poetic volumes: A Time to Change (1952), The Unfinished Man (1960), The Exact Name (1965), Hymns in Darkness (1976)."
    },
    {
      "id": 44,
      "source": "Confessional Poetry",
      "en": "Which confessional Indian English poet authored 'An Introduction' and the autobiographical memoir My Story (1976)?",
      "hi": "Which confessional Indian English poet authored 'An Introduction' and the autobiographical memoir My Story (1976)?",
      "options": [
        "Toru Dutt",
        "Sarojini Naidu",
        "Kamala Das",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Kamala Das",
      "explanation": "Kamala Das (also known as Kamala Surayya / Madhavikutty) revolutionized Indian confessional poetry by boldly expressing female sexuality, personal identity, and emotional rebellion against patriarchal domesticity in 'An Introduction' ('I am Indian, very brown, born in Malabar...').",
      "tip": "Key line from 'An Introduction': 'The language I speak / Becomes mine, its distortions, its queernesses / All mine, mine alone.' Confessional poets: Kamala Das, Sylvia Plath, Anne Sexton, Robert Lowell."
    },
    {
      "id": 45,
      "source": "Contemporary Postcolonial Fiction",
      "en": "Salman Rushdie's novel Midnight's Children (1981), which won both the Booker Prize and the 'Booker of Bookers', features a protagonist born at the exact stroke of India's independence midnight named",
      "hi": "Salman Rushdie's novel Midnight's Children (1981), which won both the Booker Prize and the 'Booker of Bookers', features a protagonist born at the exact stroke of India's independence midnight named",
      "options": [
        "Omar Khayyam Shakil",
        "Saleem Sinai",
        "Shiva",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Saleem Sinai",
      "explanation": "Saleem Sinai, born at the stroke of midnight on 15 August 1947, possesses telepathic powers connecting him to all 1,001 children born during India's first hour of independence, making his personal biography an allegory of the nation's political history.",
      "tip": "Midnight's Children popularized Magic Realism in Indian English literature, won the Booker Prize in 1981, and received the 25th and 40th anniversary 'Booker of Bookers' awards."
    },
    {
      "id": 46,
      "source": "Contemporary Indian Fiction",
      "en": "Arundhati Roy won the Man Booker Prize in 1997 for her debut novel set in Ayemenem, Kerala, titled",
      "hi": "Arundhati Roy won the Man Booker Prize in 1997 for her debut novel set in Ayemenem, Kerala, titled",
      "options": [
        "The Ministry of Utmost Happiness",
        "The God of Small Things",
        "The Inheritance of Loss",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "The God of Small Things",
      "explanation": "Arundhati Roy's semi-autobiographical lyrical novel The God of Small Things (1997) tells the tragic story of two dizygotic twins, Rahel and Estha, and their mother Ammu's forbidden inter-caste love with Velutha ('The God of Small Things').",
      "tip": "The novel explores the transgressions of 'Love Laws' that dictate 'who should be loved, and how, and how much.' Roy was the first resident Indian citizen to win the Booker Prize."
    },
    {
      "id": 47,
      "source": "Early Indian English Poetry",
      "en": "Who is revered as the 'Nightingale of India' (Bharat Kokila) for her lyrical poetry collections including The Golden Threshold (1905) and The Bird of Time?",
      "hi": "Who is revered as the 'Nightingale of India' (Bharat Kokila) for her lyrical poetry collections including The Golden Threshold (1905) and The Bird of Time?",
      "options": [
        "Toru Dutt",
        "Sarojini Naidu",
        "Kamala Das",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Sarojini Naidu",
      "explanation": "Sarojini Naidu was given the sobriquet 'Bharat Kokila' by Mahatma Gandhi for the musical and rhythmic quality of her poems on Indian folk life ('Palanquin Bearers', 'In the Bazaars of Hyderabad', 'Coromandel Fishers').",
      "tip": "Sarojini Naidu was the first Indian woman to become President of the Indian National Congress (Kanpur Session, 1925) and the first woman Governor of Uttar Pradesh."
    },
    {
      "id": 48,
      "source": "19th-Century Indian English Poetry",
      "en": "Which 19th-century Indian poetess wrote Ancient Ballads and Legends of Hindustan (1882) and the famous sonnet 'Our Casuarina Tree' before dying of tuberculosis at age 21?",
      "hi": "Which 19th-century Indian poetess wrote Ancient Ballads and Legends of Hindustan (1882) and the famous sonnet 'Our Casuarina Tree' before dying of tuberculosis at age 21?",
      "options": [
        "Sarojini Naidu",
        "Toru Dutt",
        "Aru Dutt",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Toru Dutt",
      "explanation": "Toru Dutt (1856–1877), writing in both English and French, authored 'Our Casuarina Tree', immortalizing the tree in her garden at Baugmaree as a symbol of nostalgic childhood memory and lost siblings (Abju and Aru).",
      "tip": "'Our Casuarina Tree' blends the Romantic Keatsian ode style with Indian devotional and nature imagery, ending with a prayer that the tree be spared from oblivion."
    },
    {
      "id": 49,
      "source": "American Transcendentalism",
      "en": "Who is recognized as the pioneer of American Transcendentalism and author of the landmark 1836 manifesto essay Nature and 'Self-Reliance'?",
      "hi": "Who is recognized as the pioneer of American Transcendentalism and author of the landmark 1836 manifesto essay Nature and 'Self-Reliance'?",
      "options": [
        "Henry David Thoreau",
        "Ralph Waldo Emerson",
        "Walt Whitman",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Ralph Waldo Emerson",
      "explanation": "Ralph Waldo Emerson led the Transcendentalist movement in 19th-century New England, emphasizing self-reliance, the divine presence in nature, and the 'Over-Soul' in his 1836 book Nature and 1841 essay 'Self-Reliance'.",
      "tip": "Famous quote from Emerson's 'Self-Reliance': 'Whoso would be a man, must be a nonconformist.' Thoreau put Emerson's philosophy into practice at Walden Pond."
    },
    {
      "id": 50,
      "source": "American Romanticism",
      "en": "Which classic American novel by Nathaniel Hawthorne deals with the Puritan guilt, sin, and redemption of Hester Prynne, who is condemned to wear an embroidered 'A'?",
      "hi": "Which classic American novel by Nathaniel Hawthorne deals with the Puritan guilt, sin, and redemption of Hester Prynne, who is condemned to wear an embroidered 'A'?",
      "options": [
        "The House of the Seven Gables",
        "The Blithedale Romance",
        "The Scarlet Letter",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "The Scarlet Letter",
      "explanation": "The Scarlet Letter (1850) is set in 17th-century Puritan Boston. Hester Prynne is forced to wear the scarlet letter 'A' on her bosom for adultery, while her secret lover, Reverend Arthur Dimmesdale, dies tormented by unconfessed guilt.",
      "tip": "The letter 'A' shifts symbolic meaning throughout the novel: Adultery -> Able -> Angel. Major characters: Hester Prynne, Arthur Dimmesdale, Roger Chillingworth, Pearl."
    },
    {
      "id": 51,
      "source": "19th Century American Fiction",
      "en": "Herman Melville dedicated his epic novel Moby-Dick (1851) to which friend and fellow author?",
      "hi": "Herman Melville dedicated his epic novel Moby-Dick (1851) to which friend and fellow author?",
      "options": [
        "Ralph Waldo Emerson",
        "Nathaniel Hawthorne",
        "Edgar Allan Poe",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Nathaniel Hawthorne",
      "explanation": "Melville's dedication reads: 'In token of my admiration for his genius, this book is inscribed to Nathaniel Hawthorne.' The novel chronicles Captain Ahab's obsessive pursuit of the white whale, Moby Dick, aboard the ship Pequod.",
      "tip": "Moby-Dick opens with one of the most famous first lines in world literature: 'Call me Ishmael.'"
    },
    {
      "id": 52,
      "source": "American Poetry",
      "en": "Walt Whitman celebrated the American spirit, democracy, and free verse in his landmark poetry collection Leaves of Grass, first published in which year?",
      "hi": "Walt Whitman celebrated the American spirit, democracy, and free verse in his landmark poetry collection Leaves of Grass, first published in which year?",
      "options": [
        "1850",
        "1855",
        "1865",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "1855",
      "explanation": "Walt Whitman self-published the first edition of Leaves of Grass in 1855 containing 12 untitled poems (including 'Song of Myself'). He spent the rest of his life revising and expanding it through nine successive editions until the 1892 'Deathbed Edition'.",
      "tip": "Whitman is the 'Father of Free Verse' in American poetry. His celebrated elegies on Abraham Lincoln: 'O Captain! My Captain!' (rhymed) and 'When Lilacs Last in the Dooryard Bloom'd' (free verse)."
    },
    {
      "id": 53,
      "source": "The Lost Generation & 1920s",
      "en": "F. Scott Fitzgerald captured the glittering disillusionment, materialism, and moral decay of the 'Jazz Age' of the 1920s in which masterpiece?",
      "hi": "F. Scott Fitzgerald captured the glittering disillusionment, materialism, and moral decay of the 'Jazz Age' of the 1920s in which masterpiece?",
      "options": [
        "This Side of Paradise",
        "Tender Is the Night",
        "The Great Gatsby",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "The Great Gatsby",
      "explanation": "The Great Gatsby (1925), narrated by Nick Carraway, depicts the tragic romantic obsession of self-made millionaire Jay Gatsby with Daisy Buchanan on Long Island during the Roaring Twenties.",
      "tip": "Key symbols: The green light at the end of Daisy's dock (yearning/American Dream), the Eyes of Dr. T. J. Eckleburg (indifferent divine judgment), the Valley of Ashes."
    },
    {
      "id": 54,
      "source": "American Modernist Prose",
      "en": "Who developed the 'Iceberg Theory' (or theory of omission) in fiction, stating that seven-eighths of the story's meaning lies underwater, as exemplified in The Old Man and the Sea?",
      "hi": "Who developed the 'Iceberg Theory' (or theory of omission) in fiction, stating that seven-eighths of the story's meaning lies underwater, as exemplified in The Old Man and the Sea?",
      "options": [
        "William Faulkner",
        "Ernest Hemingway",
        "John Steinbeck",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Ernest Hemingway",
      "explanation": "Ernest Hemingway practiced the 'Iceberg Theory'—a minimalist, journalistic style where background emotion and profound thematic depth remain unstated beneath terse, declarative surface prose. He won the 1954 Nobel Prize after publishing The Old Man and the Sea (1952).",
      "tip": "Hemingway Hero code: 'A man can be destroyed but not defeated' (uttered by Santiago in The Old Man and the Sea)."
    },
    {
      "id": 55,
      "source": "Modern American Drama",
      "en": "Arthur Miller's tragic masterpiece Death of a Salesman (1949) critiques the illusions of the American Dream through the pathetic breakdown and suicide of",
      "hi": "Arthur Miller's tragic masterpiece Death of a Salesman (1949) critiques the illusions of the American Dream through the pathetic breakdown and suicide of",
      "options": [
        "Biff Loman",
        "Willy Loman",
        "Happy Loman",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Willy Loman",
      "explanation": "Willy Loman, an aging traveling salesman, is destroyed by his hollow belief that superficial charm and 'being well-liked' guarantee prosperity, ultimately committing suicide so his son Biff can collect his $20,000 life insurance policy.",
      "tip": "Arthur Miller defined modern common tragedy in his companion essay 'Tragedy and the Common Man' (1949), arguing that the common man is as apt a subject for tragedy as kings.\nSECTION 3: RHETORIC, PROSODY, ADVANCED GRAMMAR, PHONETICS & ELT PEDAGOGY (Q.56 to Q.80)"
    },
    {
      "id": 56,
      "source": "Figures of Speech",
      "en": "Which figure of speech is defined as an explicit comparison between two essentially dissimilar things using the connecting words 'like' or 'as'?",
      "hi": "Which figure of speech is defined as an explicit comparison between two essentially dissimilar things using the connecting words 'like' or 'as'?",
      "options": [
        "Metaphor",
        "Simile",
        "Personification",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Simile",
      "explanation": "A Simile is a figure of speech in which an explicit comparison is stated between two different entities using 'as' or 'like' (e.g., 'O my Luve is like a red, red rose' - Robert Burns).",
      "tip": "Explicit comparison with 'as' or 'like' = Simile; Implicit/condensed comparison without 'as/like' = Metaphor ('Life is a dream')."
    },
    {
      "id": 57,
      "source": "Figures of Speech",
      "en": "Identify the figure of speech in the sentence: 'The pen is mightier than the sword.'",
      "hi": "Identify the figure of speech in the sentence: 'The pen is mightier than the sword.'",
      "options": [
        "Synecdoche",
        "Metonymy",
        "Hyperbole",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Metonymy",
      "explanation": "Metonymy (Greek for 'change of name') substitutes the name of an attribute or closely associated object for the thing meant. Here, 'the pen' stands for the written word / press, and 'the sword' stands for military force.",
      "tip": "Metonymy = associated object substitutes the concept ('the Crown' = monarchy, 'the White House' = US President); Synecdoche = part for the whole or whole for the part ('all hands on deck' = sailors)."
    },
    {
      "id": 58,
      "source": "Rhetoric & Prosody",
      "en": "In the line: 'Ten thousand saw I at a glance, / Tossing their heads in sprightly dance', which two figures of speech are employed by Wordsworth?",
      "hi": "In the line: 'Ten thousand saw I at a glance, / Tossing their heads in sprightly dance', which two figures of speech are employed by Wordsworth?",
      "options": [
        "Hyperbole and Personification",
        "Metaphor and Simile",
        "Oxymoron and Paradox",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Hyperbole and Personification",
      "explanation": "In 'Daffodils', 'Ten thousand saw I at a glance' is an obvious poetic exaggeration (Hyperbole), while 'Tossing their heads in sprightly dance' endows flowers with human emotional agency (Personification).",
      "tip": "Exaggeration for poetic emphasis = Hyperbole; Endowing inanimate nature with human physical traits/feelings = Personification (or Pathetic Fallacy if nature sympathizes with human sorrow)."
    },
    {
      "id": 59,
      "source": "Figures of Speech",
      "en": "What figure of speech is formed by juxtaposing two contradictory words together, such as 'deafening silence' or 'bittersweet'?",
      "hi": "What figure of speech is formed by juxtaposing two contradictory words together, such as 'deafening silence' or 'bittersweet'?",
      "options": [
        "Paradox",
        "Oxymoron",
        "Antithesis",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Oxymoron",
      "explanation": "An Oxymoron is a compact verbal figure where two sharply contradictory terms are joined in a single phrase (e.g., 'cruel kindness', 'parting is such sweet sorrow'). A Paradox is an entire statement that appears self-contradictory but expresses a profound underlying truth.",
      "tip": "Phrase-level contradictory words joined = Oxymoron; Sentence-level self-contradictory statement = Paradox ('The child is father of the man')."
    },
    {
      "id": 60,
      "source": "English Prosody & Metre",
      "en": "In English metrics and prosody, an iambic foot consists of",
      "hi": "In English metrics and prosody, an iambic foot consists of",
      "options": [
        "one stressed syllable followed by one unstressed syllable",
        "one unstressed syllable followed by one stressed syllable",
        "two unstressed syllables followed by one stressed syllable",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "one unstressed syllable followed by one stressed syllable",
      "explanation": "An iamb (iambic foot) consists of an unstressed syllable followed by a stressed syllable (da-DUM / \\(\\cup\\) \\(-\\)). Trochee is the exact reverse: stressed followed by unstressed (DUM-da).",
      "tip": "Poetic feet cheat sheet: Iamb = Unstressed + Stressed (\\(\\cup\\) \\(-\\)); Trochee = Stressed + Unstressed (\\(-\\) \\(\\cup\\)); Anapest = Two unstressed + Stressed (\\(\\cup\\) \\(\\cup\\) \\(-\\)); Dactyl = Stressed + Two unstressed (\\(-\\) \\(\\cup\\) \\(\\cup\\))."
    },
    {
      "id": 61,
      "source": "Voice Transformation",
      "en": "Change the following sentence into Passive Voice: 'Who wrote this famous novel?'",
      "hi": "Change the following sentence into Passive Voice: 'Who wrote this famous novel?'",
      "options": [
        "By whom this famous novel was written?",
        "By whom was this famous novel written?",
        "Whom was written this famous novel by?",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "By whom was this famous novel written?",
      "explanation": "In interrogative passive transformations starting with 'Who': 'Who' changes to 'By whom', followed immediately by the auxiliary verb 'was', the subject 'this famous novel', and the past participle 'written?'.",
      "tip": "Word order in interrogative passive: By whom + Auxiliary Verb + Subject + V3? Note that Option (A) incorrectly places the subject before the auxiliary verb."
    },
    {
      "id": 62,
      "source": "Direct & Indirect Speech",
      "en": "Transform into Indirect Speech: He said to me, 'Where are you going for your vacation?'",
      "hi": "Transform into Indirect Speech: He said to me, 'Where are you going for your vacation?'",
      "options": [
        "He asked me where was I going for my vacation.",
        "He asked me that where I was going for my vacation.",
        "He asked me where I was going for my vacation.",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "He asked me where I was going for my vacation.",
      "explanation": "In indirect reporting of Wh-questions: reporting verb becomes 'asked', no conjunction 'that' is used, and the inverted interrogative word order ('where are you going') reverts to assertive statement word order ('where I was going').",
      "tip": "Never use 'that' before Wh-question words (where, what, why) in indirect speech. The word order must be assertive: Wh-word + Subject + Verb."
    },
    {
      "id": 63,
      "source": "Conditionals & Tenses",
      "en": "Identify the grammatically correct sentence involving conditional clauses:",
      "hi": "Identify the grammatically correct sentence involving conditional clauses:",
      "options": [
        "If it will rain, we will cancel the match.",
        "If it rains, we will cancel the match.",
        "If it would rain, we will cancel the match.",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "If it rains, we will cancel the match.",
      "explanation": "In the First Conditional (real/probable future possibility), the conditional 'if-clause' takes the Simple Present tense ('If it rains'), while the main consequence clause takes the Simple Future tense ('we will cancel').",
      "tip": "Rule: Future tense modals ('will', 'shall') are never used inside the conditional 'if-clause' or time clauses ('when', 'as soon as')."
    },
    {
      "id": 64,
      "source": "Prepositions & Tenses",
      "en": "Choose the correct preposition to complete the sentence: 'He has been suffering from fever ______ Monday last.'",
      "hi": "Choose the correct preposition to complete the sentence: 'He has been suffering from fever ______ Monday last.'",
      "options": [
        "for",
        "since",
        "from",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "since",
      "explanation": "In Present Perfect Continuous tense, 'since' is used before a specific, definite point in time (e.g., 'Monday last', '7 o'clock', '1995'), whereas 'for' denotes an unanchored period/duration of time (e.g., 'for three days').",
      "tip": "Point in time = 'since' (since morning, since childhood, since Monday); Period/duration of time = 'for' (for two hours, for five days)."
    },
    {
      "id": 65,
      "source": "Subject-Verb Agreement",
      "en": "Select the correct option to fill in the blank: 'Neither the teacher nor the students ______ present in the auditorium.'",
      "hi": "Select the correct option to fill in the blank: 'Neither the teacher nor the students ______ present in the auditorium.'",
      "options": [
        "was",
        "were",
        "is",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "were",
      "explanation": "Under the Rule of Proximity for correlative conjunctions ('either...or', 'neither...nor', 'not only...but also'), the verb must agree in number and person with the closest subject. Here, the plural noun 'students' is nearest to the verb, requiring 'were'.",
      "tip": "Correlative conjunction verb agreement rule: Verb agrees with the subject closest to it. If the order were reversed ('Neither the students nor the teacher'), the verb would be singular ('was')."
    },
    {
      "id": 66,
      "source": "Clause Analysis",
      "en": "Identify the clause type of the underlined group of words: 'The girl who won the first prize in debate is my sister.'",
      "hi": "Identify the clause type of the underlined group of words: 'The girl who won the first prize in debate is my sister.'",
      "options": [
        "Noun Clause",
        "Adjective (Relative) Clause",
        "Adverb Clause of Reason",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Adjective (Relative) Clause",
      "explanation": "The subordinate clause 'who won the first prize in debate' immediately qualifies and describes the antecedent noun 'The girl', functioning as an Adjective Clause (or Defining Relative Clause).",
      "tip": "Clause identification: Answers 'who/what' = Noun Clause; Qualifies a preceding noun/pronoun = Adjective Clause; Modifies verb/tells time, reason, condition = Adverb Clause."
    },
    {
      "id": 67,
      "source": "Vocabulary (Antonyms)",
      "en": "What is the antonym of the word 'EPHEMERAL'?",
      "hi": "What is the antonym of the word 'EPHEMERAL'?",
      "options": [
        "Transient",
        "Fleeting",
        "Permanent",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Permanent",
      "explanation": "'Ephemeral' means lasting for a very short time, transient, or fleeting. Its direct antonym is 'Permanent' (everlasting or enduring).",
      "tip": "Watch out for synonym traps! 'Transient' and 'Fleeting' are synonyms of ephemeral; 'Permanent' and 'Eternal' are antonyms."
    },
    {
      "id": 68,
      "source": "Idioms & Phrases",
      "en": "What does the idiomatic expression 'Burn the midnight oil' mean?",
      "hi": "What does the idiomatic expression 'Burn the midnight oil' mean?",
      "options": [
        "To waste precious natural resources",
        "To work or study late into the night",
        "To create unnecessary trouble",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "To work or study late into the night",
      "explanation": "The idiom 'to burn the midnight oil' historically refers to staying awake and working or studying late into the night by the light of an oil lamp.",
      "tip": "Idioms related to study & labor: 'Burn the midnight oil' = study late; 'Hit the books' = begin studying; 'Leave no stone unturned' = make every possible effort."
    },
    {
      "id": 69,
      "source": "One-Word Substitution",
      "en": "A person who hates or distrusts all mankind is called a",
      "hi": "A person who hates or distrusts all mankind is called a",
      "options": [
        "Philanthropist",
        "Misogynist",
        "Misanthrope",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Misanthrope",
      "explanation": "A 'Misanthrope' (or misanthropist) is one who hates humanity. A 'Philanthropist' is a lover of mankind; a 'Misogynist' is a hater of women.",
      "tip": "Root words: Mis/Misein = to hate; Anthropos = mankind; Gyne = woman; Gamos = marriage (misogamist). Phil = to love (philanthropist)."
    },
    {
      "id": 70,
      "source": "Spelling Rules",
      "en": "Choose the correctly spelt word from the options below:",
      "hi": "Choose the correctly spelt word from the options below:",
      "options": [
        "Accommodation",
        "Acommodation",
        "Accomodation",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Accommodation",
      "explanation": "The correct orthographic spelling is 'Accommodation', featuring a double 'c' and a double 'm' (A-C-C-O-M-M-O-D-A-T-I-O-N).",
      "tip": "BPSC frequently tests double-consonant spelling words: Accommodation (double c, double m), Embarrassment (double r, double s), Committee (double m, double t, double e)."
    },
    {
      "id": 71,
      "source": "English Phonetics",
      "en": "In English phonetics and phonology, the total number of distinctive speech sounds (phonemes) in Received Pronunciation (RP) is",
      "hi": "In English phonetics and phonology, the total number of distinctive speech sounds (phonemes) in Received Pronunciation (RP) is",
      "options": [
        "26 phonemes",
        "44 phonemes",
        "48 phonemes",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "44 phonemes",
      "explanation": "Standard British English (RP) contains 44 phonemes produced by the 26 letters of the alphabet, consisting of 24 consonant sounds and 20 vowel sounds (12 pure monophthongs and 8 diphthongs).",
      "tip": "IPA Chart for English: 44 sounds total = 24 Consonants + 20 Vowels (12 Monophthongs/pure vowels + 8 Diphthongs/gliding vowels)."
    },
    {
      "id": 72,
      "source": "Phonetics & Phonology",
      "en": "How many pure vowel sounds (monophthongs) and diphthongs are there in English?",
      "hi": "How many pure vowel sounds (monophthongs) and diphthongs are there in English?",
      "options": [
        "12 pure vowels and 8 diphthongs",
        "10 pure vowels and 10 diphthongs",
        "14 pure vowels and 6 diphthongs",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "12 pure vowels and 8 diphthongs",
      "explanation": "The 20 English vowel phonemes are divided into 12 monophthongs (single, unchanging vowel sounds like /iː/, /ɪ/, /e/, /æ/, etc.) and 8 diphthongs (gliding sounds like /eɪ/, /aɪ/, /ɔɪ/, /aʊ/, /əʊ/, /ɪə/, /eə/, /ʊə/).",
      "tip": "Pure vowel = Monophthong (12); Gliding vowel = Diphthong (8); Combined vowel system = 20 vowel phonemes."
    },
    {
      "id": 73,
      "source": "Linguistics & Morphology",
      "en": "The minimal meaningful grammatical unit in the grammatical system of a language is termed a",
      "hi": "The minimal meaningful grammatical unit in the grammatical system of a language is termed a",
      "options": [
        "Phoneme",
        "Morpheme",
        "Grapheme",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Morpheme",
      "explanation": "A Morpheme is the smallest unit of language that carries grammatical meaning or function (e.g., 'un-', 'break', '-able' in 'unbreakable'). Phoneme is the smallest unit of sound, and Grapheme is the smallest unit of writing/letter.",
      "tip": "Linguistic units: Smallest unit of sound = Phoneme; Smallest unit of meaning = Morpheme; Smallest unit of written script = Grapheme."
    },
    {
      "id": 74,
      "source": "Linguistics & Syntax",
      "en": "Who introduced the influential concept of 'Universal Grammar' and 'Language Acquisition Device' (LAD) in Generative Linguistics?",
      "hi": "Who introduced the influential concept of 'Universal Grammar' and 'Language Acquisition Device' (LAD) in Generative Linguistics?",
      "options": [
        "Ferdinand de Saussure",
        "Noam Chomsky",
        "B. F. Skinner",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Noam Chomsky",
      "explanation": "Noam Chomsky in Syntactic Structures (1957) and Aspects of the Theory of Syntax (1965) challenged Skinner's behaviorist theory, positing that human children possess an innate biological Language Acquisition Device (LAD) programmed with Universal Grammar.",
      "tip": "Chomsky = Nativist theory (innate LAD, Universal Grammar, Competence vs. Performance); Saussure = Structuralism (Langue vs. Parole, Signifier vs. Signified)."
    },
    {
      "id": 75,
      "source": "English Language Teaching (ELT)",
      "en": "Which traditional language teaching method relies heavily on translating literary passages into the mother tongue and memorizing bilingual vocabulary lists and explicit grammar rules?",
      "hi": "Which traditional language teaching method relies heavily on translating literary passages into the mother tongue and memorizing bilingual vocabulary lists and explicit grammar rules?",
      "options": [
        "Direct Method",
        "Grammar-Translation Method (GTM)",
        "Audio-Lingual Method (ALM)",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Grammar-Translation Method (GTM)",
      "explanation": "The Grammar-Translation Method (GTM), historically known as the Prussian or Classical Method, emphasizes reading and writing skills through deductive teaching of grammar rules and word-for-word translation into the learner's L1, with little to no oral practice.",
      "tip": "ELT Methods: GTM = mother tongue translation & deductive grammar; Direct Method = target language only, no translation; Audio-Lingual = habit formation & drills; CLT = communicative competence."
    },
    {
      "id": 76,
      "source": "ELT Methodologies",
      "en": "The Direct Method of teaching English was developed as a direct reaction against the shortcomings of which method?",
      "hi": "The Direct Method of teaching English was developed as a direct reaction against the shortcomings of which method?",
      "options": [
        "Audio-Lingual Method",
        "Grammar-Translation Method",
        "Bilingual Method",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Grammar-Translation Method",
      "explanation": "The Direct Method (or Natural Method) arose in the late 19th century in reaction against GTM's neglect of spoken communication. It strictly bans the use of the native language (L1), teaching meaning through direct association, visual demonstration, and immersion in English.",
      "tip": "Direct Method rule: Never translate, never use mother tongue, demonstrate and act out meaning directly in the target language."
    },
    {
      "id": 77,
      "source": "Language Pedagogy",
      "en": "Who invented the 'Bilingual Method' of foreign language teaching as a middle path between GTM and the Direct Method?",
      "hi": "Who invented the 'Bilingual Method' of foreign language teaching as a middle path between GTM and the Direct Method?",
      "options": [
        "H. E. Palmer",
        "C. J. Dodson",
        "Michael West",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "C. J. Dodson",
      "explanation": "C. J. Dodson of the University of Wales formulated the Bilingual Method in the 1960s. It allows the teacher (and only the teacher) to use the mother tongue (L1) sparingly to explain difficult concepts, eliminating the rigidity of the Direct Method while ensuring maximum communicative practice.",
      "tip": "Bilingual Method key rule: Only the teacher is permitted to use the mother tongue to convey meaning; students practice strictly in the target language (L2)."
    },
    {
      "id": 78,
      "source": "Modern ELT Approaches",
      "en": "In modern English language pedagogy, what does the acronym 'CLT' stand for?",
      "hi": "In modern English language pedagogy, what does the acronym 'CLT' stand for?",
      "options": [
        "Cognitive Language Training",
        "Communicative Language Teaching",
        "Comprehensive Literacy Testing",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Communicative Language Teaching",
      "explanation": "CLT stands for Communicative Language Teaching, an approach that focuses on developing learners' 'communicative competence' (Dell Hymes) through meaningful real-world interaction, task-based communication, and fluency, rather than grammatical accuracy alone.",
      "tip": "CLT core principles: Learner-centered, authentic materials, role-plays, fluency over mechanical accuracy, communicative competence as the ultimate goal."
    },
    {
      "id": 79,
      "source": "Assessment & Evaluation",
      "en": "In language testing and evaluation, a test is defined as 'reliable' if it",
      "hi": "In language testing and evaluation, a test is defined as 'reliable' if it",
      "options": [
        "measures precisely what it purports to measure",
        "produces consistent, stable results upon repeated administrations under identical conditions",
        "is easy, cost-effective, and practical to administer and score",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "produces consistent, stable results upon repeated administrations under identical conditions",
      "explanation": "Reliability in testing denotes consistency and stability of scores across repeated test administrations. In contrast, 'Validity' means measuring what the test intends to measure, and 'Usability/Practicability' refers to ease of administration and scoring.",
      "tip": "Testing standards: Measures what it claims to measure = Validity; Yields consistent scores across occasions = Reliability; Feasible in time/money = Usability."
    },
    {
      "id": 80,
      "source": "Four Language Skills (LSRW)",
      "en": "Which basic language skills are classified as 'Receptive' (passive) skills in language acquisition?",
      "hi": "Which basic language skills are classified as 'Receptive' (passive) skills in language acquisition?",
      "options": [
        "Speaking and Writing",
        "Listening and Reading",
        "Listening and Speaking",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Listening and Reading",
      "explanation": "The four fundamental language skills (LSRW) are grouped into Receptive (or Input/Passive) skills: Listening and Reading (where learners receive and decode language); and Productive (or Output/Active) skills: Speaking and Writing.",
      "tip": "Four Skills Matrix: Receptive/Input = Listening & Reading; Productive/Output = Speaking & Writing. Natural acquisition order: L -> S -> R -> W.\nMASTER ANSWER KEY SUMMARY — PART-III ENGLISH (Q.1 TO Q.80)\nQ. No.\nDomain / Subject Area\nCore Literary / Linguistic Concept\nOfficial Key"
    }
  ],
  "bpsc-tre4-general-studies-40q": [
    {
      "id": 1,
      "source": "BPSC TRE 2.0 (Middle School) | Indian National Movement / Bihar History",
      "en": "Who led the 1857 Revolt in Bihar?",
      "hi": "1857 के विद्रोह के नेता बिहार में कौन थे?",
      "options": [
        "Mir Bakhsh",
        "Babu Kunwar Singh",
        "Birbhan Singh",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Babu Kunwar Singh",
      "explanation": "Babu Kunwar Singh of Jagdishpur (Bhojpur district) spearheaded the 1857 revolt in Bihar, leading armed resistance across Arrah, Patna, and Azamgarh until his death in April 1858.",
      "tip": "Kunwar Singh is BPSC's most frequently tested freedom fighter; remember his brother Amar Singh led the rebellion after him in Kaimur hills."
    },
    {
      "id": 2,
      "source": "BPSC TRE 2.0 (Middle School) | Indian National Movement",
      "en": "Which important event took place on 5th March, 1931?",
      "hi": "5 मार्च, 1931 को कौन-सी महत्त्वपूर्ण घटना घटी?",
      "options": [
        "Gandhi-Irwin Pact",
        "Gandhi attended the Round Table Conference",
        "Karachi Congress",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Gandhi-Irwin Pact",
      "explanation": "The historic Gandhi-Irwin Pact (also known as the Delhi Pact) was signed on 5th March 1931 between Mahatma Gandhi and Viceroy Lord Irwin, leading to the suspension of the Civil Disobedience Movement.",
      "tip": "Chronology trap: Gandhi-Irwin Pact (5 March 1931) -> Execution of Bhagat Singh, Sukhdev & Rajguru (23 March 1931) -> Karachi Congress Session (26-31 March 1931)."
    },
    {
      "id": 3,
      "source": "BPSC TRE 2.0 (Middle School) | Indian National Movement",
      "en": "When was the Poona Pact signed?",
      "hi": "पूना समझौता कब हस्ताक्षरित हुआ था?",
      "options": [
        "24th September, 1932",
        "24th September, 1930",
        "26th September, 1930",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "24th September, 1932",
      "explanation": "The Poona Pact was signed on 24th September 1932 at Yerwada Central Jail, Pune, between Dr. B.R. Ambedkar and Madan Mohan Malaviya (representing caste Hindus) to abandon separate electorates for depressed classes.",
      "tip": "BPSC often tests exact dates for major pacts; remember Poona Pact followed Ramsay MacDonald's Communal Award of August 1932."
    },
    {
      "id": 4,
      "source": "BPSC TRE 2.0 (Middle School) | National Movement & Slogans",
      "en": "Who gave the famous slogan 'Inquilab Zindabad'?",
      "hi": "'इंकलाब ज़िन्दाबाद' का प्रसिद्ध नारा किसने दिया था?",
      "options": [
        "Hakim Ajmal Khan",
        "Chandra Shekhar Azad",
        "Hasrat Mohani",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Hasrat Mohani",
      "explanation": "The slogan 'Inquilab Zindabad' was originally coined in 1921 by the Urdu poet and freedom fighter Maulana Hasrat Mohani. It was later popularized throughout India by Bhagat Singh.",
      "tip": "BPSC official key strictly credits the creation/coining of 'Inquilab Zindabad' to Maulana Hasrat Mohani."
    },
    {
      "id": 5,
      "source": "BPSC TRE 2.0 (Middle School) | General Science: Physics / Chemistry",
      "en": "In nuclear reactors, D2O is used as",
      "hi": "नाभिकीय रिएक्टरों में D2O का उपयोग होता है",
      "options": [
        "fuel",
        "source of deuterons",
        "moderator",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "moderator",
      "explanation": "Heavy water (D2O / Deuterium oxide) functions as a moderator in thermal nuclear reactors to slow down fast neutrons to thermal velocities for sustaining chain fission.",
      "tip": "Moderator = slows down neutrons (D2O, Graphite); Control rods = absorb excess neutrons (Cadmium, Boron)."
    },
    {
      "id": 6,
      "source": "BPSC TRE 2.0 (Middle School) | General Science: Biology",
      "en": "The study of inheritance from one generation to another is known as",
      "hi": "एक पीढ़ी से दूसरी पीढ़ी में वंशागति के अध्ययन को कहते हैं",
      "options": [
        "genetics",
        "microbiology",
        "cytology",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "genetics",
      "explanation": "Genetics is the biological branch dealing with the principles of heredity and the variation of inherited characteristics from parents to offspring.",
      "tip": "Father of Genetics = Gregor Johann Mendel; Cytology = study of cells; Microbiology = study of microorganisms."
    },
    {
      "id": 7,
      "source": "BPSC TRE 2.0 (Middle School) | General Science: Biology",
      "en": "Lacteals are concerned with",
      "hi": "लैक्टियल्स संबंधित हैं",
      "options": [
        "production of milk",
        "secretion of lactic acid",
        "absorption of fats",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "absorption of fats",
      "explanation": "Lacteals are specialized lymphatic capillaries located inside the intestinal villi that absorb dietary dietary lipids and fat-soluble vitamins.",
      "tip": "Do not confuse 'lacteal' with lactation or milk production; in digestive physiology, lacteals exclusively absorb emulsified fats."
    },
    {
      "id": 8,
      "source": "BPSC TRE 2.0 (Middle School) | General Science: Biology",
      "en": "The enzyme which is mixed with food in our mouth is",
      "hi": "वह एंजाइम, जो हमारे मुँह में भोजन के साथ मिलता है, है",
      "options": [
        "pepsin",
        "peroxidase",
        "amylase",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "amylase",
      "explanation": "Salivary amylase (ptyalin) is secreted by the salivary glands in the buccal cavity, initiating the breakdown of dietary starch into maltose.",
      "tip": "Pepsin acts in the stomach in an acidic medium; Amylase acts in the mouth at near-neutral pH (6.8)."
    },
    {
      "id": 9,
      "source": "BPSC TRE 2.0 (Middle School) | General Science: Chemistry",
      "en": "Al2O3 . 2SiO2 . 2H2O is the chemical formula for",
      "hi": "Al2O3 . 2SiO2 . 2H2O रासायनिक सूत्र है",
      "options": [
        "monazite",
        "china clay",
        "sand",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "china clay",
      "explanation": "Hydrated aluminium silicate (Al2O3 . 2SiO2 . 2H2O) is the mineral kaolinite, commonly known in commerce as china clay.",
      "tip": "Sand = SiO2 (Silica); Bauxite = Al2O3 . 2H2O; China Clay (Kaolin) includes the silicate component 2SiO2."
    },
    {
      "id": 10,
      "source": "BPSC TRE 2.0 (Middle School) | General Science: Botany",
      "en": "Which pigment is essential for nitrogen fixation by leguminous plants?",
      "hi": "दलहनी पौधों में नाइट्रोजन स्थिरीकरण के लिए कौन-सा वर्णक आवश्यक है?",
      "options": [
        "Anthocyanin",
        "Leghaemoglobin",
        "Phycocyanin",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Leghaemoglobin",
      "explanation": "Leghaemoglobin acts as an oxygen scavenger in the root nodules of legumes, protecting the oxygen-sensitive nitrogenase enzyme during biological nitrogen fixation.",
      "tip": "Nitrogenase requires strictly anaerobic conditions; the pinkish-red pigment leghaemoglobin absorbs free oxygen."
    },
    {
      "id": 11,
      "source": "BPSC TRE 2.0 (Middle School) | Elementary Mathematics",
      "en": "How many prime numbers are there between 1 and 50?",
      "hi": "1 और 50 के बीच कितनी अभाज्य संख्याएँ हैं?",
      "options": [
        "10",
        "15",
        "21",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "15",
      "explanation": "The prime numbers between 1 and 50 are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, making exactly 15 prime numbers.",
      "tip": "Standard prime counts to memorize: 1 to 50 = 15 primes; 51 to 100 = 10 primes; total 1 to 100 = 25 primes."
    },
    {
      "id": 12,
      "source": "BPSC TRE 2.0 (Middle School) | Elementary Mathematics / Algebra",
      "en": "In a shop, the cost of 2 pencils and 3 erasers is Rs 9 and the cost of 4 pencils and 6 erasers is Rs 18. What is the cost of each pencil and each eraser?",
      "hi": "एक दुकान में 2 पेंसिल और 3 रबर की कीमत ₹9 तथा 4 पेंसिल और 6 रबर की कीमत ₹18 है। प्रत्येक पेंसिल और प्रत्येक रबर की कीमत क्या है?",
      "options": [
        "Cost of each pencil is Rs 1 and each eraser is Rs 2",
        "Cost of each pencil is Rs 2 and each eraser is Rs 1",
        "Cost of each pencil is Rs 3 and each eraser is Rs 1",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "None of the above",
      "explanation": "The system has ratios a1/a2 = 2/4 = 1/2, b1/b2 = 3/6 = 1/2, c1/c2 = 9/18 = 1/2. Because lines coincide, infinite pairs exist, so unique prices cannot be determined.",
      "tip": "When two linear equations are exact multiples of each other, they represent dependent coincident lines with infinite solutions; choose Option (E)."
    },
    {
      "id": 13,
      "source": "BPSC TRE 2.0 (Middle School) | Indian National Movement: Literature",
      "en": "Who wrote the book 'India Divided'?",
      "hi": "'इंडिया डिवाइडेड' नामक पुस्तक किसने लिखी थी?",
      "options": [
        "B. G. Tilak",
        "Rajendra Prasad",
        "Penderel Moon",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Rajendra Prasad",
      "explanation": "Dr. Rajendra Prasad wrote 'India Divided' in 1946 while imprisoned during the Quit India movement, critically examining the communal question and the Pakistan scheme.",
      "tip": "BPSC loves books written by Bihar leaders: 'India Divided' and 'Atmakatha' were authored by Dr. Rajendra Prasad."
    },
    {
      "id": 14,
      "source": "BPSC TRE 2.0 (Middle School) | National Movement: Literature & Peasant Struggles",
      "en": "Who wrote the play 'Neel Darpan' describing the plight of the Indigo cultivators of Bengal and Bihar?",
      "hi": "बंगाल एवं बिहार के नील उत्पादक किसानों की दुर्दशा दर्शाने वाले नाटक 'नील दर्पण' के लेखक कौन हैं?",
      "options": [
        "Mahatma Gandhi",
        "Acharya Kripalani",
        "Dinabandhu Mitra",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Dinabandhu Mitra",
      "explanation": "Dinabandhu Mitra authored the Bengali play 'Neel Darpan' (The Mirror of Indigo) in 1858-59, powerfully exposing the British planters' exploitation during the Indigo Revolt.",
      "tip": "Remember: The English translation of Neel Darpan was published by Rev. James Long and translated by Michael Madhusudan Dutt."
    },
    {
      "id": 15,
      "source": "BPSC TRE 2.0 (Middle School) | Bihar History: Revolutionary Nationalism",
      "en": "Who established the branch of Anushilan Samiti at Patna in 1913?",
      "hi": "1913 में पटना में अनुशीलन समिति की एक शाखा किसने स्थापित की थी?",
      "options": [
        "Sachindra Nath Sanyal",
        "Bankim Chandra Mitra",
        "Raghubir Singh",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Sachindra Nath Sanyal",
      "explanation": "Revolutionary leader Sachindra Nath Sanyal founded the Patna branch of the Anushilan Samiti in 1913 to propagate revolutionary nationalism among Bihari youth.",
      "tip": "Sachindra Nath Sanyal was also the author of 'Bandi Jeevan' (the Bible of Indian revolutionaries) and co-founder of HRA."
    },
    {
      "id": 16,
      "source": "BPSC TRE 2.0 (Middle School / TGT) | Indian National Congress Sessions",
      "en": "Gaya Session of Indian National Congress was held in which year?",
      "hi": "भारतीय राष्ट्रीय काँग्रेस का गया अधिवेशन किस वर्ष आयोजित हुआ था?",
      "options": [
        "1922",
        "1933",
        "1946",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "1922",
      "explanation": "The 37th session of the Indian National Congress was held in Gaya (Bihar) in December 1922 under the presidency of Deshbandhu Chittaranjan Das.",
      "tip": "Three INC Sessions in Bihar: 1912 Bankipore (Patna) under R.N. Mudholkar; 1922 Gaya under C.R. Das; 1940 Ramgarh under Abul Kalam Azad."
    },
    {
      "id": 17,
      "source": "BPSC TRE 2.0 (Senior Secondary / Secondary) | General Science: Chemistry",
      "en": "The cans in which food is packed are coated with tin and not zinc because",
      "hi": "खाद्य पदार्थों के डिब्बों पर टिन की परत चढ़ाई जाती है, जिंक की नहीं, क्योंकि",
      "options": [
        "tin is more reactive than zinc",
        "zinc is more reactive than tin",
        "zinc is costlier than tin",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "zinc is more reactive than tin",
      "explanation": "In the chemical reactivity series, Zinc is more electropositive and reactive than Tin; zinc would react with food organic acids to produce toxic compounds.",
      "tip": "Electrochemical reactivity series position: Zn > Fe > Sn > Pb. Tin is less reactive and safely prevents food spoilage."
    },
    {
      "id": 18,
      "source": "BPSC TRE 2.0 (Senior Secondary / Secondary) | General Science: Biology",
      "en": "The process in which atmospheric carbon dioxide is converted into carbohydrates during photosynthesis is",
      "hi": "वह प्रक्रिया, जिसमें प्रकाश-संश्लेषण के दौरान वायुमण्डलीय कार्बन डाइऑक्साइड को कार्बोहाइड्रेट में परिवर्तित किया जाता है, है",
      "options": [
        "oxidation",
        "reduction",
        "hydrolysis",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "reduction",
      "explanation": "During the dark reactions (Calvin cycle) of photosynthesis, CO2 molecules gain hydrogen atoms and electrons to form carbohydrates, which is chemically a reduction process.",
      "tip": "Photosynthesis is overall a redox process: Water (H2O) is oxidized to oxygen, and Carbon Dioxide (CO2) is reduced to glucose."
    },
    {
      "id": 19,
      "source": "BPSC TRE 2.0 (Senior Secondary / Secondary) | General Science: Human Biology & Disease",
      "en": "Trachoma disease is related to",
      "hi": "ट्रैकोमा रोग का सम्बन्ध है",
      "options": [
        "lungs",
        "ears",
        "eyes",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "eyes",
      "explanation": "Trachoma is a contagious bacterial eye infection caused by Chlamydia trachomatis, leading to roughening of the inner eyelids and potential blindness.",
      "tip": "Eye diseases frequently asked in BPSC: Trachoma, Cataract, Glaucoma, Conjunctivitis, and Astigmatism."
    },
    {
      "id": 20,
      "source": "BPSC TRE 2.0 (Senior Secondary / Secondary) | General Science: Physics",
      "en": "Which of the following makes use of Newton's third law of motion?",
      "hi": "निम्नलिखित में से कौन-सा न्यूटन के गति के तीसरे नियम का उपयोग करता है?",
      "options": [
        "Archery",
        "Space rocket",
        "Venturimeter",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "More than one of the above",
      "explanation": "Both Archery (bow pushing arrow forward while arrow pushes back on string) and Space rocket propulsion (exhaust gases ejected backward exert forward thrust) operate on action-reaction.",
      "tip": "Whenever at least two options are technically correct in BPSC, always mark Option (D) 'More than one of the above'."
    },
    {
      "id": 21,
      "source": "BPSC TRE 2.0 (Senior Secondary / Secondary) | Indian National Movement",
      "en": "The Partition of Bengal was made effective on",
      "hi": "बंगाल विभाजन किस तिथि को प्रभावी हुआ था?",
      "options": [
        "14 October, 1905",
        "15 October, 1905",
        "16 October, 1905",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "16 October, 1905",
      "explanation": "Lord Curzon announced the partition earlier, but it officially came into effect on 16th October 1905, observed across Bengal as a day of national mourning and Raksha Bandhan.",
      "tip": "Date sequence: 20 July 1905 (Partition announced) -> 7 August 1905 (Boycott resolution at Calcutta Town Hall) -> 16 October 1905 (Partition enforced)."
    },
    {
      "id": 22,
      "source": "BPSC TRE 2.0 (Senior Secondary / Secondary) | Indian National Movement",
      "en": "The Quit India Resolution was adopted by the Congress in Bombay on",
      "hi": "काँग्रेस द्वारा बम्बई में भारत छोड़ो प्रस्ताव कब पारित किया गया था?",
      "options": [
        "7 August, 1942",
        "8 August, 1942",
        "9 August, 1942",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "8 August, 1942",
      "explanation": "The All-India Congress Committee officially ratified and adopted the historic 'Quit India' resolution on 8th August 1942 at Gowalia Tank Maidan, Bombay.",
      "tip": "8 August 1942 = Resolution passed & 'Do or Die' call; 9 August 1942 = 'Operation Zero Hour' launched by British arresting top leaders."
    },
    {
      "id": 23,
      "source": "BPSC TRE 2.0 (Senior Secondary / Secondary) | Modern Indian History",
      "en": "Queen Victoria's Proclamation was issued on which of the following dates?",
      "hi": "महारानी विक्टोरिया की उद्घोषणा निम्नलिखित में से किस तिथि को जारी की गई थी?",
      "options": [
        "1 November, 1857",
        "27 March, 1858",
        "1 November, 1858",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "1 November, 1858",
      "explanation": "Lord Canning read out Queen Victoria's historic Proclamation at a grand Darbar in Allahabad on 1st November 1858, transferring governance from the East India Company to the British Crown.",
      "tip": "1 November 1858 at Allahabad Darbar: Canning became the first Viceroy of India, ending East India Company rule."
    },
    {
      "id": 24,
      "source": "BPSC TRE 2.0 (Senior Secondary / Secondary) | Modern Indian History: Personalities",
      "en": "Who among the following became India's unofficial Ambassador to England?",
      "hi": "निम्नलिखित में से कौन इंग्लैंड में भारत के अनौपचारिक राजदूत बने थे?",
      "options": [
        "Surendranath Banerjee",
        "Dadabhai Naoroji",
        "Swami Vivekananda",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Dadabhai Naoroji",
      "explanation": "Dadabhai Naoroji ('Grand Old Man of India') spent decades in London campaigning for Indian rights, founded the East India Association, and became known as the 'Unofficial Ambassador of India'.",
      "tip": "Dadabhai Naoroji was also the first Indian elected to the British House of Commons (Finsbury Central, 1892) and propounded the 'Drain of Wealth' theory."
    },
    {
      "id": 25,
      "source": "BPSC TRE 2.0 (Senior Secondary / Secondary) | Constitutional Development / Freedom Movement",
      "en": "Who described the Government of India Act, 1935 as a 'Charter of Slavery'?",
      "hi": "भारत शासन अधिनियम, 1935 को किसने 'गुलामी का अधिकार-पत्र' कहा था?",
      "options": [
        "Mahatma Gandhi",
        "Netaji Subhas Chandra Bose",
        "Maulana Hasrat Mohani",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "None of the above",
      "explanation": "Pandit Jawaharlal Nehru characterized the Government of India Act 1935 as a 'new charter of slavery' and a machine with 'all brakes, but no engine'. Because Nehru is not in (A), (B), or (C), (E) is correct.",
      "tip": "Classic BPSC trap: High-profile historical quotes often have the author missing from options (A, B, C) to test your confidence in Option (E)."
    },
    {
      "id": 26,
      "source": "BPSC TRE 2.0 (TGT / Middle School) | Indian National Movement: INA",
      "en": "Who was the founder of 'Indian National Army (INA)'?('",
      "hi": "इंडियन नेशनल आर्मी (INA)' के संस्थापक कौन थे?)",
      "options": [
        "Subhash Chandra Bose",
        "Mohan Singh",
        "Lala Lajpat Rai",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Mohan Singh",
      "explanation": "Captain Mohan Singh, a British Indian Army officer captured by Japanese forces in Malaya, originally conceived and established the First INA in 1942. Subhash Chandra Bose took over leadership in 1943.",
      "tip": "Founder = Mohan Singh (with Rash Behari Bose); Supreme Commander / Reviver = Netaji Subhas Chandra Bose."
    },
    {
      "id": 27,
      "source": "BPSC TRE 2.0 (TGT / Middle School) | Modern Indian History: Literature",
      "en": "Which revolt is mentioned in Bankim Chandra Chatterjee's novel, 'Anandamath'?",
      "hi": "बंकिम चन्द्र चटर्जी के उपन्यास 'आनंदमठ' में किस विद्रोह का उल्लेख है?",
      "options": [
        "Sannyasi",
        "Pagalpanthi",
        "Indigo",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Sannyasi",
      "explanation": "Bankim Chandra Chatterjee's famous novel 'Anandamath' (1882) is set against the backdrop of the Bengal Famine of 1770 and the Sannyasi Rebellion (1763–1800).",
      "tip": "India's national song 'Vande Mataram' was originally composed by Bankim Chandra Chatterjee and included in this very novel 'Anandamath'."
    },
    {
      "id": 28,
      "source": "BPSC TRE 2.0 (TGT / Middle School) | Indian National Movement",
      "en": "When were 'Swadeshi' and 'Boycott' first adopted as forms of struggle in India?",
      "hi": "प्रथम बार संघर्ष के तरीकों के रूप में 'स्वदेशी' एवं 'बहिष्कार' भारत में कब अपनाया गया?",
      "options": [
        "Partition of Bengal",
        "Home Rule Movement",
        "Non-Cooperation Movement",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Partition of Bengal",
      "explanation": "The methods of Swadeshi (indigenous goods) and Boycott (of foreign cloth and goods) were formally adopted nationwide for the first time during the anti-Partition of Bengal agitation in 1905.",
      "tip": "Swadeshi & Boycott originated in 1905 (Swadeshi Movement); Non-Cooperation in 1920 scaled it up to include boycott of schools, courts, and titles."
    },
    {
      "id": 29,
      "source": "BPSC TRE 2.0 (TGT / Middle School) | Bihar History: Peasant Movements",
      "en": "Who led the peasants of Bihar during the Non-Cooperation Movement?",
      "hi": "असहयोग आन्दोलन के दौरान किसने बिहार में किसानों की अगुवाई की?",
      "options": [
        "Raj Kumar Shukla",
        "Swami Vidyanand",
        "Rajendra Prasad",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Swami Vidyanand",
      "explanation": "Swami Vidyanand led the militant peasant agitation in North Bihar (especially Darbhanga Raj estates) during the Non-Cooperation Movement in 1919–1922.",
      "tip": "Differentiate clearly: 1917 Champaran = Raj Kumar Shukla; 1919-22 Non-Cooperation peasants = Swami Vidyanand; 1929-36 Kisan Sabha = Swami Sahajanand Saraswati."
    },
    {
      "id": 30,
      "source": "BPSC TRE 2.0 (TGT / Middle School) | Social & Cultural Reform / Education",
      "en": "Who founded Hindu College at Calcutta in 1817?",
      "hi": "1817 में कलकत्ता में हिन्दू कॉलेज की स्थापना किसने की थी?",
      "options": [
        "Henry Vivian Derozio",
        "David Hare",
        "Jonathan Duncan",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "David Hare",
      "explanation": "Scottish watchmaker and philanthropist David Hare, in close collaboration with Raja Ram Mohan Roy and Radhakanta Deb, established Hindu College in Calcutta in 1817.",
      "tip": "Jonathan Duncan founded Sanskrit College at Varanasi (1791); Derozio was a teacher at Hindu College who started the Young Bengal Movement."
    },
    {
      "id": 31,
      "source": "BPSC TRE 2.0 (TGT / Middle School) | British Colonial Policy / Congress",
      "en": "Who among the following said that 'Congress is tottering to its fall and one of my great ambitions while in India is to assist it to a peaceful demise'?",
      "hi": "इनमें से किसने कहा था कि 'काँग्रेस का महल लड़खड़ा रहा है और भारत में रहते हुए मेरी एक बड़ी महत्त्वाकांक्षा यह है कि मैं शान्ति के साथ इसे मरने में सहयोग दे सकूँ'?",
      "options": [
        "Dufferin",
        "Minto",
        "Curzon",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Curzon",
      "explanation": "Viceroy Lord Curzon wrote this famous hostile statement in a letter to the Secretary of State for India, Lord George Hamilton, in 1900.",
      "tip": "Dufferin called Congress a 'microscopic minority'; Curzon declared his ambition to assist in its 'peaceful demise'."
    },
    {
      "id": 32,
      "source": "BPSC TRE 2.0 (TGT Science / Middle School) | General Science: Physics / Optics",
      "en": "Monochromatic light enters from one medium to the other. Which one of the following properties does not change?",
      "hi": "एकवर्णी प्रकाश एक माध्यम से दूसरे माध्यम में प्रवेश करता है। निम्नलिखित में से कौन-सा गुण नहीं बदलता है?",
      "options": [
        "Frequency",
        "Amplitude",
        "Velocity",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Frequency",
      "explanation": "Frequency is a characteristic property determined solely by the source of radiation; hence, upon refraction across media, frequency remains constant while velocity and wavelength change.",
      "tip": "Refraction rule: Frequency (f) remains invariant; Velocity (v) and Wavelength (λ) change proportionally (v = fλ)."
    },
    {
      "id": 33,
      "source": "BPSC TRE 2.0 (Middle School) | Environmental Science: Pollution",
      "en": "Which of the following gases is considered as atmospheric pollutant?",
      "hi": "निम्नलिखित में से कौन-सी गैस वायुमण्डलीय प्रदूषक मानी जाती है?",
      "options": [
        "Argon",
        "Oxygen",
        "Sulpher dioxide",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Sulpher dioxide",
      "explanation": "Sulphur dioxide (SO2), released primarily by fossil fuel combustion and smelters, is a toxic primary pollutant responsible for respiratory ailments and acid rain.",
      "tip": "Nitrogen, Oxygen, and Argon constitute 99.9% of clean dry air; SO2, CO, and NOx are major atmospheric pollutants."
    },
    {
      "id": 34,
      "source": "BPSC TRE 2.0 (Middle School) | General Science: Physics / Radiation",
      "en": "Which of the following is not electromagnetic?",
      "hi": "निम्नलिखित में से कौन-सा विद्युत्-चुम्बकीय नहीं है?",
      "options": [
        "Gamma rays",
        "Alpha rays",
        "X-rays",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Alpha rays",
      "explanation": "Alpha particles are particulate matter consisting of helium nuclei (2 protons + 2 neutrons), carrying charge +2e, whereas Gamma and X-rays are electromagnetic waves.",
      "tip": "Electromagnetic: Radiowaves, Microwaves, Infrared, Visible, Ultraviolet, X-rays, Gamma rays. Particulate radiation: Alpha rays, Beta rays, Cathode rays."
    },
    {
      "id": 35,
      "source": "BPSC TRE 1.0 (PRT Class 1-5) | General Science: Physics",
      "en": "The electric fuse works on the",
      "hi": "विद्युत फ्यूज कार्य करता है",
      "options": [
        "Chemical effect of current",
        "Magnetic effect of current",
        "Heating effect of current",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Heating effect of current",
      "explanation": "An electric fuse operates on Joule's heating effect (H = I^2 R t); when excessive current flows, excessive heat melts the low-melting-point fuse wire, breaking the circuit.",
      "tip": "Fuse wire characteristics: High resistance and Low melting point (typically made of Tin-Lead alloy)."
    },
    {
      "id": 36,
      "source": "BPSC TRE 1.0 (PRT Class 1-5) | Bihar History: Peasant Leadership",
      "en": "Who was the militant peasant leader of Bihar?",
      "hi": "बिहार के जुझारू किसान नेता कौन थे?",
      "options": [
        "Raj Kumar Shukla",
        "Swami Sahajanand Saraswati",
        "Rajendra Prasad",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Swami Sahajanand Saraswati",
      "explanation": "Swami Sahajanand Saraswati founded the Bihar Provincial Kisan Sabha (1929) and All India Kisan Sabha (1936), leading militant agrarian struggles against the Zamindari system.",
      "tip": "Swami Sahajanand's journal was 'Hunkar', and his central ashram was at Bihta near Patna."
    },
    {
      "id": 37,
      "source": "BPSC TRE 1.0 (PRT Class 1-5) | Environment & Ecology",
      "en": "The major and top source of oxygen in the atmosphere is",
      "hi": "वायुमण्डल में ऑक्सीजन का सबसे प्रमुख और शीर्ष स्रोत है",
      "options": [
        "Photosynthesis by forest plants",
        "Photosynthesis by oceanic plants",
        "Photosynthesis by grassland ecosystem",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Photosynthesis by oceanic plants",
      "explanation": "Marine phytoplankton and oceanic photosynthetic organisms produce between 50% to 70% of the Earth's atmospheric oxygen, exceeding terrestrial forests.",
      "tip": "Do not select 'forest plants' (Option A); oceans and their marine microalgae produce more than half the globe's atmospheric oxygen."
    },
    {
      "id": 38,
      "source": "BPSC TRE 1.0 (PRT Class 1-5) | General Science: Botany",
      "en": "Which one of the following is a plant hormone?",
      "hi": "निम्नलिखित में से कौन-सा एक पादप हॉर्मोन है?",
      "options": [
        "Cytokinin",
        "Insulin",
        "Oestrogen",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Cytokinin",
      "explanation": "Cytokinin is a vital phytohormone that promotes rapid cell division, shoot proliferation, and delays leaf senescence. Insulin and Oestrogen are animal/human hormones.",
      "tip": "Major Plant Hormones: Auxin, Gibberellin, Cytokinin, Abscisic acid (stress hormone), and Ethylene (gaseous ripening hormone)."
    },
    {
      "id": 39,
      "source": "BPSC TRE 1.0 (PRT Class 1-5) | Indian National Movement: Revolutionary Activity Abroad",
      "en": "Who first raised the National Flag outside India?",
      "hi": "भारत के बाहर सर्वप्रथम राष्ट्रीय ध्वज किसने फहराया था?",
      "options": [
        "Lala Lajpat Rai",
        "Madam Bhikaji Cama",
        "Rash Behari Bose",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Madam Bhikaji Cama",
      "explanation": "Madam Bhikaji Cama unfurled the first version of the Indian National Flag on foreign soil at the International Socialist Conference in Stuttgart, Germany, on 22nd August 1907.",
      "tip": "Madam Cama is revered as the 'Mother of the Indian Revolution'; she also published the revolutionary newspaper 'Bande Mataram' from Paris."
    },
    {
      "id": 40,
      "source": "BPSC TRE 1.0 (PRT Class 1-5) | Bihar History & Education",
      "en": "During which movement 'Bihar Vidyapeeth' was established?",
      "hi": "किस आन्दोलन के दौरान 'बिहार विद्यापीठ' की स्थापना की गई थी?",
      "options": [
        "Swadeshi Movement",
        "Non-Cooperation Movement",
        "Civil Disobedience Movement",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Non-Cooperation Movement",
      "explanation": "Mahatma Gandhi inaugurated the Bihar Vidyapeeth at Patna on 6th February 1921 during the Non-Cooperation Movement to provide national education boycotting British institutions.",
      "tip": "First Chancellor of Bihar Vidyapeeth was Maulana Mazharul Haque, and Dr. Rajendra Prasad served as its first Principal.\nMaster Answer Key & Topic Index (Questions 1 to 40)\nQ. No.\nExam Subject / Category\nSub-Topic / Focus Area\nKey"
    }
  ],
  "bpsc-tre4-general-studies-v2": [
    {
      "id": 1,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "Who led the 1857 Revolt in Bihar?",
      "hi": "1857 के विद्रोह के नेता बिहार में कौन थे?",
      "options": [
        "Mir Bakhsh",
        "Babu Kunwar Singh",
        "Birbhan Singh",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Babu Kunwar Singh",
      "explanation": "Babu Kunwar Singh of Jagdishpur (Bhojpur) led the armed rebellion across Arrah, Patna, and Azamgarh until his death in April 1858. His brother Amar Singh continued guerrilla warfare in Kaimur hills.",
      "tip": "BPSC tests Kunwar Singh extensively; remember his historic defeat of Captain Le Grand on 23 April 1858."
    },
    {
      "id": 2,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "Which important event took place on 5th March, 1931?",
      "hi": "5 मार्च, 1931 को कौन-सी महत्त्वपूर्ण घटना घटी?",
      "options": [
        "Gandhi-Irwin Pact",
        "Gandhi attended the Round Table Conference",
        "Karachi Congress",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Gandhi-Irwin Pact",
      "explanation": "The Gandhi-Irwin Pact (Delhi Pact) was signed on 5th March 1931 between Mahatma Gandhi and Viceroy Lord Irwin, resulting in suspension of the Civil Disobedience Movement.",
      "tip": "1931 Sequence: 5 March (Gandhi-Irwin Pact) -> 23 March (Bhagat Singh execution) -> 29 March (Karachi Session)."
    },
    {
      "id": 3,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "When was the Poona Pact signed?",
      "hi": "पूना समझौता कब हस्ताक्षरित हुआ था?",
      "options": [
        "24th September, 1932",
        "24th September, 1930",
        "26th September, 1930",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "24th September, 1932",
      "explanation": "The Poona Pact was signed on 24th September 1932 at Yerwada Jail between Dr. B.R. Ambedkar and Madan Mohan Malaviya, replacing separate electorates with reserved seats.",
      "tip": "Memorize the year 1932: Communal Award (August) -> Fast unto death -> Poona Pact (24 September 1932)."
    },
    {
      "id": 4,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "Who gave the famous slogan 'Inquilab Zindabad'?",
      "hi": "'इंकलाब ज़िन्दाबाद' का प्रसिद्ध नारा किसने दिया था?",
      "options": [
        "Hakim Ajmal Khan",
        "Chandra Shekhar Azad",
        "Hasrat Mohani",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Hasrat Mohani",
      "explanation": "The slogan 'Inquilab Zindabad' was coined in 1921 by Urdu poet and freedom fighter Maulana Hasrat Mohani, and later popularized across India by Bhagat Singh.",
      "tip": "BPSC official key consistently attributes the creation/coining of this slogan to Maulana Hasrat Mohani."
    },
    {
      "id": 5,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "In nuclear reactors, D2O is used as",
      "hi": "नाभिकीय रिएक्टरों में D2O का उपयोग होता है",
      "options": [
        "fuel",
        "source of deuterons",
        "moderator",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "moderator",
      "explanation": "Heavy water (D2O / Deuterium oxide) functions as a moderator in thermal nuclear reactors to slow down fast fission neutrons to thermal speeds without excessive neutron absorption.",
      "tip": "Moderator = slows down neutrons (D2O, Graphite); Control Rods = absorbs neutrons (Cadmium, Boron)."
    },
    {
      "id": 6,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "The study of inheritance from one generation to another is known as",
      "hi": "एक पीढ़ी से दूसरी पीढ़ी में वंशागति के अध्ययन को कहते हैं",
      "options": [
        "genetics",
        "microbiology",
        "cytology",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "genetics",
      "explanation": "Genetics is the branch of biological science that investigates the mechanisms of heredity, gene transmission, and variation across generations.",
      "tip": "Father of Genetics = Gregor Johann Mendel; Cytology = study of cells; Microbiology = study of microbes."
    },
    {
      "id": 7,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "Lacteals are concerned with",
      "hi": "लैक्टियल्स संबंधित हैं",
      "options": [
        "production of milk",
        "secretion of lactic acid",
        "absorption of fats",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "absorption of fats",
      "explanation": "Lacteals are specialized lymphatic capillaries situated in the intestinal villi that absorb dietary emulsified fats (chylomicrons) into the lymphatic system.",
      "tip": "Do not get confused by 'lact-'; in human digestion, lacteals absorb fats, while blood capillaries absorb sugars and amino acids."
    },
    {
      "id": 8,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "The enzyme which is mixed with food in our mouth is",
      "hi": "वह एंजाइम, जो हमारे मुँह में भोजन के साथ मिलता है, है",
      "options": [
        "pepsin",
        "peroxidase",
        "amylase",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "amylase",
      "explanation": "Salivary amylase (ptyalin) is secreted by salivary glands in the mouth, breaking down complex dietary starch into maltose and dextrin.",
      "tip": "Amylase operates at pH 6.8 in the mouth; Pepsin breaks down proteins in the stomach in acidic pH (1.5-2.0)."
    },
    {
      "id": 9,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "Al2O3 · 2SiO2 · 2H2O is the chemical formula for",
      "hi": "Al2O3 · 2SiO2 · 2H2O रासायनिक सूत्र है",
      "options": [
        "monazite",
        "china clay",
        "sand",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "china clay",
      "explanation": "Hydrated aluminium silicate (Al2O3 · 2SiO2 · 2H2O) corresponds to the mineral kaolinite, commercially known as china clay.",
      "tip": "Sand = SiO2; Bauxite = Al2O3 · 2H2O; China Clay (Kaolin) includes the silicate unit 2SiO2."
    },
    {
      "id": 10,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "Which pigment is essential for nitrogen fixation by leguminous plants?",
      "hi": "दलहनी पौधों में नाइट्रोजन स्थिरीकरण के लिए कौन-सा वर्णक आवश्यक है?",
      "options": [
        "Anthocyanin",
        "Leghaemoglobin",
        "Phycocyanin",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Leghaemoglobin",
      "explanation": "Leghaemoglobin is an oxygen-scavenging pigment in legume root nodules that protects the oxygen-sensitive nitrogenase enzyme, enabling anaerobic nitrogen fixation.",
      "tip": "Nitrogenase is inactivated by oxygen; leghaemoglobin scavenges oxygen to maintain anaerobic conditions in nodules."
    },
    {
      "id": 11,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "How many prime numbers are there between 1 and 50?",
      "hi": "1 और 50 के बीच कितनी अभाज्य संख्याएँ हैं?",
      "options": [
        "10",
        "15",
        "21",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "15",
      "explanation": "Primes between 1 and 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 (total exactly 15 numbers).",
      "tip": "Standard prime counts to memorize: 1 to 50 = 15 primes; 51 to 100 = 10 primes; total 1 to 100 = 25 primes."
    },
    {
      "id": 12,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "In a shop, the cost of 2 pencils and 3 erasers is ₹9 and the cost of 4 pencils and 6 erasers is ₹18. What is the cost of each pencil and each eraser?",
      "hi": "एक दुकान में 2 पेंसिल और 3 रबर की कीमत ₹9 तथा 4 पेंसिल और 6 रबर की कीमत ₹18 है। प्रत्येक पेंसिल और प्रत्येक रबर की कीमत क्या है?",
      "options": [
        "Cost of each pencil is ₹1 and each eraser is ₹2",
        "Cost of each pencil is ₹2 and each eraser is ₹1",
        "Cost of each pencil is ₹3 and each eraser is ₹1",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "None of the above",
      "explanation": "The coefficients satisfy a1/a2 = b1/b2 = c1/c2 = 1/2 (coincident lines), meaning infinitely many solution pairs exist. Unique individual prices cannot be determined.",
      "tip": "When the second equation is an exact scalar multiple of the first, unique values do not exist; select Option (E)."
    },
    {
      "id": 13,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "Who wrote the book 'India Divided'?",
      "hi": "'इंडिया डिवाइडेड' नामक पुस्तक किसने लिखी थी?",
      "options": [
        "B. G. Tilak",
        "Rajendra Prasad",
        "Penderel Moon",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Rajendra Prasad",
      "explanation": "Dr. Rajendra Prasad authored 'India Divided' in 1946 while detained at Bankipore Jail during Quit India, presenting a rigorous analysis opposing partition.",
      "tip": "Major books by Dr. Rajendra Prasad: 'India Divided', 'Atmakatha', and 'Champaran Mein Mahatma Gandhi'."
    },
    {
      "id": 14,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "Who wrote the play 'Neel Darpan' describing the plight of the Indigo cultivators of Bengal and Bihar?",
      "hi": "बंगाल एवं बिहार के नील उत्पादक किसानों की दुर्दशा दर्शाने वाले नाटक 'नील दर्पण' के लेखक कौन हैं?",
      "options": [
        "Mahatma Gandhi",
        "Acharya Kripalani",
        "Dinabandhu Mitra",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Dinabandhu Mitra",
      "explanation": "Dinabandhu Mitra authored the Bengali drama 'Neel Darpan' (1858-59), depicting the severe exploitation of indigo ryots by British planters.",
      "tip": "Neel Darpan was translated into English by Michael Madhusudan Dutt and published by Rev. James Long."
    },
    {
      "id": 15,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "Who established the branch of Anushilan Samiti at Patna in 1913?",
      "hi": "1913 में पटना में अनुशीलन समिति की एक शाखा किसने स्थापित की थी?",
      "options": [
        "Sachindra Nath Sanyal",
        "Bankim Chandra Mitra",
        "Raghubir Singh",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Sachindra Nath Sanyal",
      "explanation": "Sachindra Nath Sanyal established the Patna branch of the revolutionary organization Anushilan Samiti in 1913. Bankim Chandra Mitra assisted him.",
      "tip": "Sachindra Nath Sanyal authored 'Bandi Jeevan' and was a co-founder of Hindustan Republican Association (HRA)."
    },
    {
      "id": 16,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "Gaya Session of Indian National Congress was held in which year?",
      "hi": "भारतीय राष्ट्रीय काँग्रेस का गया अधिवेशन किस वर्ष आयोजित हुआ था?",
      "options": [
        "1922",
        "1933",
        "1946",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "1922",
      "explanation": "The 37th Session of the Indian National Congress met at Gaya (Bihar) in December 1922 under the presidency of Deshbandhu Chittaranjan Das.",
      "tip": "INC Sessions in undivided Bihar: 1912 Bankipore (R.N. Mudholkar), 1922 Gaya (C.R. Das), 1940 Ramgarh (Abul Kalam Azad)."
    },
    {
      "id": 17,
      "source": "BPSC TRE 2.0 - Senior Secondary",
      "en": "The cans in which food is packed are coated with tin and not zinc because",
      "hi": "खाद्य पदार्थों के डिब्बों पर टिन की परत चढ़ाई जाती है, जिंक की नहीं, क्योंकि",
      "options": [
        "tin is more reactive than zinc",
        "zinc is more reactive than tin",
        "zinc is costlier than tin",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "zinc is more reactive than tin",
      "explanation": "Zinc is more reactive than tin in the electrochemical series. Zinc reacts with food organic acids to form toxic zinc salts, whereas tin is unreactive.",
      "tip": "Reactivity Series: Zn > Fe > Sn > Pb. Tin's lower reactivity ensures safe food canning."
    },
    {
      "id": 18,
      "source": "BPSC TRE 2.0 - Senior Secondary",
      "en": "The process in which atmospheric carbon dioxide is converted into carbohydrates during photosynthesis is",
      "hi": "वह प्रक्रिया, जिसमें प्रकाश-संश्लेषण के दौरान वायुमण्डलीय कार्बन डाइऑक्साइड को कार्बोहाइड्रेट में परिवर्तित किया जाता है, है",
      "options": [
        "oxidation",
        "reduction",
        "hydrolysis",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "reduction",
      "explanation": "During the Calvin Cycle (dark reaction), carbon dioxide accepts electrons and hydrogen ions to synthesize glucose, representing chemical reduction.",
      "tip": "In photosynthesis: Water is oxidized to Oxygen, while CO2 is reduced to Carbohydrates."
    },
    {
      "id": 19,
      "source": "BPSC TRE 2.0 - Senior Secondary",
      "en": "Trachoma disease is related to",
      "hi": "ट्रैकोमा रोग का सम्बन्ध है",
      "options": [
        "lungs",
        "ears",
        "eyes",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "eyes",
      "explanation": "Trachoma is a contagious bacterial eye infection caused by Chlamydia trachomatis, leading to roughening of the inner eyelids and potential blindness.",
      "tip": "Common eye disorders in BPSC: Trachoma, Cataract, Glaucoma, Astigmatism, and Myopia."
    },
    {
      "id": 20,
      "source": "BPSC TRE 2.0 - Senior Secondary",
      "en": "Which of the following makes use of Newton's third law of motion?",
      "hi": "निम्नलिखित में से कौन-सा न्यूटन के गति के तीसरे नियम का उपयोग करता है?",
      "options": [
        "Archery",
        "Space rocket",
        "Venturimeter",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "More than one of the above",
      "explanation": "Archery (bowstring pushing arrow and arrow reacting on string) and Space rockets (expulsion of combustion gases creating forward thrust) both utilize action-reaction.",
      "tip": "Whenever two independent options validly apply Newton's 3rd Law, select Option (D)."
    },
    {
      "id": 21,
      "source": "BPSC TRE 2.0 - Senior Secondary",
      "en": "The Partition of Bengal was made effective on",
      "hi": "बंगाल विभाजन किस तिथि को प्रभावी हुआ था?",
      "options": [
        "14 October, 1905",
        "15 October, 1905",
        "16 October, 1905",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "16 October, 1905",
      "explanation": "Lord Curzon's partition of Bengal took official effect on 16th October 1905, marked as a day of national mourning and Rakhi Bandhan across Bengal.",
      "tip": "Timeline of 1905: 20 July (Partition announced) -> 7 August (Boycott resolution at Calcutta) -> 16 October (Enforced)."
    },
    {
      "id": 22,
      "source": "BPSC TRE 2.0 - Senior Secondary",
      "en": "The Quit India Resolution was adopted by the Congress in Bombay on",
      "hi": "काँग्रेस द्वारा बम्बई में भारत छोड़ो प्रस्ताव कब पारित किया गया था?",
      "options": [
        "7 August, 1942",
        "8 August, 1942",
        "9 August, 1942",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "8 August, 1942",
      "explanation": "The All-India Congress Committee officially ratified the historic Quit India Resolution on 8th August 1942 at Gowalia Tank Maidan, Bombay.",
      "tip": "8 August 1942 = Resolution passed ('Do or Die'); 9 August 1942 = Operation Zero Hour arrests launched."
    },
    {
      "id": 23,
      "source": "BPSC TRE 2.0 - Senior Secondary",
      "en": "Queen Victoria's Proclamation was issued on which of the following dates?",
      "hi": "महारानी विक्टोरिया की उद्घोषणा निम्नलिखित में से किस तिथि को जारी की गई थी?",
      "options": [
        "1 November, 1857",
        "27 March, 1858",
        "1 November, 1858",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "1 November, 1858",
      "explanation": "Lord Canning read Queen Victoria's Proclamation at Allahabad Darbar on 1st November 1858, transferring governance from Company to British Crown.",
      "tip": "On 1 November 1858, Lord Canning became the first Viceroy of India under the Crown."
    },
    {
      "id": 24,
      "source": "BPSC TRE 2.0 - Senior Secondary",
      "en": "Who among the following became India's unofficial Ambassador to England?",
      "hi": "निम्नलिखित में से कौन इंग्लैंड में भारत के अनौपचारिक राजदूत बने थे?",
      "options": [
        "Surendranath Banerjee",
        "Dadabhai Naoroji",
        "Swami Vivekananda",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Dadabhai Naoroji",
      "explanation": "Dadabhai Naoroji founded the East India Association (1866) and served as MP in the British House of Commons, championing Indian rights in Britain.",
      "tip": "Dadabhai Naoroji formulated the 'Drain of Wealth' theory in 'Poverty and Un-British Rule in India'."
    },
    {
      "id": 25,
      "source": "BPSC TRE 2.0 - Senior Secondary",
      "en": "Who described the Government of India Act, 1935 as a 'Charter of Slavery'?",
      "hi": "भारत शासन अधिनियम, 1935 को किसने 'गुलामी का अधिकार-पत्र' कहा था?",
      "options": [
        "Mahatma Gandhi",
        "Netaji Subhas Chandra Bose",
        "Maulana Hasrat Mohani",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "None of the above",
      "explanation": "Pandit Jawaharlal Nehru described the 1935 Act as a 'new charter of slavery' and a machine with 'all brakes, but no engine.' His name is missing, so (E) is correct.",
      "tip": "Famous quotes whose author is absent from choices (A), (B), and (C) are classic BPSC Option (E) triggers."
    },
    {
      "id": 26,
      "source": "BPSC TRE 2.0 - TGT",
      "en": "Who was the founder of 'Indian National Army (INA)'?\n('",
      "hi": "इंडियन नेशनल आर्मी (INA)' के संस्थापक कौन थे?)",
      "options": [
        "Subhash Chandra Bose",
        "Mohan Singh",
        "Lala Lajpat Rai",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Mohan Singh",
      "explanation": "Captain Mohan Singh founded the First Indian National Army in Malaya in 1942. Subhash Chandra Bose later reorganized and commanded it in 1943.",
      "tip": "Founder = Captain Mohan Singh; Supreme Commander & Reorganizer = Netaji Subhas Chandra Bose."
    },
    {
      "id": 27,
      "source": "BPSC TRE 2.0 - TGT",
      "en": "Which revolt is mentioned in Bankim Chandra Chatterjee's novel, 'Anandamath'?",
      "hi": "बंकिम चन्द्र चटर्जी के उपन्यास 'आनंदमठ' में किस विद्रोह का उल्लेख है?",
      "options": [
        "Sannyasi",
        "Pagalpanthi",
        "Indigo",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Sannyasi",
      "explanation": "Bankim Chandra Chatterjee's novel 'Anandamath' (1882) is set during the Bengal famine of 1770 and depicts the Sannyasi and Fakir Rebellion (1763-1800).",
      "tip": "India's national song 'Vande Mataram' was originally written by Bankim Chandra Chatterjee in 'Anandamath'."
    },
    {
      "id": 28,
      "source": "BPSC TRE 2.0 - TGT",
      "en": "When were 'Swadeshi' and 'Boycott' first adopted as forms of struggle in India?",
      "hi": "प्रथम बार संघर्ष के तरीकों के रूप में 'स्वदेशी' एवं 'बहिष्कार' भारत में कब अपनाया गया?",
      "options": [
        "Partition of Bengal",
        "Home Rule Movement",
        "Non-Cooperation Movement",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Partition of Bengal",
      "explanation": "Swadeshi and Boycott were first adopted as mass agitation methods during the anti-partition agitation of Bengal in 1905.",
      "tip": "Boycott resolution was passed at the Calcutta Town Hall meeting on 7th August 1905."
    },
    {
      "id": 29,
      "source": "BPSC TRE 2.0 - TGT",
      "en": "Who led the peasants of Bihar during the Non-Cooperation Movement?",
      "hi": "असहयोग आन्दोलन के दौरान किसने बिहार में किसानों की अगुवाई की?",
      "options": [
        "Raj Kumar Shukla",
        "Swami Vidyanand",
        "Rajendra Prasad",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Swami Vidyanand",
      "explanation": "Swami Vidyanand led peasant movements across North Bihar (particularly against the Darbhanga Raj) during the Non-Cooperation period (1919-1922).",
      "tip": "Champaran 1917 = Raj Kumar Shukla; Non-Cooperation 1919-22 = Swami Vidyanand; Kisan Sabha 1929-36 = Swami Sahajanand."
    },
    {
      "id": 30,
      "source": "BPSC TRE 2.0 - TGT",
      "en": "Who founded Hindu College at Calcutta in 1817?",
      "hi": "1817 में कलकत्ता में हिन्दू कॉलेज की स्थापना किसने की थी?",
      "options": [
        "Henry Vivian Derozio",
        "David Hare",
        "Jonathan Duncan",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "David Hare",
      "explanation": "Scottish watchmaker David Hare, along with Raja Ram Mohan Roy and Radhakanta Deb, founded Hindu College in Calcutta in 1817.",
      "tip": "Jonathan Duncan founded Sanskrit College at Varanasi in 1791; Derozio taught at Hindu College."
    },
    {
      "id": 31,
      "source": "BPSC TRE 2.0 - TGT",
      "en": "Who among the following said that 'Congress is tottering to its fall and one of my great ambitions while in India is to assist it to a peaceful demise'?",
      "hi": "इनमें से किसने कहा था कि 'काँग्रेस का महल लड़खड़ा रहा है और भारत में रहते हुए मेरी एक बड़ी महत्त्वाकांक्षा यह है कि मैं शान्ति के साथ इसे मरने में सहयोग दे सकूँ'?",
      "options": [
        "Dufferin",
        "Minto",
        "Curzon",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Curzon",
      "explanation": "Viceroy Lord Curzon wrote this statement in 1900 in a confidential letter to the Secretary of State Lord George Hamilton.",
      "tip": "Dufferin called Congress a 'microscopic minority'; Curzon desired its 'peaceful demise'."
    },
    {
      "id": 32,
      "source": "BPSC TRE 2.0 - TGT Science",
      "en": "Monochromatic light enters from one medium to the other. Which one of the following properties does not change?",
      "hi": "एकवर्णी प्रकाश एक माध्यम से दूसरे माध्यम में प्रवेश करता है। निम्नलिखित में से कौन-सा गुण नहीं बदलता है?",
      "options": [
        "Frequency",
        "Amplitude",
        "Velocity",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Frequency",
      "explanation": "Wave frequency depends solely on the source producing the wave; upon entering a new medium, speed and wavelength change, but frequency remains constant.",
      "tip": "v = f * lambda. In refraction: Frequency (f) remains invariant; Velocity (v) and Wavelength (lambda) change."
    },
    {
      "id": 33,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "Which of the following gases is considered as atmospheric pollutant?",
      "hi": "निम्नलिखित में से कौन-सी गैस वायुमण्डलीय प्रदूषक मानी जाती है?",
      "options": [
        "Argon",
        "Oxygen",
        "Sulpher dioxide",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Sulpher dioxide",
      "explanation": "Sulphur dioxide (SO2), produced from burning fossil fuels and smelting ores, is a harmful primary atmospheric pollutant responsible for acid rain.",
      "tip": "Normal air: N2 (78%), O2 (21%), Ar (0.93%); Pollutant gases: SO2, NO2, CO, O3 (tropospheric)."
    },
    {
      "id": 34,
      "source": "BPSC TRE 2.0 - Middle School",
      "en": "Which of the following is not electromagnetic?",
      "hi": "निम्नलिखित में से कौन-सा विद्युत्-चुम्बकीय नहीं है?",
      "options": [
        "Gamma rays",
        "Alpha rays",
        "X-rays",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Alpha rays",
      "explanation": "Alpha rays are streams of particulate helium nuclei (4_2 He 2+) carrying mass and charge, whereas Gamma rays and X-rays are electromagnetic waves.",
      "tip": "Electromagnetic: Radio, Micro, IR, Visible, UV, X-rays, Gamma rays. Particulate: Alpha, Beta, Cathode rays."
    },
    {
      "id": 35,
      "source": "BPSC TRE 1.0 - PRT Class 1-5",
      "en": "The electric fuse works on the",
      "hi": "विद्युत फ्यूज कार्य करता है",
      "options": [
        "Chemical effect of current",
        "Magnetic effect of current",
        "Heating effect of current",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Heating effect of current",
      "explanation": "An electric fuse operates on Joule's heating effect (H = I^2 * R * t); high currents generate heat that melts the fuse wire, breaking the circuit.",
      "tip": "Fuse wire characteristics: High resistance and low melting point (typically tin-lead alloy)."
    },
    {
      "id": 36,
      "source": "BPSC TRE 1.0 - PRT Class 1-5",
      "en": "Who was the militant peasant leader of Bihar?",
      "hi": "बिहार के जुझारू किसान नेता कौन थे?",
      "options": [
        "Raj Kumar Shukla",
        "Swami Sahajanand Saraswati",
        "Rajendra Prasad",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Swami Sahajanand Saraswati",
      "explanation": "Swami Sahajanand Saraswati founded the Bihar Provincial Kisan Sabha (1929) and led militant agrarian agitations across Bihar with the slogan 'Dharm Yuddh'.",
      "tip": "Swami Sahajanand's ashram was at Bihta (Patna); his famous mouthpiece was 'Hunkar'."
    },
    {
      "id": 37,
      "source": "BPSC TRE 1.0 - PRT Class 1-5",
      "en": "The major and top source of oxygen in the atmosphere is",
      "hi": "वायुमण्डल में ऑक्सीजन का सबसे प्रमुख और शीर्ष स्रोत है",
      "options": [
        "Photosynthesis by forest plants",
        "Photosynthesis by oceanic plants",
        "Photosynthesis by grassland ecosystem",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Photosynthesis by oceanic plants",
      "explanation": "Marine phytoplankton, algae, and oceanic vegetation contribute over 50-70% of atmospheric oxygen production through global marine photosynthesis.",
      "tip": "Do not default to terrestrial forests; ocean phytoplankton produces the majority of Earth's oxygen."
    },
    {
      "id": 38,
      "source": "BPSC TRE 1.0 - PRT Class 1-5",
      "en": "Which one of the following is a plant hormone?",
      "hi": "निम्नलिखित में से कौन-सा एक पादप हॉर्मोन है?",
      "options": [
        "Cytokinin",
        "Insulin",
        "Oestrogen",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Cytokinin",
      "explanation": "Cytokinin is a plant growth hormone (phytohormone) that stimulates cell division and morphogenesis. Insulin and Oestrogen are animal hormones.",
      "tip": "Major Phytohormones: Auxin, Gibberellin, Cytokinin, Abscisic acid (stress hormone), Ethylene (fruit ripening)."
    },
    {
      "id": 39,
      "source": "BPSC TRE 1.0 - PRT Class 1-5",
      "en": "Who first raised the National Flag outside India?",
      "hi": "भारत के बाहर सर्वप्रथम राष्ट्रीय ध्वज किसने फहराया था?",
      "options": [
        "Lala Lajpat Rai",
        "Madam Bhikaji Cama",
        "Rash Behari Bose",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Madam Bhikaji Cama",
      "explanation": "Madam Bhikaji Cama hoisted the Indian National Flag at the International Socialist Conference in Stuttgart, Germany, on 22nd August 1907.",
      "tip": "Madam Bhikaji Cama is known as the 'Mother of Indian Revolution'; she published 'Bande Mataram' from Paris."
    },
    {
      "id": 40,
      "source": "BPSC TRE 1.0 - PRT Class 1-5",
      "en": "During which movement 'Bihar Vidyapeeth' was established?",
      "hi": "किस आन्दोलन के दौरान 'बिहार विद्यापीठ' की स्थापना की गई थी?",
      "options": [
        "Swadeshi Movement",
        "Non-Cooperation Movement",
        "Civil Disobedience Movement",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Non-Cooperation Movement",
      "explanation": "Mahatma Gandhi inaugurated Bihar Vidyapeeth at Patna on 6th February 1921 during the Non-Cooperation Movement to promote national education.",
      "tip": "Mazharul Haque was the first Chancellor and Dr. Rajendra Prasad was the first Principal of Bihar Vidyapeeth.\nAnswer Key Summary Table — Set 1 (Q.1 to Q.40)\nQ. No.\nExam / Source\nCore Concept Tested\nOfficial Key"
    }
  ],
  "bpsc-tre4-hindi-literature-80q": [
    {
      "id": 1,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | इतिहास-लेखन परंपरा",
      "en": "हिन्दी साहित्य के प्रारंभिक इतिहासकार मिश्रबंधुओं द्वारा लिखित चार खंडों की रचना का क्या नाम है?",
      "hi": "हिन्दी साहित्य के प्रारंभिक इतिहासकार मिश्रबंधुओं द्वारा लिखित चार खंडों की रचना का क्या नाम है?",
      "options": [
        "मिश्रबंधु-इतिहास",
        "मिश्रबंधु-परिहास",
        "मिश्रबंधु-विनोद",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "मिश्रबंधु-विनोद",
      "explanation": "मिश्रबंधुओं (गणेशबिहारी, श्यामाबिहारी और शुकदेवबिहारी मिश्र) द्वारा रचित 'मिश्रबंधु-विनोद' चार भागों में प्रकाशित हुआ (प्रथम तीन भाग 1913 ई० में तथा चौथा भाग 1934 ई० में)। इसमें लगभग 5,000 कवियों का इतिवृत्त संकलित है।परीक्षा सूत्र एवं ट्रिक्स: मिश्रबंधु त्रयी के नाम याद रखें: गणेश, श्याम, शुकदेव। इनकी पुस्तक 'मिश्रबंधु-विनोद' चार भागों में है।",
      "tip": ""
    },
    {
      "id": 2,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | आदिकाल - रासो साहित्य",
      "en": "आदिकालीन 'पृथ्वीराज रासो' किसकी रचना है?",
      "hi": "आदिकालीन 'पृथ्वीराज रासो' किसकी रचना है?",
      "options": [
        "लूइपा",
        "चंदबरदाई",
        "नरपति नाल्ह",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "चंदबरदाई",
      "explanation": "'पृथ्वीराज रासो' के रचयिता चंदबरदाई हैं, जिन्हें आचार्य रामचंद्र शुक्ल ने हिन्दी का प्रथम महाकवि और 'पृथ्वीराज रासो' को हिन्दी का प्रथम महाकाव्य माना है।परीक्षा सूत्र एवं ट्रिक्स: चंदबरदाई = पृथ्वीराज रासो; नरपति नाल्ह = बीसलदेव रासो; जगनिक = परमाल रासो (आल्हाखंड)।",
      "tip": ""
    },
    {
      "id": 3,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | काल-विभाजन एवं नामकरण",
      "en": "हिन्दी साहित्य के प्रारंभिक काल का 'आदिकाल' नामकरण किसने किया?",
      "hi": "हिन्दी साहित्य के प्रारंभिक काल का 'आदिकाल' नामकरण किसने किया?",
      "options": [
        "ग्रियर्सन",
        "डॉ० रामकुमार वर्मा",
        "आचार्य हजारी प्रसाद द्विवेदी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "आचार्य हजारी प्रसाद द्विवेदी",
      "explanation": "प्रारंभिक काल को 'आदिकाल' नाम आचार्य हजारी प्रसाद द्विवेदी ने दिया, जिसे सर्वमान्य रूप से स्वीकार किया गया। आचार्य शुक्ल ने इसे 'वीरगाथा काल' (आदिकाल) कहा था।परीक्षा सूत्र एवं ट्रिक्स: नामकरण सारणी: चारण काल = ग्रियर्सन; प्रारंभिक काल = मिश्रबंधु; वीरगाथा काल = रामचंद्र शुक्ल; आदिकाल = हजारी प्रसाद द्विवेदी; संधिकाल/चारणकाल = रामकुमार वर्मा।",
      "tip": ""
    },
    {
      "id": 4,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | भक्तिकाल - समय-सीमा",
      "en": "आचार्य रामचंद्र शुक्ल के अनुसार भक्तिकाल की समय-सीमा क्या मानी गई है?",
      "hi": "आचार्य रामचंद्र शुक्ल के अनुसार भक्तिकाल की समय-सीमा क्या मानी गई है?",
      "options": [
        "सं० 1350 से 1700",
        "सं० 1375 से 1700",
        "सं० 1375 से 1730",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "सं० 1375 से 1700",
      "explanation": "आचार्य शुक्ल ने काल-विभाजन संवत् में किया: आदिकाल (वीरगाथा काल) = सं० 1050 से 1375; पूर्व-मध्यकाल (भक्तिकाल) = सं० 1375 से 1700; उत्तर-मध्यकाल (रीतिकाल) = सं० 1700 से 1900; आधुनिक काल = सं० 1900 से 1984।परीक्षा सूत्र एवं ट्रिक्स: शुक्ल जी का काल-विभाजन सदैव 'विक्रम संवत्' (सं०) में होता है। ईस्वी निकालने के लिए संवत् में से 57 वर्ष घटाएं।",
      "tip": ""
    },
    {
      "id": 5,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | संत काव्य - कबीर",
      "en": "“पोथी पढ़ि-पढ़ि जग मुआ, पंडित भया न कोय। ढाई आखर प्रेम का, पढ़े सो पंडित होय॥” ये पंक्तियाँ किस कवि की हैं?",
      "hi": "“पोथी पढ़ि-पढ़ि जग मुआ, पंडित भया न कोय। ढाई आखर प्रेम का, पढ़े सो पंडित होय॥” ये पंक्तियाँ किस कवि की हैं?",
      "options": [
        "कबीरदास",
        "गरीबदास",
        "रैदास",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "कबीरदास",
      "explanation": "यह प्रसिद्ध साखी ज्ञानाश्रयी निर्गुण संत काव्यधारा के प्रवर्तक कबीरदास की है, जिसमें उन्होंने पुस्तकीय पांडित्य की तुलना में व्यावहारिक प्रेमानुभूति को सर्वोच्च माना है।परीक्षा सूत्र एवं ट्रिक्स: कबीर की भाषा को शुक्ल जी ने 'सधुक्कड़ी' तथा श्यामसुंदर दास ने 'पंचमेल खिचड़ी' और हजारी प्रसाद द्विवेदी ने 'वाणी का डिक्टेटर' कहा है।",
      "tip": ""
    },
    {
      "id": 6,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | सूफी काव्य - प्रेमाख्यानक",
      "en": "हिन्दी में सूफी प्रेमाख्यान लिखने वाले प्रमुख कवि हैं",
      "hi": "हिन्दी में सूफी प्रेमाख्यान लिखने वाले प्रमुख कवि हैं",
      "options": [
        "मलूकदास",
        "वीरभान",
        "मलिक मुहम्मद जायसी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "मलिक मुहम्मद जायसी",
      "explanation": "मलिक मुहम्मद जायसी प्रेमाश्रयी निर्गुण सूफी काव्यधारा के प्रतिनिधि कवि हैं, जिन्होंने अवधी भाषा में सुप्रसिद्ध महाकाव्य 'पद्मावत' (1540 ई०), 'अखरावट' और 'आखिरी कलाम' की रचना की।परीक्षा सूत्र एवं ट्रिक्स: मलूकदास ज्ञानाश्रयी संत थे ('अजगर करै न चाकरी, पंछी करै न काम'); जायसी प्रमुख सूफी प्रेमाख्यानक कवि हैं।",
      "tip": ""
    },
    {
      "id": 7,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | रामभक्ति काव्य",
      "en": "भक्तिकाल के किस कवि के नाम के पूर्व 'गोस्वामी' लगाया जाता है?",
      "hi": "भक्तिकाल के किस कवि के नाम के पूर्व 'गोस्वामी' लगाया जाता है?",
      "options": [
        "ईश्वरदास",
        "तुलसीदास",
        "अग्रदास",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "तुलसीदास",
      "explanation": "रामभक्ति काव्यधारा के शीर्ष कवि तुलसीदास के नाम के पूर्व 'गोस्वामी' (इंद्रियों को वश में करने वाला) आदरसूचक उपाधि लगाई जाती है। उन्होंने कालजयी महाकाव्य 'रामचरितमानस' की रचना की।परीक्षा सूत्र एवं ट्रिक्स: तुलसीदास की 12 प्रामाणिक रचनाएँ हैं: 5 बड़े ग्रंथ (दोहावली, कवितावली, गीतावली, रामचरितमानस, विनयपत्रिका) तथा 7 छोटे ग्रंथ।",
      "tip": ""
    },
    {
      "id": 8,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | रीतिकाल - नामकरण",
      "en": "उत्तरमध्यकाल को 'रीतिकाल' की संज्ञा किस विद्वान ने दी है?",
      "hi": "उत्तरमध्यकाल को 'रीतिकाल' की संज्ञा किस विद्वान ने दी है?",
      "options": [
        "मिश्रबंधु",
        "आचार्य हजारी प्रसाद द्विवेदी",
        "आचार्य रामचंद्र शुक्ल",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "आचार्य रामचंद्र शुक्ल",
      "explanation": "आचार्य रामचंद्र शुक्ल ने लक्षण-ग्रंथों की बहुलता और काव्य-रीति की प्रधानता के आधार पर उत्तर-मध्यकाल को 'रीतिकाल' नाम दिया।परीक्षा सूत्र एवं ट्रिक्स: रीतिकाल के अन्य नाम: अलंकृत काल = मिश्रबंधु; श्रृंगार काल = विश्वनाथ प्रसाद मिश्र; कला काल = डॉ० रमाशंकर शुक्ल 'रसाल'।",
      "tip": ""
    },
    {
      "id": 9,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | भारतेन्दु युग - राष्ट्रभाषा",
      "en": "“निज भाषा उन्नति अहै, सब उन्नति को मूल। बिन निज भाषा ज्ञान के, मिटे न हिय को सूल॥” यह किसका कथन है?",
      "hi": "“निज भाषा उन्नति अहै, सब उन्नति को मूल। बिन निज भाषा ज्ञान के, मिटे न हिय को सूल॥” यह किसका कथन है?",
      "options": [
        "भारतेन्दु हरिश्चन्द्र",
        "बालकृष्ण भट्ट",
        "मैथिलीशरण गुप्त",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "भारतेन्दु हरिश्चन्द्र",
      "explanation": "आधुनिक हिन्दी साहित्य के जनक भारतेन्दु हरिश्चन्द्र ने अपने प्रसिद्ध निबंध/व्याख्यान 'हिन्दी की उन्नति पर व्याख्यान' में मातृभाषा की उन्नति को सभी उन्नतियों का मूल आधार बताया था।परीक्षा सूत्र एवं ट्रिक्स: भारतेन्दु जी ने 'कविवचनसुधा', 'हरिश्चन्द्र मैगजीन' (हरिश्चन्द्र चन्द्रिका), और 'बालाबोधिनी' पत्रिकाओं का संपादन किया था।",
      "tip": ""
    },
    {
      "id": 10,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | गद्य विधाएं - उपन्यास",
      "en": "'गोदान' किस विधा की रचना है?",
      "hi": "'गोदान' किस विधा की रचना है?",
      "options": [
        "कहानी",
        "उपन्यास",
        "संस्मरण",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "उपन्यास",
      "explanation": "'गोदान' (1936 ई०) मुंशी प्रेमचंद द्वारा रचित यथार्थवादी उपन्यास है, जिसे भारतीय कृषक जीवन का महाकाव्य कहा जाता है। इसके मुख्य पात्र होरी और धनिया हैं।परीक्षा सूत्र एवं ट्रिक्स: प्रेमचंद के प्रमुख उपन्यास: सेवासदन (1918), प्रेमाश्रम, रंगभूमि, कायाकल्प, निर्मला, गबन, कर्मभूमि, गोदान, मंगलसूत्र (अपूर्ण)।",
      "tip": ""
    },
    {
      "id": 11,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | वीर रस काव्य",
      "en": "'हल्दीघाटी' प्रबंध-काव्य के रचनाकार कौन हैं?",
      "hi": "'हल्दीघाटी' प्रबंध-काव्य के रचनाकार कौन हैं?",
      "options": [
        "माखनलाल चतुर्वेदी",
        "श्यामनारायण पांडेय",
        "सुभद्रा कुमारी चौहान",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "श्यामनारायण पांडेय",
      "explanation": "'हल्दीघाटी' (1937–1939) महाराणा प्रताप के शौर्य पर आधारित श्यामनारायण पांडेय का अत्यंत लोकप्रिय वीर रस प्रधान प्रबंध-काव्य है। इस पर इन्हें 'देव पुरस्कार' प्राप्त हुआ था।परीक्षा सूत्र एवं ट्रिक्स: श्यामनारायण पांडेय के दो अमर वीरकाव्य हैं: 'हल्दीघाटी' (महाराणा प्रताप पर) और 'जौहर' (रानी पद्मिनी पर)।",
      "tip": ""
    },
    {
      "id": 12,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | नाट्य साहित्य - जयशंकर प्रसाद",
      "en": "जयशंकर प्रसाद द्वारा रचित ऐतिहासिक नाटक है",
      "hi": "जयशंकर प्रसाद द्वारा रचित ऐतिहासिक नाटक है",
      "options": [
        "आधे-अधूरे",
        "सबसे बड़ा आदमी",
        "ध्रुवस्वामिनी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "ध्रुवस्वामिनी",
      "explanation": "'ध्रुवस्वामिनी' (1933 ई०) जयशंकर प्रसाद का अंतिम और सर्वश्रेष्ठ ऐतिहासिक समस्या-नाटक है, जिसमें नारी-मुक्ति और पुनर्विवाह का प्रश्न उठाया गया है। 'आधे-अधूरे' मोहन राकेश का नाटक है।परीक्षा सूत्र एवं ट्रिक्स: प्रसाद जी के ऐतिहासिक नाटक: राज्यश्री, विशाख, अजातशत्रु, स्कंदगुप्त (1928), चंद्रगुप्त (1931), ध्रुवस्वामिनी (1933)।",
      "tip": ""
    },
    {
      "id": 13,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | साहित्यिक मूल्यांकन",
      "en": "हिन्दी साहित्य के किस काल को सर्वप्रथम 'हिन्दी साहित्य का स्वर्णयुग' कहा गया?",
      "hi": "हिन्दी साहित्य के किस काल को सर्वप्रथम 'हिन्दी साहित्य का स्वर्णयुग' कहा गया?",
      "options": [
        "भक्तिकाल",
        "आदिकाल",
        "आधुनिक काल",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "भक्तिकाल",
      "explanation": "डॉ० जॉर्ज अब्राहम ग्रियर्सन ने अपने इतिहास ग्रंथ में भक्तिकाल के आध्यात्मिक, सांस्कृतिक एवं उदात्त साहित्यिक उत्कर्ष को देखते हुए इसे सर्वप्रथम 'स्वर्णयुग' (The Golden Age) कहा था।परीक्षा सूत्र एवं ट्रिक्स: स्वर्णयुग कहने वाले प्रथम विद्वान = जॉर्ज ग्रियर्सन; 'स्वर्णकाल' कहने वाले = श्यामसुंदर दास; 'लोक जागरण काल' = डॉ० रामविलास शर्मा।",
      "tip": ""
    },
    {
      "id": 14,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | छायावाद - पंत",
      "en": "सुमित्रानंदन पंत आधुनिक काल की किस काव्य-धारा के प्रमुख स्तंभ कवि हैं?",
      "hi": "सुमित्रानंदन पंत आधुनिक काल की किस काव्य-धारा के प्रमुख स्तंभ कवि हैं?",
      "options": [
        "प्रगतिवाद",
        "प्रयोगवाद",
        "छायावाद",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "छायावाद",
      "explanation": "सुमित्रानंदन पंत छायावाद के चार प्रमुख स्तंभों (प्रसाद, पंत, निराला, महादेवी) में प्रकृति के सुकुमार कवि माने जाते हैं। इन्हें 'चिदंबरा' के लिए 1968 में प्रथम हिन्दी ज्ञानपीठ पुरस्कार मिला।परीक्षा सूत्र एवं ट्रिक्स: छायावाद की चतुष्टयी: जयशंकर प्रसाद (ब्रह्मा), सुमित्रानंदन पंत (विष्णु), सूर्यकांत त्रिपाठी 'निराला' (महेश), महादेवी वर्मा (दुर्गा/शक्ति)।",
      "tip": ""
    },
    {
      "id": 15,
      "source": "BPSC Senior Secondary Hindi - Advt. 24/2023 | कहानी साहित्य",
      "en": "इनमें से कौन 'आकाशदीप' कहानी के रचयिता हैं?",
      "hi": "इनमें से कौन 'आकाशदीप' कहानी के रचयिता हैं?",
      "options": [
        "जयशंकर प्रसाद",
        "चंद्रधर शर्मा गुलेरी",
        "जैनेन्द्र कुमार",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "जयशंकर प्रसाद",
      "explanation": "'आकाशदीप' (1929 ई०) जयशंकर प्रसाद की प्रसिद्ध भावप्रधान एवं ऐतिहासिक पृष्ठभूमि वाली कहानी है, जिसके मुख्य पात्र चंपा और बुद्धगुप्त हैं।परीक्षा सूत्र एवं ट्रिक्स: प्रसाद जी के कहानी संग्रह: छाया (1912 - प्रथम संग्रह), प्रतिध्वनि, आकाशदीप, आँधी, इंद्रजाल (1936)।",
      "tip": ""
    },
    {
      "id": 16,
      "source": "BPSC Senior Secondary Hindi - Advt. 24/2023 | द्विवेदी युगीन निबंध",
      "en": "इनमें से कौन लॉर्ड कर्जन के दमनकारी शासन पर करारे व्यंग्यात्मक आघात करने वाले लेखक हैं?",
      "hi": "इनमें से कौन लॉर्ड कर्जन के दमनकारी शासन पर करारे व्यंग्यात्मक आघात करने वाले लेखक हैं?",
      "options": [
        "माधो मिश्र",
        "सुदर्शन",
        "बालमुकुंद गुप्त",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "बालमुकुंद गुप्त",
      "explanation": "बाबू बालमुकुंद गुप्त ने 'भारत मित्र' पत्रिका में 'शिवशंभु के चिट्ठे' (1904–1905) शीर्षक से तत्कालीन वायसराय लॉर्ड कर्जन की साम्राज्यवादी नीतियों और दमन पर तीखे व्यंग्य लिखे थे।परीक्षा सूत्र एवं ट्रिक्स: 'शिवशंभु के चिट्ठे' = बालमुकुंद गुप्त। यह भारतेन्दु युग और द्विवेदी युग को जोड़ने वाली निबंध-कड़ी है।",
      "tip": ""
    },
    {
      "id": 17,
      "source": "BPSC Senior Secondary Hindi - Advt. 24/2023 | सिद्ध साहित्य - भाषा",
      "en": "निम्नलिखित में से कौन-सी सिद्धों की बानियों की भाषा मानी जाती है?",
      "hi": "निम्नलिखित में से कौन-सी सिद्धों की बानियों की भाषा मानी जाती है?",
      "options": [
        "सधुक्कड़ी भाषा",
        "संध्या भाषा",
        "खिचड़ी भाषा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "संध्या भाषा",
      "explanation": "सिद्धों (84 सिद्धों) की अंतःसाधनात्मक अनुभूतियों और प्रतीकात्मक उलटबासियों की भाषा को मुनिदत्त तथा अद्वयवज्र ने 'संध्या भाषा' (या संधा भाषा) कहा है, जिसका अर्थ प्रकाश-अंधकार मिश्रित प्रतीकार्थ है।परीक्षा सूत्र एवं ट्रिक्स: सिद्धों की भाषा = संध्या भाषा (संधा भाषा); संतों (कबीर आदि) की भाषा = सधुक्कड़ी या पंचमेल खिचड़ी।",
      "tip": ""
    },
    {
      "id": 18,
      "source": "BPSC Senior Secondary Hindi - Advt. 24/2023 | सिद्ध साहित्य - आदि कवि",
      "en": "इन सिद्ध कवियों में से कौन सर्वमान्य रूप से प्रथम सिद्ध कवि माने जाते हैं?",
      "hi": "इन सिद्ध कवियों में से कौन सर्वमान्य रूप से प्रथम सिद्ध कवि माने जाते हैं?",
      "options": [
        "लूइपा",
        "कण्हपा",
        "सरहपा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "सरहपा",
      "explanation": "84 सिद्धों में सरहपा (सरहपाद / राहुलभद्र, 769 ई०) प्रथम सिद्ध कवि माने जाते हैं। महापंडित राहुल सांकृत्यायन ने सरहपा को हिन्दी का प्रथम कवि स्वीकार किया है।परीक्षा सूत्र एवं ट्रिक्स: प्रथम सिद्ध कवि = सरहपा (दोहाकोश के रचयिता); साधना में सबसे ऊँचा स्थान = लूइपा; सबसे अधिक ग्रंथ रचने वाले = कण्हपा।",
      "tip": ""
    },
    {
      "id": 19,
      "source": "BPSC Senior Secondary Hindi - Advt. 24/2023 | आधुनिक कहानी - अज्ञेय",
      "en": "निम्नलिखित में से कौन-सी सच्चिदानंद हीरानंद वात्स्यायन 'अज्ञेय' विरचित कहानी संग्रह है?",
      "hi": "निम्नलिखित में से कौन-सी सच्चिदानंद हीरानंद वात्स्यायन 'अज्ञेय' विरचित कहानी संग्रह है?",
      "options": [
        "गुण्डा",
        "विपथगा",
        "काला आदमी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "विपथगा",
      "explanation": "'विपथगा' (1937 ई०) अज्ञेय जी का प्रथम कहानी संग्रह है। 'गुण्डा' जयशंकर प्रसाद की कहानी है। अज्ञेय की अन्य प्रसिद्ध कहानियाँ 'रोज़' (गैंग्रीन), 'शरणदाता' और 'लेटरबक्स' हैं।परीक्षा सूत्र एवं ट्रिक्स: अज्ञेय के कहानी संग्रह: विपथगा (1937), परम्परा, कोठरी की बात, शरणार्थी, जयदोल, ये तेरे प्रतिरूप।",
      "tip": ""
    },
    {
      "id": 20,
      "source": "BPSC Senior Secondary Hindi - Advt. 24/2023 | आदिकाल - विद्यापति",
      "en": "इनमें से मैथिल कोकिल महाकवि विद्यापति के पिता का नाम क्या था?",
      "hi": "इनमें से मैथिल कोकिल महाकवि विद्यापति के पिता का नाम क्या था?",
      "options": [
        "कमलापति ठाकुर",
        "उमापति ठाकुर",
        "रमापति ठाकुर",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "उपर्युक्त में से कोई नहीं",
      "explanation": "महाकवि विद्यापति के पिता का नाम 'गणपति ठाकुर' था, जो मिथिला नरेश की सभा के विद्वान थे। विकल्प (A), (B), (C) में गणपति ठाकुर अनुपस्थित होने से आयोग ने (E) उत्तर माना।परीक्षा सूत्र एवं ट्रिक्स: विद्यापति का जन्म विस्फी (मधुबनी) में हुआ। पिता = गणपति ठाकुर; आश्रयदाता = राजा कीर्तिसिंह और राजा शिवसिंह।",
      "tip": ""
    },
    {
      "id": 21,
      "source": "BPSC Senior Secondary Hindi - Advt. 24/2023 | भारतेन्दु युग - काव्य पंक्तियाँ",
      "en": "“रोवहु सब मिलिकै आवहु भारत भाई। हा हा! भारत दुर्दशा न देखी जाई॥” इनमें से कौन उपर्युक्त पंक्तियों के रचयिता हैं?",
      "hi": "“रोवहु सब मिलिकै आवहु भारत भाई। हा हा! भारत दुर्दशा न देखी जाई॥” इनमें से कौन उपर्युक्त पंक्तियों के रचयिता हैं?",
      "options": [
        "भारतेन्दु हरिश्चन्द्र",
        "मैथिलीशरण गुप्त",
        "प्रतापनारायण मिश्र",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "भारतेन्दु हरिश्चन्द्र",
      "explanation": "यह प्रसिद्ध मंगलाचरण गीत भारतेन्दु हरिश्चन्द्र के मौलिक नाट्य-रासक 'भारत दुर्दशा' (1880 ई०) के प्रथम अंक से उद्धृत है, जिसमें भारत के अतीत गौरव और तत्कालीन पतन पर विलाप किया गया है।परीक्षा सूत्र एवं ट्रिक्स: 'भारत दुर्दशा' (1880) और 'अंधेर नगरी' (1881) भारतेन्दु जी के सर्वाधिक पूछे जाने वाले मौलिक नाटक हैं।",
      "tip": ""
    },
    {
      "id": 22,
      "source": "BPSC Senior Secondary Hindi - Advt. 24/2023 | नाट्य साहित्य - एकांकी / रूपक",
      "en": "निम्नलिखित में से जयशंकर प्रसाद का कौन-सा नाटक प्रतीकात्मक शैली में रचित माना जाता है?",
      "hi": "निम्नलिखित में से जयशंकर प्रसाद का कौन-सा नाटक प्रतीकात्मक शैली में रचित माना जाता है?",
      "options": [
        "विशाख",
        "एक घूँट",
        "चंद्रगुप्त",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "एक घूँट",
      "explanation": "'एक घूँट' (1930 ई०) को आधुनिक हिन्दी का प्रथम एकांकी और प्रतीकात्मक रचना माना जाता है। प्रसाद जी का पूर्ण प्रतीकात्मक अन्योक्ति नाटक 'कामना' (1927 ई०) है।परीक्षा सूत्र एवं ट्रिक्स: प्रसाद जी के नाटक: 'कामना' और 'एक घूँट' प्रतीकात्मक/अन्योक्तिपरक हैं; जबकि 'स्कंदगुप्त', 'चंद्रगुप्त', 'ध्रुवस्वामिनी' ऐतिहासिक हैं।",
      "tip": ""
    },
    {
      "id": 23,
      "source": "BPSC Senior Secondary Hindi - Advt. 24/2023 | छायावादी काव्य पंक्तियाँ",
      "en": "“बीती विभावरी जाग री! अम्बर पनघट में डुबो रही, तारा-घट ऊषा नागरी।” इन पंक्तियों के रचयिता कौन हैं?",
      "hi": "“बीती विभावरी जाग री! अम्बर पनघट में डुबो रही, तारा-घट ऊषा नागरी।” इन पंक्तियों के रचयिता कौन हैं?",
      "options": [
        "मैथिलीशरण गुप्त",
        "जयशंकर प्रसाद",
        "श्रीधर पाठक",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "जयशंकर प्रसाद",
      "explanation": "यह प्रसिद्ध जागरण गीत जयशंकर प्रसाद के काव्य-संग्रह 'लहर' (1935 ई०) से लिया गया है। इसमें सांग रूपक और मानवीकरण अलंकार का उत्कृष्ट समन्वय है।परीक्षा सूत्र एवं ट्रिक्स: प्रसाद जी के काव्य ग्रंथ: कानन कुसुम, महाराणा का महत्त्व, झरना (1918), आँसू (1925), लहर (1935), कामायनी (1935)।",
      "tip": ""
    },
    {
      "id": 24,
      "source": "BPSC Senior Secondary Hindi - Advt. 24/2023 | द्विवेदी युग - राष्ट्रकवि",
      "en": "इनमें से कौन 'भारत-भारती' काव्य के रचयिता हैं?",
      "hi": "इनमें से कौन 'भारत-भारती' काव्य के रचयिता हैं?",
      "options": [
        "अयोध्या सिंह उपाध्याय 'हरिऔध'",
        "मैथिलीशरण गुप्त",
        "रामधारी सिंह 'दिनकर'",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "मैथिलीशरण गुप्त",
      "explanation": "'भारत-भारती' (1912 ई०) मैथिलीशरण गुप्त द्वारा रचित राष्ट्रीय भावों से ओतप्रोत काव्य-कृति है। इस रचना के स्वाधीनता आंदोलन में व्यापक प्रभाव के कारण महात्मा गांधी ने उन्हें 'राष्ट्रकवि' की उपाधि दी थी।परीक्षा सूत्र एवं ट्रिक्स: 'भारत-भारती' के तीन खंड हैं: अतीत खंड, वर्तमान खंड और भविष्यत खंड। यह मुसद्दस-ए-हाली के ढंग पर लिखी गई है।",
      "tip": ""
    },
    {
      "id": 25,
      "source": "BPSC Senior Secondary Hindi - Advt. 24/2023 | समकालीन कविता आंदोलन",
      "en": "इनमें से कौन 'अकविता आंदोलन' से संबंधित प्रमुख कवि हैं?",
      "hi": "इनमें से कौन 'अकविता आंदोलन' से संबंधित प्रमुख कवि हैं?",
      "options": [
        "सौमित्र मोहन",
        "जगदीश चतुर्वेदी",
        "लक्ष्मीकांत वर्मा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "उपर्युक्त में से एक से अधिक",
      "explanation": "1960 के दशक में प्रारंभ हुए 'अकविता आंदोलन' के प्रवर्तक जगदीश चतुर्वेदी थे, और सौमित्र मोहन (प्रसिद्ध कविता 'लुकमान अली') इसके प्रमुख हस्ताक्षर थे। दो विकल्प सही होने से (D) सही है।परीक्षा सूत्र एवं ट्रिक्स: अकविता आंदोलन (1965) के प्रमुख कवि: जगदीश चतुर्वेदी, सौमित्र मोहन, श्याम परमार, विजयदेव नारायण साही।\nखंड 2: भक्तिकाल, रीतिकाल, आधुनिक काल एवं गद्य विधाएं (प्रश्न 26 से 55)",
      "tip": ""
    },
    {
      "id": 26,
      "source": "BPSC Senior Secondary Hindi - Advt. 24/2023 | कृष्णभक्ति शाखा - अष्टछाप",
      "en": "इनमें से कौन 'अष्टछाप' के संस्थापक हैं?",
      "hi": "इनमें से कौन 'अष्टछाप' के संस्थापक हैं?",
      "options": [
        "श्री हरिराय",
        "गोस्वामी विट्ठलनाथ",
        "नंददास",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "गोस्वामी विट्ठलनाथ",
      "explanation": "गोस्वामी विट्ठलनाथ ने 1565 ई० में अपने पिता वल्लभाचार्य के 4 शिष्यों (कुंभनदास, सूरदास, परमानंददास, कृष्णदास) तथा अपने 4 शिष्यों (गोविंदस्वामी, छीतस्वामी, चतुर्भुजदास, नंददास) को मिलाकर अष्टछाप की स्थापना की।परीक्षा सूत्र एवं ट्रिक्स: अष्टछाप की स्थापना = 1565 ई०, विट्ठलनाथ द्वारा। अष्टछाप के सर्वश्रेष्ठ कवि = सूरदास; दूसरे सबसे प्रसिद्ध = नंददास ('और सब गड़िया, नंददास जड़िया')।",
      "tip": ""
    },
    {
      "id": 27,
      "source": "BPSC Senior Secondary Hindi - Advt. 24/2023 | आंचलिक उपन्यास - रेणु",
      "en": "निम्नलिखित में से कौन-सा फणीश्वर नाथ 'रेणु' विरचित आंचलिक उपन्यास है?",
      "hi": "निम्नलिखित में से कौन-सा फणीश्वर नाथ 'रेणु' विरचित आंचलिक उपन्यास है?",
      "options": [
        "मैला आँचल",
        "तितली",
        "परती परिकथा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "उपर्युक्त में से एक से अधिक",
      "explanation": "'मैला आँचल' (1954 ई० - पूर्णिया के मेरीगंज गांव की कथा) और 'परती परिकथा' (1957 ई० - परानपुर गांव) दोनों फणीश्वर नाथ रेणु के प्रसिद्ध आंचलिक उपन्यास हैं। 'तितली' जयशंकर प्रसाद का उपन्यास है।परीक्षा सूत्र एवं ट्रिक्स: रेणु के उपन्यास: मैला आँचल (1954), परती परिकथा (1957), दीर्घतपा, कितने चौराहे, पलटू बाबू रोड।",
      "tip": ""
    },
    {
      "id": 28,
      "source": "BPSC Senior Secondary Booklets - Advt. 24/2023 | राष्ट्रकवि दिनकर",
      "en": "'कुरुक्षेत्र' काव्य के लेखक का क्या नाम है?",
      "hi": "'कुरुक्षेत्र' काव्य के लेखक का क्या नाम है?",
      "options": [
        "अयोध्या सिंह उपाध्याय 'हरिऔध'",
        "श्रीधर पाठक",
        "मैथिलीशरण गुप्त",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "उपर्युक्त में से कोई नहीं",
      "explanation": "'कुरुक्षेत्र' (1946 ई०) राष्ट्रकवि रामधारी सिंह 'दिनकर' द्वारा रचित युगांतरकारी प्रबंध-काव्य है, जिसमें भीष्म और युधिष्ठिर के संवाद द्वारा युद्ध और शांति की दार्शनिक मीमांसा की गई है।परीक्षा सूत्र एवं ट्रिक्स: विकल्प (A), (B), (C) में दिनकर जी का नाम नहीं होने के कारण आयोग ने Option (E) माना।",
      "tip": ""
    },
    {
      "id": 29,
      "source": "BPSC Senior Secondary Booklets - Advt. 24/2023 | भाषा का ऐतिहासिक विकास",
      "en": "हिन्दी भाषा के उद्भव का सर्वमान्य काल माना जाता है",
      "hi": "हिन्दी भाषा के उद्भव का सर्वमान्य काल माना जाता है",
      "options": [
        "500 ई० पू०",
        "500 ई०",
        "1000 ई०",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "1000 ई०",
      "explanation": "अपभ्रंश के उत्तर रूप (अवहट्ठ) से आधुनिक भारतीय आर्यभाषाओं और हिन्दी का विकास लगभग 1000 ई० (10वीं-11वीं शताब्दी) के आसपास हुआ माना जाता है।परीक्षा सूत्र एवं ट्रिक्स: भाषा कालक्रम: प्राचीन आर्यभाषा = 1500 ई०पू० - 500 ई०पू०; मध्यकालीन आर्यभाषा (पालि, प्राकृत, अपभ्रंश) = 500 ई०पू० - 1000 ई०; आधुनिक आर्यभाषा (हिन्दी) = 1000 ई० से अब तक।",
      "tip": ""
    },
    {
      "id": 30,
      "source": "BPSC Senior Secondary Booklets - Advt. 24/2023 | भारतीय नाट्यशास्त्र - नायक भेद",
      "en": "भारतीय काव्यशास्त्र में क्षमाशील, गम्भीर, स्थिरचित्त, स्वाभिमानी एवं दृढ़-प्रतिज्ञ नायक को क्या कहा गया है?",
      "hi": "भारतीय काव्यशास्त्र में क्षमाशील, गम्भीर, स्थिरचित्त, स्वाभिमानी एवं दृढ़-प्रतिज्ञ नायक को क्या कहा गया है?",
      "options": [
        "धीरललित",
        "धीरोदात्त",
        "धीरप्रशांत",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "धीरोदात्त",
      "explanation": "काव्यशास्त्र में नायक के चार प्रमुख भेद हैं: 1. धीरोदात्त (गंभीर, क्षमाशील, स्वाभिमानी जैसे राम), 2. धीरोद्धत (घमंडी, क्रोधी जैसे रावण/भीम), 3. धीरललित (कलाप्रेमी, सुखी जैसे उदयन), 4. धीरप्रशांत (शांत, ब्राह्मण/वैश्य जैसे चारुदत्त)।परीक्षा सूत्र एवं ट्रिक्स: राम = धीरोदात्त; रावण = धीरोद्धत; राजा उदयन = धीरललित; चारुदत्त = धीरप्रशांत।",
      "tip": ""
    },
    {
      "id": 31,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | इतिहास ग्रंथ - हजारी प्रसाद द्विवेदी",
      "en": "'हिन्दी साहित्य की भूमिका' (1940 ई०) आलोचनात्मक ग्रंथ के लेखक कौन हैं?",
      "hi": "'हिन्दी साहित्य की भूमिका' (1940 ई०) आलोचनात्मक ग्रंथ के लेखक कौन हैं?",
      "options": [
        "परशुराम चतुर्वेदी",
        "हजारी प्रसाद द्विवेदी",
        "गणपतिचन्द्र गुप्त",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "हजारी प्रसाद द्विवेदी",
      "explanation": "'हिन्दी साहित्य की भूमिका' (1940), 'हिन्दी साहित्य का आदिकाल' (1952) और 'हिन्दी साहित्य: उद्भव और विकास' (1952) आचार्य हजारी प्रसाद द्विवेदी के ऐतिहासिक इतिहास-ग्रंथ हैं।परीक्षा सूत्र एवं ट्रिक्स: द्विवेदी जी ने शुक्ल जी की अनेक मान्यताओं (विशेषतः सिद्ध-नाथ साहित्य, कबीर और भक्तिकाल के उदय) को सशक्त चुनौती दी थी।",
      "tip": ""
    },
    {
      "id": 32,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | इतिहास ग्रंथ - रामकुमार वर्मा",
      "en": "'हिन्दी साहित्य का आलोचनात्मक इतिहास' (1938 ई०) ग्रंथ के लेखक हैं",
      "hi": "'हिन्दी साहित्य का आलोचनात्मक इतिहास' (1938 ई०) ग्रंथ के लेखक हैं",
      "options": [
        "डॉ० रामकुमार वर्मा",
        "बच्चन सिंह",
        "नलिन विलोचन शर्मा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "डॉ० रामकुमार वर्मा",
      "explanation": "डॉ० रामकुमार वर्मा ने अपने ग्रंथ 'हिन्दी साहित्य का आलोचनात्मक इतिहास' में संधिकाल और चारणकाल का विवेचन किया तथा स्वयंभू को हिन्दी का पहला कवि माना।परीक्षा सूत्र एवं ट्रिक्स: रामकुमार वर्मा का इतिहास ग्रंथ केवल सं० 693 से 1693 (भक्तिकाल के अंत तक) ही लिखा गया, यह रीतिकाल तक पूर्ण नहीं हुआ।",
      "tip": ""
    },
    {
      "id": 33,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | इतिहास ग्रंथ - संत परंपरा",
      "en": "'उत्तरी भारत की संत परम्परा' शोध-ग्रंथ के लेखक कौन हैं?",
      "hi": "'उत्तरी भारत की संत परम्परा' शोध-ग्रंथ के लेखक कौन हैं?",
      "options": [
        "परशुराम चतुर्वेदी",
        "डॉ० नगेन्द्र",
        "डॉ० रामविलास शर्मा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "परशुराम चतुर्वेदी",
      "explanation": "पं० परशुराम चतुर्वेदी का ग्रंथ 'उत्तरी भारत की संत परम्परा' संत साहित्य और निर्गुण भक्तिकाव्य के प्रामाणिक शोध हेतु मूर्धन्य कृति माना जाता है।परीक्षा सूत्र एवं ट्रिक्स: 'उत्तरी भारत की संत परम्परा' = परशुराम चतुर्वेदी; 'हिन्दी साहित्य का दूसरा इतिहास' = डॉ० बच्चन सिंह।",
      "tip": ""
    },
    {
      "id": 34,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | इतिहास ग्रंथ - बच्चन सिंह",
      "en": "'हिन्दी साहित्य का दूसरा इतिहास' (1996 ई०) के लेखक हैं",
      "hi": "'हिन्दी साहित्य का दूसरा इतिहास' (1996 ई०) के लेखक हैं",
      "options": [
        "बच्चन सिंह",
        "गणपतिचन्द्र गुप्त",
        "मैनेजर पांडेय",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "बच्चन सिंह",
      "explanation": "डॉ० बच्चन सिंह ने 'हिन्दी साहित्य का दूसरा इतिहास' (1996) तथा 'आधुनिक हिन्दी साहित्य का इतिहास' लिखकर परम्परागत इतिहास-दृष्टि का पुनर्मूल्यांकन किया।परीक्षा सूत्र एवं ट्रिक्स: दूसरा इतिहास = बच्चन सिंह; वैज्ञानिक इतिहास = गणपतिचन्द्र गुप्त; आधा इतिहास = सुमन राजे।",
      "tip": ""
    },
    {
      "id": 35,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | इतिहास ग्रंथ - गणपतिचन्द्र गुप्त",
      "en": "'हिन्दी साहित्य का वैज्ञानिक इतिहास' (1965 ई०) दो भागों में किसने लिखा है?",
      "hi": "'हिन्दी साहित्य का वैज्ञानिक इतिहास' (1965 ई०) दो भागों में किसने लिखा है?",
      "options": [
        "गणपतिचन्द्र गुप्त",
        "विश्वनाथ त्रिपाठी",
        "रामस्वरूप चतुर्वेदी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "गणपतिचन्द्र गुप्त",
      "explanation": "डॉ० गणपतिचन्द्र गुप्त ने 'हिन्दी साहित्य का वैज्ञानिक इतिहास' में शालिभद्र सूरि (भरतेश्वर बाहुबली रास, 1184 ई०) को हिन्दी का प्रथम कवि माना था।परीक्षा सूत्र एवं ट्रिक्स: शालिभद्र सूरि को प्रथम कवि माना = गणपतिचन्द्र गुप्त; सरहपा को माना = राहुल सांकृत्यायन; पुष्पदंत को माना = शिवसिंह सेंगर।",
      "tip": ""
    },
    {
      "id": 36,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | काल-विभाजन - ग्रियर्सन",
      "en": "'मलिक मुहम्मद जायसी की प्रेम कविता' - हिन्दी साहित्य के इतिहास का काल-विभाजन और नामकरण करते हुए उपर्युक्त नामकरण किस साहित्येतिहासकार ने सुझाया है?",
      "hi": "'मलिक मुहम्मद जायसी की प्रेम कविता' - हिन्दी साहित्य के इतिहास का काल-विभाजन और नामकरण करते हुए उपर्युक्त नामकरण किस साहित्येतिहासकार ने सुझाया है?",
      "options": [
        "आचार्य रामचन्द्र शुक्ल",
        "हजारी प्रसाद द्विवेदी",
        "डॉ० जॉर्ज ग्रियर्सन",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "डॉ० जॉर्ज ग्रियर्सन",
      "explanation": "डॉ० जॉर्ज अब्राहम ग्रियर्सन ने अपनी पुस्तक 'The Modern Vernacular Literature of Hindustan' (1888) में काल-विभाजन का प्रथम प्रयास करते हुए अध्यायों के रूप में यह शीर्षक दिया था।परीक्षा सूत्र एवं ट्रिक्स: काल-विभाजन का प्रथम प्रयास जॉर्ज ग्रियर्सन ने किया था। उन्होंने 11 अध्यायों में इतिहास को विभक्त किया था।",
      "tip": ""
    },
    {
      "id": 37,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | अपभ्रंश एवं आधुनिक भाषाएँ",
      "en": "निम्नलिखित में से किस भाषा का विकास ब्राचड़ अपभ्रंश से हुआ?",
      "hi": "निम्नलिखित में से किस भाषा का विकास ब्राचड़ अपभ्रंश से हुआ?",
      "options": [
        "मराठी",
        "बिहारी हिन्दी",
        "सिन्धी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "सिन्धी",
      "explanation": "ब्राचड़ अपभ्रंश से 'सिन्धी' भाषा का विकास हुआ। मराठी का विकास महाराष्ट्री अपभ्रंश से, तथा बिहारी हिन्दी का विकास मागधी अपभ्रंश से हुआ है।परीक्षा सूत्र एवं ट्रिक्स: अपभ्रंश भाषा संबंध: शौरसेनी = पश्चिमी हिन्दी, राजस्थानी, गुजराती; मागधी = बिहारी, बंगला, उड़िया, असमिया; अर्धमागधी = पूर्वी हिन्दी; ब्राचड़ = सिन्धी; पैशाची = लहंदा व पंजाबी।",
      "tip": ""
    },
    {
      "id": 38,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | रीतिकाल - असत्य कथन",
      "en": "विद्वानों द्वारा रीतिकाल के नामकरण से सम्बन्धित कौन-सा युग्म सत्य नहीं है?",
      "hi": "विद्वानों द्वारा रीतिकाल के नामकरण से सम्बन्धित कौन-सा युग्म सत्य नहीं है?",
      "options": [
        "रीतिकाल - आचार्य रामचन्द्र शुक्ल",
        "अलंकृत काल - मिश्रबंधु",
        "श्रृंगार काल - विश्वनाथ प्रसाद मिश्र",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "उपर्युक्त में से कोई नहीं",
      "explanation": "तीनों युग्म प्रामाणिक एवं सत्य हैं: शुक्ल जी ने 'रीतिकाल', मिश्रबंधुओं ने 'अलंकृत काल' तथा विश्वनाथ प्रसाद मिश्र ने 'श्रृंगार काल' नाम दिया। अतः असत्य युग्म कोई नहीं (E) है।परीक्षा सूत्र एवं ट्रिक्स: जब प्रश्न में दिए गए सभी युग्म सही सुमेलित हों और 'कौन-सा सत्य नहीं है' पूछा जाए, तो उत्तर **(E) उपर्युक्त में से कोई नहीं** होता है।",
      "tip": ""
    },
    {
      "id": 39,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | आचार्य शुक्ल की इतिहास-दृष्टि",
      "en": "गोरखनाथ तथा नाथ-पंथियों की रचनाओं को 'साम्प्रदायिक शिक्षा मात्र' कहकर शुद्ध साहित्य की कोटि से बहिष्कृत करने वाले विद्वान कौन हैं?",
      "hi": "गोरखनाथ तथा नाथ-पंथियों की रचनाओं को 'साम्प्रदायिक शिक्षा मात्र' कहकर शुद्ध साहित्य की कोटि से बहिष्कृत करने वाले विद्वान कौन हैं?",
      "options": [
        "आचार्य रामचन्द्र शुक्ल",
        "हजारी प्रसाद द्विवेदी",
        "डॉ० रामकुमार वर्मा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "आचार्य रामचन्द्र शुक्ल",
      "explanation": "आचार्य शुक्ल ने सिद्धों, नाथों और जैनियों की धार्मिक रचनाओं को सांप्रदायिक शिक्षा मानकर शुद्ध साहित्य से बाहर रखा था, जिसका खंडन बाद में हजारी प्रसाद द्विवेदी ने किया।परीक्षा सूत्र एवं ट्रिक्स: शुक्ल जी का कथन: 'सिद्धों और योगियों की रचनाएं तांत्रिक साधना और उपदेश मात्र हैं, अतः वे शुद्ध साहित्य की कोटि में नहीं आतीं'।",
      "tip": ""
    },
    {
      "id": 40,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | आदिकाल - चंदबरदाई की उपाधि",
      "en": "हिन्दी साहित्य में 'छन्दों का बादशाह' तथा 'छप्पयों का राजा' किसे कहा जाता है?",
      "hi": "हिन्दी साहित्य में 'छन्दों का बादशाह' तथा 'छप्पयों का राजा' किसे कहा जाता है?",
      "options": [
        "नरपतिनाल्ह",
        "अमीर खुसरो",
        "दलपति विजय",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "उपर्युक्त में से कोई नहीं",
      "explanation": "महाकवि चंदबरदाई को छप्पय छंद का बेजोड़ प्रयोग करने के कारण 'छप्पयों का राजा' कहा जाता है (शिवसिंह सेंगर ने इन्हें छप्पय का विशेषज्ञ कहा)। विकल्प में चंदबरदाई न होने से (E) सही है।परीक्षा सूत्र एवं ट्रिक्स: छप्पयों का राजा = चंदबरदाई; कठिन काव्य का प्रेत = केशवदास; प्रकृति का सुकुमार कवि = सुमित्रानंदन पंत।",
      "tip": ""
    },
    {
      "id": 41,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | संत काव्य - सुंदरदास",
      "en": "संत काव्यधारा में सर्वाधिक शास्त्रज्ञ और सुशिक्षित संत कवि कौन थे?",
      "hi": "संत काव्यधारा में सर्वाधिक शास्त्रज्ञ और सुशिक्षित संत कवि कौन थे?",
      "options": [
        "कबीरदास",
        "रैदास",
        "सुंदरदास",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "सुंदरदास",
      "explanation": "दादू दयाल के शिष्य संत सुंदरदास संस्कृत, व्याकरण और काव्यशास्त्र के प्रकांड विद्वान थे। उन्होंने सवैया और घनाक्षरी छंदों में 'सुंदर विलास' और 'ज्ञान समुद्र' की रचना की।परीक्षा सूत्र एवं ट्रिक्स: सुंदरदास ने श्रृंगार रस की घोर निंदा की थी ('रसिकप्रिया, रसमंजरी और सिंगारहि जानि। चतुराई करि बहुत विधि, कही बनाई आनि' कहकर रीतिकवियों की निंदा की)।",
      "tip": ""
    },
    {
      "id": 42,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | रासो शब्द की व्युत्पत्ति",
      "en": "'रासो' शब्द की उत्पत्ति बीसलदेव रासो की पंक्ति के आधार पर 'रसायण' से किसने मानी है?",
      "hi": "'रासो' शब्द की उत्पत्ति बीसलदेव रासो की पंक्ति के आधार पर 'रसायण' से किसने मानी है?",
      "options": [
        "रामचन्द्र शुक्ल",
        "गार्सा द तासी",
        "हजारी प्रसाद द्विवेदी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "रामचन्द्र शुक्ल",
      "explanation": "आचार्य शुक्ल ने 'बीसलदेव रासो' की पंक्ति 'बारह सै बहत्तोराँ मझारि, जेठ बदी नवमी बुधवारी। नालह रसायण आरंभई...' के आधार पर 'रासो' की व्युत्पत्ति 'रसायण' से मानी।परीक्षा सूत्र एवं ट्रिक्स: रासो व्युत्पत्ति मत: राजसूय = गार्सा द तासी; राजयश = हरप्रसाद शास्त्री; रस = नरोत्तम स्वामी; रसायण = रामचंद्र शुक्ल; रासक = हजारी प्रसाद द्विवेदी।",
      "tip": ""
    },
    {
      "id": 43,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | निराला - रचना कालक्रम",
      "en": "प्रकाशन-वर्ष के अनुसार सूर्यकांत त्रिपाठी 'निराला' की निम्नलिखित काव्य-कृतियों का सही कालानुक्रम है",
      "hi": "प्रकाशन-वर्ष के अनुसार सूर्यकांत त्रिपाठी 'निराला' की निम्नलिखित काव्य-कृतियों का सही कालानुक्रम है",
      "options": [
        "अर्चना, आराधना, अणिमा, गीतिका",
        "आराधना, अणिमा, अर्चना, गीतिका",
        "गीतिका, अणिमा, अर्चना, आराधना",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "गीतिका, अणिमा, अर्चना, आराधना",
      "explanation": "निराला जी की कृतियों का प्रकाशन वर्ष: गीतिका (1936 ई०), अणिमा (1943 ई०), अर्चना (1950 ई०), आराधना (1953 ई०)। अतः क्रम (C) पूर्णतः सही है।परीक्षा सूत्र एवं ट्रिक्स: निराला जी का समग्र क्रम: अनामिका (1923), परिमल (1930), गीतिका (1936), तुलसीदास (1938), कुकुरमुत्ता (1942), अणिमा (1943), बेला, नये पत्ते, अर्चना, आराधना, गीतगुंज।",
      "tip": ""
    },
    {
      "id": 44,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | काव्यशास्त्र - शब्द-शक्ति (लक्षणा)",
      "en": "निम्नलिखित में से किस लक्षणा को 'अजहत्स्वार्था लक्षणा' भी कहते हैं?",
      "hi": "निम्नलिखित में से किस लक्षणा को 'अजहत्स्वार्था लक्षणा' भी कहते हैं?",
      "options": [
        "लक्षण-लक्षणा",
        "उपादान लक्षणा",
        "विपरीत लक्षणा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "उपादान लक्षणा",
      "explanation": "जहाँ मुख्यार्थ का सर्वथा त्याग न होकर लक्ष्यार्थ के साथ उसका भी ग्रहण बना रहे (न जहाति स्वार्थम्), उसे 'अजहत्स्वार्था' या 'उपादान लक्षणा' कहते हैं (जैसे- 'कुंतल प्रविशन्ति' = भाले प्रवेश कर रहे हैं)।परीक्षा सूत्र एवं ट्रिक्स: अजहत्स्वार्था = उपादान लक्षणा (मुख्यार्थ नहीं छूटता); जहत्स्वार्था = लक्षण-लक्षणा (मुख्यार्थ पूरी तरह छूट जाता है)।",
      "tip": ""
    },
    {
      "id": 45,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | संस्कृत काव्यशास्त्र - आचार्य कालक्रम",
      "en": "निम्नलिखित में कालक्रमानुसार संस्कृत आचार्यों का कौन-सा क्रम सही है?",
      "hi": "निम्नलिखित में कालक्रमानुसार संस्कृत आचार्यों का कौन-सा क्रम सही है?",
      "options": [
        "भामह, मम्मट, दण्डी, आनन्दवर्धन",
        "आनन्दवर्धन, भामह, मम्मट, दण्डी",
        "भामह, दण्डी, आनन्दवर्धन, मम्मट",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "भामह, दण्डी, आनन्दवर्धन, मम्मट",
      "explanation": "आचार्यों का ऐतिहासिक काल: भामह (छठी शताब्दी, काव्यालंकार), दण्डी (सातवीं शताब्दी, काव्यादर्श), आनन्दवर्धन (नौवीं शताब्दी, ध्वन्यालोक), मम्मट (ग्यारहवीं शताब्दी, काव्यप्रकाश)।परीक्षा सूत्र एवं ट्रिक्स: संस्कृत आचार्यों का सूत्र: भरतमुनि (2री सदी) -> भामह (6ठी) -> दण्डी (7वीं) -> वामन (8वीं) -> आनंदवर्धन (9वीं) -> अभिनवगुप्त (10वीं) -> मम्मट (11वीं) -> विश्वनाथ (14वीं) -> जगन्नाथ (17वीं)।",
      "tip": ""
    },
    {
      "id": 46,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | रस निष्पत्ति - व्याख्याकार",
      "en": "भरतमुनि के रस-सूत्र 'विभावानुभावव्यभिचारिसंयोगाद्रसनिष्पत्तिः' के व्याख्याकारों में 'उत्पत्तिवाद' (आरोपवाद) के प्रतिपादक कौन हैं?",
      "hi": "भरतमुनि के रस-सूत्र 'विभावानुभावव्यभिचारिसंयोगाद्रसनिष्पत्तिः' के व्याख्याकारों में 'उत्पत्तिवाद' (आरोपवाद) के प्रतिपादक कौन हैं?",
      "options": [
        "भट्ट लोल्लट",
        "शंकुक",
        "भट्टनायक",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "भट्ट लोल्लट",
      "explanation": "रस-सूत्र के चार प्रमुख व्याख्याकार हैं: 1. भट्ट लोल्लट (उत्पत्तिवाद / मीमांसा दर्शन), 2. शंकुक (अनुमितिवाद / न्याय दर्शन), 3. भट्टनायक (भुक्तिवाद / सांख्य दर्शन), 4. अभिनवगुप्त (अभिव्यक्तिवाद / शैव दर्शन)।परीक्षा सूत्र एवं ट्रिक्स: व्याख्याकार एवं दर्शन याद रखें: लोल्लट = उत्पत्ति (मीमांसा); शंकुक = अनुमिति (न्याय); भट्टनायक = भुक्ति (सांख्य); अभिनवगुप्त = अभिव्यक्ति (वेदांत/शैव)।",
      "tip": ""
    },
    {
      "id": 47,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | पारिभाषिक शब्दावली एवं शब्द-शक्ति",
      "en": "प्रशासनिक एवं वैज्ञानिक पारिभाषिक शब्दों का अर्थ किस शब्द-शक्ति में निहित रहता है?",
      "hi": "प्रशासनिक एवं वैज्ञानिक पारिभाषिक शब्दों का अर्थ किस शब्द-शक्ति में निहित रहता है?",
      "options": [
        "लक्षणा",
        "अभिधा",
        "व्यंजना",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "अभिधा",
      "explanation": "पारिभाषिक शब्दों का एक निश्चित, असंदिग्ध और परिसीमित सांकेतिक अर्थ होता है, जो सीधे मुख्यार्थ का बोध कराने वाली 'अभिधा शब्द-शक्ति' द्वारा ही व्यक्त होता है।परीक्षा सूत्र एवं ट्रिक्स: पारिभाषिक, वैज्ञानिक और कानूनी शब्दावली सदैव 'अभिधा' में होती है ताकि अर्थ में कोई द्वैत या भ्रांति न रहे।",
      "tip": ""
    },
    {
      "id": 48,
      "source": "BPSC Middle School Hindi-English - Advt. 22/2023 | अलंकार - उत्प्रेक्षा",
      "en": "“सोहत ओढ़े पीत पटु, श्याम सलौने गात। मनहु नीलमनि-सैल पर आतपु परयो प्रभात॥” उक्त दोहे में किस अलंकार का प्रयोग हुआ है?",
      "hi": "“सोहत ओढ़े पीत पटु, श्याम सलौने गात। मनहु नीलमनि-सैल पर आतपु परयो प्रभात॥” उक्त दोहे में किस अलंकार का प्रयोग हुआ है?",
      "options": [
        "उत्प्रेक्षा अलंकार",
        "विभावना अलंकार",
        "यमक अलंकार",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "उत्प्रेक्षा अलंकार",
      "explanation": "बिहारीलाल रचित इस दोहे में श्रीकृष्ण के श्यामल शरीर पर पीतांबर की तुलना नीलमणि पर्वत पर प्रातःकालीन धूप की संभावना से की गई है। वाचक शब्द 'मनहु' उत्प्रेक्षा की पहचान है।परीक्षा सूत्र एवं ट्रिक्स: उत्प्रेक्षा के वाचक शब्द: **मनु, मानो, जनु, जानो, मनहु, जनहु, ज्यों**।",
      "tip": ""
    },
    {
      "id": 49,
      "source": "BPSC Primary Teacher Question Booklet - Advt. 21/2023 | काव्यशास्त्र - ध्वनि संप्रदाय",
      "en": "'ध्वनि-सिद्धांत' (ध्वनि संप्रदाय) के प्रतिष्ठापक आचार्य कौन हैं?",
      "hi": "'ध्वनि-सिद्धांत' (ध्वनि संप्रदाय) के प्रतिष्ठापक आचार्य कौन हैं?",
      "options": [
        "आचार्य विश्वनाथ",
        "आचार्य आनंदवर्धन",
        "पण्डितराज जगन्नाथ",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "आचार्य आनंदवर्धन",
      "explanation": "नौवीं शताब्दी के कश्मीरी आचार्य आनंदवर्धन ने 'ध्वन्यालोक' ग्रंथ लिखकर 'काव्यस्यात्मा ध्वनिः' (ध्वनि ही काव्य की आत्मा है) के रूप में ध्वनि संप्रदाय की प्रतिष्ठा की।परीक्षा सूत्र एवं ट्रिक्स: संप्रदाय एवं प्रवर्तक: रस = भरतमुनि; अलंकार = भामह; रीति = वामन; ध्वनि = आनंदवर्धन; वक्रोक्ति = कुंतक; औचित्य = क्षेमेंद्र।",
      "tip": ""
    },
    {
      "id": 50,
      "source": "BPSC Principal Question Paper - Advt. 26/2023 | काव्यशास्त्र - वक्रोक्ति संप्रदाय",
      "en": "'वक्रोक्तिजीवितम्' ग्रंथ के रचनाकार कौन हैं?",
      "hi": "'वक्रोक्तिजीवितम्' ग्रंथ के रचनाकार कौन हैं?",
      "options": [
        "वामन",
        "भामह",
        "कुंतक",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "कुंतक",
      "explanation": "दसवीं-ग्यारहवीं शताब्दी के आचार्य कुंतक ने 'वक्रोक्तिजीवितम्' ग्रंथ की रचना कर वक्रोक्ति को काव्य का जीवन/आत्मा घोषित किया ('वक्रोक्तिः काव्यजीवितम्')।परीक्षा सूत्र एवं ट्रिक्स: कुंतक ने वक्रोक्ति के 6 भेद किए हैं: वर्णविन्यास, पदपूर्वार्ध, पदपरार्ध, वाक्य, प्रकरण और प्रबंध वक्रता।",
      "tip": ""
    },
    {
      "id": 51,
      "source": "BPSC Middle School Sanskrit Booklet | काव्यशास्त्र - मम्मट",
      "en": "'काव्यप्रकाश' नामक सुप्रसिद्ध काव्यशास्त्रीय ग्रंथ के रचयिता कौन हैं?",
      "hi": "'काव्यप्रकाश' नामक सुप्रसिद्ध काव्यशास्त्रीय ग्रंथ के रचयिता कौन हैं?",
      "options": [
        "मम्मट",
        "भामह",
        "दण्डी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "मम्मट",
      "explanation": "आचार्य मम्मट (11वीं शताब्दी) ने 'काव्यप्रकाश' की रचना की, जिसे ध्वनि-विरोधी मतों का खंडन करने वाला ध्वनि-प्रतिष्ठापक मानक ग्रंथ माना जाता है।परीक्षा सूत्र एवं ट्रिक्स: मम्मट का काव्य-लक्षण: 'तद्दोषौ शब्दार्थौ सगुणावनलंकृती पुनः क्वापि'।",
      "tip": ""
    },
    {
      "id": 52,
      "source": "BPSC Middle School Sanskrit Booklet | काव्यशास्त्र - विश्वनाथ",
      "en": "“वाक्यं रसात्मकं काव्यम्” (रसयुक्त वाक्य ही काव्य है) यह अमर काव्य-लक्षण किस आचार्य का है?",
      "hi": "“वाक्यं रसात्मकं काव्यम्” (रसयुक्त वाक्य ही काव्य है) यह अमर काव्य-लक्षण किस आचार्य का है?",
      "options": [
        "आचार्य भामह",
        "आचार्य मम्मट",
        "पण्डितराज जगन्नाथ",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "उपर्युक्त में से कोई नहीं",
      "explanation": "यह सुप्रसिद्ध लक्षण 14वीं शताब्दी के उत्कल (ओडिशा) के आचार्य विश्वनाथ का है, जो उनके ग्रंथ 'साहित्यदर्पण' के प्रथम परिच्छेद में मिलता है। विकल्प में विश्वनाथ न होने से (E) सही है।परीक्षा सूत्र एवं ट्रिक्स: वाक्यं रसात्मकं काव्यम् = विश्वनाथ (साहित्यदर्पण); रमणीयार्थप्रतिपादकः शब्दः काव्यम् = पण्डितराज जगन्नाथ (रसगंगाधर)।",
      "tip": ""
    },
    {
      "id": 53,
      "source": "BPSC Middle School Sanskrit Booklet | काव्यशास्त्र - जगन्नाथ",
      "en": "'रसगंगाधर' ग्रंथ के रचयिता पण्डितराज जगन्नाथ किस मुगल शासक के समकालीन थे?",
      "hi": "'रसगंगाधर' ग्रंथ के रचयिता पण्डितराज जगन्नाथ किस मुगल शासक के समकालीन थे?",
      "options": [
        "अकबर",
        "शाहजहाँ",
        "जहांगीर",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "शाहजहाँ",
      "explanation": "पण्डितराज जगन्नाथ 17वीं शताब्दी के अंतिम महान संस्कृत काव्यशास्त्री थे। वे मुगल सम्राट शाहजहाँ के राजदरबार में सम्मानित थे, जिन्होंने उन्हें 'पण्डितराज' की उपाधि दी थी।परीक्षा सूत्र एवं ट्रिक्स: पण्डितराज जगन्नाथ = शाहजहाँ के दरबारी कवि। प्रमुख ग्रंथ: 'रसगंगाधर', 'भामिनीविलास'।",
      "tip": ""
    },
    {
      "id": 54,
      "source": "BPSC Primary Teacher Question Booklet - Advt. 21/2023 | निबंध साहित्य - हजारी प्रसाद द्विवेदी",
      "en": "निम्नलिखित में से कौन-सा निबंध संग्रह आचार्य हजारी प्रसाद द्विवेदी का नहीं है?",
      "hi": "निम्नलिखित में से कौन-सा निबंध संग्रह आचार्य हजारी प्रसाद द्विवेदी का नहीं है?",
      "options": [
        "अशोक के फूल",
        "मजदूरी और प्रेम",
        "कुटज",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "मजदूरी और प्रेम",
      "explanation": "'मजदूरी और प्रेम' सरदार पूर्ण सिंह का सुप्रसिद्ध भावात्मक निबंध है। 'अशोक के फूल' (1948), 'कुटज' (1964), 'कल्पलता', और 'आलोक पर्व' हजारी प्रसाद द्विवेदी के निबंध हैं।परीक्षा सूत्र एवं ट्रिक्स: सरदार पूर्ण सिंह के केवल 6 प्रसिद्ध निबंध हैं: आचरण की सभ्यता, मजदूरी और प्रेम, सच्ची वीरता, पवित्रता, कन्यादान, अमेरिका का मस्त योगी वाल्ट व्हिटमैन।",
      "tip": ""
    },
    {
      "id": 55,
      "source": "BPSC Primary Teacher Question Booklet - Advt. 21/2023 | उपन्यास और उपन्यासकार",
      "en": "उपन्यास और उपन्यासकार का कौन-सा युग्म सही नहीं है?",
      "hi": "उपन्यास और उपन्यासकार का कौन-सा युग्म सही नहीं है?",
      "options": [
        "जुलूस - फणीश्वरनाथ रेणु",
        "अँधेरे बंद कमरे - नरेश मेहता",
        "नई पौध - कमलेश्वर",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "उपर्युक्त में से एक से अधिक",
      "explanation": "'अँधेरे बंद कमरे' मोहन राकेश का उपन्यास है (नरेश मेहता का नहीं) और 'नई पौध' नागार्जुन का उपन्यास है (कमलेश्वर का नहीं)। दो युग्म गलत होने के कारण विकल्प (D) सही है।परीक्षा सूत्र एवं ट्रिक्स: 'अँधेरे बंद कमरे' = मोहन राकेश; 'नई पौध' = नागार्जुन; 'जुलूस' = फणीश्वरनाथ रेणु। दो गलत युग्म होने से उत्तर (D) बनता है।\nखंड 3: भारतीय काव्यशास्त्र, रस, छंद, अलंकार एवं भाषा-विज्ञान (प्रश्न 56 से 80)",
      "tip": ""
    },
    {
      "id": 56,
      "source": "BPSC Primary Teacher Question Booklet - Advt. 21/2023 | काव्यशास्त्र - शब्द-शक्ति परिभाषा",
      "en": "वह शब्द-शक्ति जिसके द्वारा साक्षात् संकेतित या मुख्य अर्थ का सीधा ज्ञान होता है, उसे कहते हैं",
      "hi": "वह शब्द-शक्ति जिसके द्वारा साक्षात् संकेतित या मुख्य अर्थ का सीधा ज्ञान होता है, उसे कहते हैं",
      "options": [
        "अभिधा",
        "लक्षणा",
        "व्यंजना",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "अभिधा",
      "explanation": "मुख्यार्थ (वाच्यार्थ या साक्षात् संकेतित अर्थ) का बोध कराने वाले व्यापार को 'अभिधा शब्द-शक्ति' कहते हैं। मम्मट के अनुसार: 'स्याद्वाच्योऽर्थोऽभिधेयस्तदुच्यते'।परीक्षा सूत्र एवं ट्रिक्स: शब्द-शक्ति क्रम: 1. अभिधा (मुख्यार्थ / वाच्यार्थ), 2. लक्षणा (मुख्यार्थ बाधा पर लक्ष्यार्थ), 3. व्यंजना (गूढ़ व्यंग्यार्थ)।",
      "tip": ""
    },
    {
      "id": 57,
      "source": "BPSC Middle Teacher Question Booklet Hindi | काव्य विधा वर्गीकरण",
      "en": "मैथिलीशरण गुप्त की रचना 'यशोधरा' किस काव्य-विधा के अंतर्गत आती है?",
      "hi": "मैथिलीशरण गुप्त की रचना 'यशोधरा' किस काव्य-विधा के अंतर्गत आती है?",
      "options": [
        "महाकाव्य",
        "खण्डकाव्य",
        "चम्पू काव्य",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "चम्पू काव्य",
      "explanation": "मैथिलीशरण गुप्त द्वारा रचित 'यशोधरा' (1932 ई०) गद्य और पद्य के मिश्रित रूप में लिखी गई कृति है, अतः इसे शास्त्रीय दृष्टि से 'चम्पू काव्य' कहा जाता है।परीक्षा सूत्र एवं ट्रिक्स: गद्य-पद्य मयं काव्यं चम्पूरित्यभिधीयते। यशोधरा = चम्पू काव्य; रश्मिरथी = खण्डकाव्य; रामचरितमानस/कामायनी = महाकाव्य; बिहारी सतसई = मुक्तक काव्य।",
      "tip": ""
    },
    {
      "id": 58,
      "source": "BPSC Middle Teacher Question Booklet Hindi | आदिकाल - जैन साहित्यकार",
      "en": "इनमें से कौन आदिकालीन जैन साहित्यकार हैं?",
      "hi": "इनमें से कौन आदिकालीन जैन साहित्यकार हैं?",
      "options": [
        "चर्पट",
        "नरपतिनाल्ह",
        "नागार्जुन",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "उपर्युक्त में से कोई नहीं",
      "explanation": "चर्पट और नागार्जुन नाथ-साहित्य के सिद्ध/योगी हैं, तथा नरपतिनाल्ह रासो साहित्य (वीरगाथा) के कवि हैं। प्रमुख जैन साहित्यकार शालिभद्र सूरि, आसगु, जिनधर्म सूरि, स्वयंभू और पुष्पदंत हैं। अतः (E) सही है।परीक्षा सूत्र एवं ट्रिक्स: जैन कवि: शालिभद्र सूरि, जोइन्दु, रामसिंह, धनपाल, हेमचन्द्र; नाथ सिद्ध: चर्पट, जालंधर, नागार्जुन, गोरखनाथ।",
      "tip": ""
    },
    {
      "id": 59,
      "source": "BPSC Middle Teacher Question Booklet Hindi | कवि एवं काल सुमेलन",
      "en": "निम्नलिखित कवियों को उनके काल से सुमेलित करने पर कौन-सा युग्म सही है?",
      "hi": "निम्नलिखित कवियों को उनके काल से सुमेलित करने पर कौन-सा युग्म सही है?",
      "options": [
        "नाभादास - भक्तिकाल",
        "चन्दबरदाई - आदिकाल",
        "बदरीनारायण चौधरी 'प्रेमघन' - आधुनिक काल",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "उपर्युक्त में से एक से अधिक",
      "explanation": "चन्दबरदाई आदिकाल के कवि हैं; नाभादास ('भक्तमाल' के रचयिता) भक्तिकाल के हैं; तथा प्रेमघन आधुनिक काल (भारतेन्दु मंडल) के कवि हैं। तीनों सुमेलित होने से विकल्प (D) सही है।परीक्षा सूत्र एवं ट्रिक्स: जब प्रश्न में दो या तीन सही सुमेलित विकल्प मौजूद हों, तो BPSC उत्तर (D) 'More than one of the above' चुनना चाहिए।",
      "tip": ""
    },
    {
      "id": 60,
      "source": "BPSC Middle Teacher Question Booklet Hindi | उपन्यास एवं उपन्यासकार सुमेलन",
      "en": "उपन्यास 'त्यागपत्र' (1937 ई०) के लेखक कौन हैं?",
      "hi": "उपन्यास 'त्यागपत्र' (1937 ई०) के लेखक कौन हैं?",
      "options": [
        "प्रेमचंद",
        "जैनेन्द्र कुमार",
        "जयशंकर प्रसाद",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "जैनेन्द्र कुमार",
      "explanation": "'त्यागपत्र' मनोविश्लेषणवादी उपन्यासकार जैनेन्द्र कुमार का विख्यात उपन्यास है, जिसकी मुख्य पात्र 'मृणाल' के आत्मपीड़न का मनोवैज्ञानिक चित्रण किया गया है।परीक्षा सूत्र एवं ट्रिक्स: जैनेन्द्र के उपन्यास: परख (1929), सुनीता (1935), त्यागपत्र (1937), कल्याणी (1939), सुखदा, विवर्त, जयवर्धन।",
      "tip": ""
    },
    {
      "id": 61,
      "source": "BPSC Middle Teacher Question Booklet Hindi | आचार्य शुक्ल - आधुनिक काल नामकरण",
      "en": "आचार्य रामचंद्र शुक्ल ने हिन्दी साहित्य के इतिहास के आधुनिक काल का नामकरण किया है",
      "hi": "आचार्य रामचंद्र शुक्ल ने हिन्दी साहित्य के इतिहास के आधुनिक काल का नामकरण किया है",
      "options": [
        "आधुनिक काल",
        "स्वतंत्रता काल",
        "गद्यकाल",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "उपर्युक्त में से एक से अधिक",
      "explanation": "आचार्य शुक्ल ने दोहरा नामकरण करते हुए इस काल को प्रवृत्ति के आधार पर 'गद्यकाल' और सामान्य कालक्रम के आधार पर 'आधुनिक काल' दोनों कहा है। अतः विकल्प (D) सही है।परीक्षा सूत्र एवं ट्रिक्स: शुक्ल जी का दोहरा नामकरण: आदिकाल / वीरगाथा काल, पूर्व-मध्यकाल / भक्तिकाल, उत्तर-मध्यकाल / रीतिकाल, आधुनिक काल / गद्यकाल।",
      "tip": ""
    },
    {
      "id": 62,
      "source": "BPSC Middle Teacher Question Booklet Hindi | हिन्दी पत्रकारिता",
      "en": "इनमें से कौन प्रमुख साहित्यकार स्वतंत्रता सेनानी और निडर पत्रकार के रूप में अत्यधिक प्रसिद्ध हैं?",
      "hi": "इनमें से कौन प्रमुख साहित्यकार स्वतंत्रता सेनानी और निडर पत्रकार के रूप में अत्यधिक प्रसिद्ध हैं?",
      "options": [
        "सुदर्शन",
        "श्यामसुंदर दास",
        "गणेशशंकर विद्यार्थी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "गणेशशंकर विद्यार्थी",
      "explanation": "गणेशशंकर विद्यार्थी ने कानपुर से सुप्रसिद्ध राष्ट्रीय क्रांतिकारी साप्ताहिक पत्र 'प्रताप' (1913 ई०) का संपादन कर राष्ट्रीय आंदोलन और पत्रकारिता को नई दिशा दी थी।परीक्षा सूत्र एवं ट्रिक्स: 'प्रताप' पत्र (कानपुर) = गणेशशंकर विद्यार्थी; 'कर्मवीर' (जबलपुर) = माखनलाल चतुर्वेदी; 'मतवाला' (कलकत्ता) = निराला।",
      "tip": ""
    },
    {
      "id": 63,
      "source": "BPSC Middle Teacher Question Booklet Hindi | साहित्येतिहास ग्रंथ",
      "en": "'शिवसिंह सरोज' (1883 ई०) साहित्येतिहास ग्रंथ के लेखक कौन हैं?",
      "hi": "'शिवसिंह सरोज' (1883 ई०) साहित्येतिहास ग्रंथ के लेखक कौन हैं?",
      "options": [
        "शिवसिंह सेंगर",
        "मिश्रबंधु",
        "रामचंद्र शुक्ल",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "शिवसिंह सेंगर",
      "explanation": "'शिवसिंह सरोज' हिन्दी भाषा में किसी भारतीय विद्वान द्वारा लिखा गया हिन्दी साहित्य का प्रथम इतिहास ग्रंथ है, जिसमें लगभग 1,000 भाषा कवियों का जीवन-चरित्र दिया गया है।परीक्षा सूत्र एवं ट्रिक्स: हिन्दी में प्रथम इतिहास = शिवसिंह सरोज (शिवसिंह सेंगर); फ्रेंच भाषा में = गार्सा द तासी; अंग्रेजी में = जॉर्ज ग्रियर्सन।",
      "tip": ""
    },
    {
      "id": 64,
      "source": "BPSC Middle Teacher Question Booklet Hindi | कामायनी - अलंकार",
      "en": "“नील परिधान बीच सुकुमार, खुल रहा मृदुल अधखुला अंग। खिला हो ज्यों बिजली का फूल, मेघवन बीच गुलाबी रंग॥” उक्त पद्यांश में कौन-सा अलंकार है?",
      "hi": "“नील परिधान बीच सुकुमार, खुल रहा मृदुल अधखुला अंग। खिला हो ज्यों बिजली का फूल, मेघवन बीच गुलाबी रंग॥” उक्त पद्यांश में कौन-सा अलंकार है?",
      "options": [
        "उपमा",
        "उत्प्रेक्षा",
        "विरोधाभास",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "उत्प्रेक्षा",
      "explanation": "जयशंकर प्रसाद कृत 'कामायनी' के श्रद्धा सर्ग की इस पंक्ति में वाचक शब्द 'ज्यों' आया है और नीले वस्त्रों में श्रद्धा के सौंदर्य में मेघवन में बिजली के फूल की संभावना की गई है।परीक्षा सूत्र एवं ट्रिक्स: 'खिला हो ज्यों बिजली का फूल' में 'ज्यों' वाचक शब्द आने के कारण मुख्य अलंकार **उत्प्रेक्षा** है।",
      "tip": ""
    },
    {
      "id": 65,
      "source": "BPSC Middle Teacher Question Booklet Hindi | द्विवेदी युग - प्रियप्रवास",
      "en": "“दिवस का अवसान समीप था, गगन था कुछ लोहित हो चला। तरु-शिखा पर थी अब राजती, कमलिनी-कुल-वल्लभ की प्रभा॥” यह किस प्रसिद्ध महाकाव्य की प्रारंभिक पंक्ति है?",
      "hi": "“दिवस का अवसान समीप था, गगन था कुछ लोहित हो चला। तरु-शिखा पर थी अब राजती, कमलिनी-कुल-वल्लभ की प्रभा॥” यह किस प्रसिद्ध महाकाव्य की प्रारंभिक पंक्ति है?",
      "options": [
        "साकेत",
        "कामायनी",
        "प्रियप्रवास",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "प्रियप्रवास",
      "explanation": "यह अयोध्या सिंह उपाध्याय 'हरिऔध' विरचित 'प्रियप्रवास' (1914 ई० - 17 सर्ग) की प्रथम मंगलाचरण पंक्ति है, जिसे खड़ी बोली हिन्दी का प्रथम महाकाव्य माना जाता है।परीक्षा सूत्र एवं ट्रिक्स: खड़ी बोली का प्रथम महाकाव्य = प्रियप्रवास (हरिऔध); आधुनिक काल का सर्वश्रेष्ठ महाकाव्य = कामायनी (प्रसाद)।",
      "tip": ""
    },
    {
      "id": 66,
      "source": "BPSC Middle Teacher Question Booklet Hindi | रस सिद्धांत - विभाव",
      "en": "रस निष्पत्ति की प्रक्रिया में 'विभाव' का क्या स्वरूप है?",
      "hi": "रस निष्पत्ति की प्रक्रिया में 'विभाव' का क्या स्वरूप है?",
      "options": [
        "विभाव भाव के उद्बोध का कारण है",
        "विभाव स्थायीभाव है",
        "विभाव अनुभाव है",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "विभाव भाव के उद्बोध का कारण है",
      "explanation": "विभाव वे कारक, परिस्थितियां अथवा पात्र होते हैं जो सहृदय के हृदय में सुप्त स्थायी भावों को जागृत और उद्दीप्त करते हैं। इसके दो भेद हैं: आलंबन विभाव और उद्दीपन विभाव।परीक्षा सूत्र एवं ट्रिक्स: रस निष्पत्ति के अंग: स्थायी भाव (मन के मूल भाव); विभाव (भाव जागृत करने वाले कारण); अनुभाव (शारीरिक चेष्टाएं); संचारी भाव (क्षणिक भाव - 33)।",
      "tip": ""
    },
    {
      "id": 67,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | उपन्यास सुमेलन",
      "en": "'राग दरबारी' (1968 ई०) व्यंग्य उपन्यास के लेखक कौन हैं?",
      "hi": "'राग दरबारी' (1968 ई०) व्यंग्य उपन्यास के लेखक कौन हैं?",
      "options": [
        "मन्नू भंडारी",
        "कृष्णा सोबती",
        "श्रीलाल शुक्ल",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "श्रीलाल शुक्ल",
      "explanation": "'राग दरबारी' शिवपालगंज गांव की पृष्ठभूमि पर स्वतंत्र भारत की प्रशासनिक व्यवस्था और राजनीति के नैतिक पतन पर श्रीलाल शुक्ल का साहित्य अकादमी पुरस्कृत व्यंग्य उपन्यास है।परीक्षा सूत्र एवं ट्रिक्स: उपन्यास मिलान: राग दरबारी = श्रीलाल शुक्ल; आपका बंटी = मन्नू भंडारी; झूठा सच = यशपाल; जिन्दगीनामा = कृष्णा सोबती।",
      "tip": ""
    },
    {
      "id": 68,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | कहानी - उसने कहा था",
      "en": "फ्लैशबैक (पूर्वदीप्ति) तकनीक पर आधारित हिन्दी की पहली कालजयी कहानी 'उसने कहा था' (1915 ई०) के लेखक हैं",
      "hi": "फ्लैशबैक (पूर्वदीप्ति) तकनीक पर आधारित हिन्दी की पहली कालजयी कहानी 'उसने कहा था' (1915 ई०) के लेखक हैं",
      "options": [
        "चंद्रधर शर्मा 'गुलेरी'",
        "फणीश्वरनाथ रेणु",
        "भीष्म साहनी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "चंद्रधर शर्मा 'गुलेरी'",
      "explanation": "'सरस्वती' में जून 1915 में प्रकाशित 'उसने कहा था' कहानी के रचयिता पं० चंद्रधर शर्मा गुलेरी हैं। इसके अमर पात्र लहना सिंह, सूबेदारनी, और बोधा सिंह हैं।परीक्षा सूत्र एवं ट्रिक्स: गुलेरी जी ने केवल 3 कहानियाँ लिखकर अमरता प्राप्त की: सुखमय जीवन (1911), बुद्धू का काँटा (1914), उसने कहा था (1915)।",
      "tip": ""
    },
    {
      "id": 69,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | अलंकार - उपमा के अंग",
      "en": "'पीपर पात सरिस मन डोला' में 'उपमेय' क्या है?",
      "hi": "'पीपर पात सरिस मन डोला' में 'उपमेय' क्या है?",
      "options": [
        "पीपर पात",
        "मन",
        "डोला",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "मन",
      "explanation": "उपमा के चारों अंग: जिसकी उपमा दी जाए (उपमेय) = 'मन'; जिससे उपमा दी जाए (उपमान) = 'पीपर पात'; समानता बताने वाला शब्द (वाचक शब्द) = 'सरिस'; समान गुण (साधारण धर्म) = 'डोला'।परीक्षा सूत्र एवं ट्रिक्स: उपमेय = प्रस्तुत वस्तु (मन); उपमान = अप्रस्तुत प्रसिद्ध वस्तु (पीपल का पत्ता)।",
      "tip": ""
    },
    {
      "id": 70,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | अलंकार - विरोधाभास",
      "en": "“या अनुरागी चित्त की, गति समुझै नहिं कोई। ज्यों-ज्यों बूड़ै स्याम रंग, त्यों-त्यों उज्जलु होई॥” इसमें कौन-सा अलंकार है?",
      "hi": "“या अनुरागी चित्त की, गति समुझै नहिं कोई। ज्यों-ज्यों बूड़ै स्याम रंग, त्यों-त्यों उज्जलु होई॥” इसमें कौन-सा अलंकार है?",
      "options": [
        "रूपक",
        "उत्प्रेक्षा",
        "विरोधाभास",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "विरोधाभास",
      "explanation": "बिहारीलाल के इस दोहे में काले रंग (श्याम रंग) में डूबने से उज्ज्वल (सफेद/पवित्र) होने का प्रत्यक्ष विरोध दिखाया गया है, किंतु वास्तविक अर्थ श्रीकृष्ण की भक्ति में लीन होकर मन का निष्पाप होना है।परीक्षा सूत्र एवं ट्रिक्स: जहाँ आपाततः विरोध दिखाई दे किंतु गहराई में विचार करने पर वास्तविक विरोध न हो, वहाँ **विरोधाभास अलंकार** होता है।",
      "tip": ""
    },
    {
      "id": 71,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | अलंकार - उत्प्रेक्षा",
      "en": "“अति कटु वचन कहति कैकेई। मानहु लोन जरे पर देई॥” इसमें कौन-सा अलंकार है?",
      "hi": "“अति कटु वचन कहति कैकेई। मानहु लोन जरे पर देई॥” इसमें कौन-सा अलंकार है?",
      "options": [
        "विरोधाभास",
        "उत्प्रेक्षा",
        "रूपक",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "उत्प्रेक्षा",
      "explanation": "तुलसीदास रचित इस पंक्ति में कैकेयी के कड़वे वचनों में 'जले पर नमक छिड़कने' की संभावना की गई है। वाचक शब्द 'मानहु' उत्प्रेक्षा अलंकार का परिचायक है।परीक्षा सूत्र एवं ट्रिक्स: मानहु, जनहु, मनु, जनु देखते ही सीधे **उत्प्रेक्षा अलंकार** पर टिक करें।",
      "tip": ""
    },
    {
      "id": 72,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | अलंकार - उपमा",
      "en": "“मोम-सा तन घुल चुका अब, दीप-सा मन जल चुका अब।” इसमें कौन-सा अलंकार है?",
      "hi": "“मोम-सा तन घुल चुका अब, दीप-सा मन जल चुका अब।” इसमें कौन-सा अलंकार है?",
      "options": [
        "उत्प्रेक्षा",
        "उपमा",
        "रूपक",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "उपमा",
      "explanation": "महादेवी वर्मा रचित इस पंक्ति में तन की मोम से तथा मन की दीपक से सादृश्यमूलक तुलना 'सा' वाचक शब्द के द्वारा की गई है। अतः यहाँ पूर्णोपमा अलंकार है।परीक्षा सूत्र एवं ट्रिक्स: सा, सी, से, सम, सरिस, सदृश, समान = उपमा अलंकार के वाचक शब्द।",
      "tip": ""
    },
    {
      "id": 73,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | छंद शास्त्र - चौपाई",
      "en": "“अस कहि फिरि चितइ तेहि ओरा। सिय मुख ससि भय नयन चकोरा॥” इसमें किस छंद की योजना है?",
      "hi": "“अस कहि फिरि चितइ तेहि ओरा। सिय मुख ससि भय नयन चकोरा॥” इसमें किस छंद की योजना है?",
      "options": [
        "दोहा",
        "सोरठा",
        "चौपाई",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "चौपाई",
      "explanation": "यह 'रामचरितमानस' की पंक्ति है। चौपाई एक सम मात्रिक छंद है जिसके प्रत्येक चरण में 16-16 मात्राएँ होती हैं तथा चरण के अंत में जगण (।ऽ।) और तगण (ऽऽ।) का निषेध होता है।परीक्षा सूत्र एवं ट्रिक्स: चौपाई = 4 चरण, प्रत्येक में 16 मात्राएँ; दोहा = 13, 11 (अर्धसम); सोरठा = 11, 13 (दोहे का उलटा); रोला = 24 मात्राएँ (11, 13 यति)।",
      "tip": ""
    },
    {
      "id": 74,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | छंद शास्त्र - रोला",
      "en": "किस सम मात्रिक छंद के प्रत्येक चरण में 24 मात्राएँ होती हैं और ग्यारह तथा तेरह मात्राओं पर यति होती है?",
      "hi": "किस सम मात्रिक छंद के प्रत्येक चरण में 24 मात्राएँ होती हैं और ग्यारह तथा तेरह मात्राओं पर यति होती है?",
      "options": [
        "रोला",
        "दोहा",
        "गीतिका",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "रोला",
      "explanation": "'रोला' एक सम मात्रिक छंद है जिसके प्रत्येक चरण में 24 मात्राएँ होती हैं और 11 व 13 मात्राओं पर यति (विराम) होता है। दोहा अर्धसम मात्रिक छंद है।परीक्षा सूत्र एवं ट्रिक्स: रोला = 24 मात्राएँ (11+13 यति, सम मात्रिक); गीतिका = 26 मात्राएँ (14+12 यति); हरिगीतिका = 28 मात्राएँ (16+12 यति)।",
      "tip": ""
    },
    {
      "id": 75,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | काव्य-गुण",
      "en": "आचार्य मम्मट तथा आनंदवर्धन के अनुसार सामान्य रूप से काव्य-गुण के कितने मुख्य भेद स्वीकार किए गए हैं?",
      "hi": "आचार्य मम्मट तथा आनंदवर्धन के अनुसार सामान्य रूप से काव्य-गुण के कितने मुख्य भेद स्वीकार किए गए हैं?",
      "options": [
        "तीन",
        "पाँच",
        "सात",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "तीन",
      "explanation": "भरतमुनि और दण्डी ने 10 गुण माने थे, किंतु आचार्य भामह, आनंदवर्धन और मम्मट ने उनका परिष्कार कर तीन सर्वमान्य काव्य-गुण स्थापित किए: 1. माधुर्य, 2. ओज, 3. प्रसाद।परीक्षा सूत्र एवं ट्रिक्स: काव्य-गुण के 3 सर्वमान्य भेद: माधुर्य (श्रृंगार/करुण/शांत में), ओज (वीर/रौद्र/बीभत्स में), प्रसाद (सभी रसों में चित्त को शांत-प्रसन्न करने वाला)।",
      "tip": ""
    },
    {
      "id": 76,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | काव्य-गुण - ओज गुण",
      "en": "“इनकी गाथा छोड़ चलो, झाँसी के मैदानों में। जहाँ लड़ी थी लक्ष्मीबाई, मर्द बनी मर्दानों में॥” इसमें कौन-सा काव्य-गुण है?",
      "hi": "“इनकी गाथा छोड़ चलो, झाँसी के मैदानों में। जहाँ लड़ी थी लक्ष्मीबाई, मर्द बनी मर्दानों में॥” इसमें कौन-सा काव्य-गुण है?",
      "options": [
        "माधुर्य",
        "ओज",
        "प्रसाद",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "ओज",
      "explanation": "सुभद्रा कुमारी चौहान रचित इस पंक्ति में वीरोचित उत्साह, चित्त का दीप्तिकारक विस्तार और संयुक्ताक्षरों का प्रभाव है, जो 'ओज गुण' की स्पष्ट अभिव्यक्ति करता है।परीक्षा सूत्र एवं ट्रिक्स: वीर रस, रौद्र रस और युद्ध-वर्णन में सदैव **ओज गुण** पाया जाता है।",
      "tip": ""
    },
    {
      "id": 77,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | काव्य-गुण - माधुर्य गुण",
      "en": "“चारु चंद्र की चंचल किरणें, खेल रही थीं जल-थल में। स्वच्छ चाँदनी बिछी हुई है, अवनि और अम्बर तल में॥” इन पंक्तियों में किस काव्य-गुण की योजना है?",
      "hi": "“चारु चंद्र की चंचल किरणें, खेल रही थीं जल-थल में। स्वच्छ चाँदनी बिछी हुई है, अवनि और अम्बर तल में॥” इन पंक्तियों में किस काव्य-गुण की योजना है?",
      "options": [
        "माधुर्य",
        "ओज",
        "प्रसाद",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "माधुर्य",
      "explanation": "मैथिलीशरण गुप्त रचित 'पंचवटी' की इस पंक्ति में कोमलकांत पदावली, कर्णप्रिय अनुप्रास और चित्त को द्रवित करने वाली मधुरता है, जो 'माधुर्य गुण' का लक्षण है।परीक्षा सूत्र एवं ट्रिक्स: कोमल वर्णों (ट-वर्ग रहित), अनुस्वार और ललित पदावली से युक्त रचना में **माधुर्य गुण** होता है।",
      "tip": ""
    },
    {
      "id": 78,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | रस शास्त्र - रसों की संख्या",
      "en": "हिन्दी में संस्कृत के परम्परागत 9 रसों में परवर्ती आचार्यों द्वारा कितने नए रस जोड़कर 11 रस माने गए हैं?",
      "hi": "हिन्दी में संस्कृत के परम्परागत 9 रसों में परवर्ती आचार्यों द्वारा कितने नए रस जोड़कर 11 रस माने गए हैं?",
      "options": [
        "दो",
        "तीन",
        "चार",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "दो",
      "explanation": "संस्कृत में नवरस मान्य थे। परवर्ती आचार्यों (विश्वनाथ, रूपगोस्वामी आदि) ने 10वाँ 'वात्सल्य रस' (स्थायी भाव- वत्सलता) और 11वाँ 'भक्ति रस' (स्थायी भाव- भगवद्-विषयक रति) जोड़ा। अतः 2 नए रस जुड़े।परीक्षा सूत्र एवं ट्रिक्स: भरतमुनि = 8 रस; मम्मट/आनंदवर्धन = 9 रस (शांत रस जोड़कर); हिन्दी साहित्य = 11 रस (वात्सल्य और भक्ति रस जोड़कर)।",
      "tip": ""
    },
    {
      "id": 79,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | रस शास्त्र - शांत रस",
      "en": "शांत रस का स्थायी भाव क्या है?",
      "hi": "शांत रस का स्थायी भाव क्या है?",
      "options": [
        "करुण",
        "विस्मय",
        "निर्वेद",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "निर्वेद",
      "explanation": "संसार की असारता और तत्वज्ञान की प्राप्ति से उत्पन्न वैराग्य या मानसिक शांति का स्थायी भाव 'निर्वेद' (शम) कहलाता है, जिससे शांत रस की निष्पत्ति होती है।परीक्षा सूत्र एवं ट्रिक्स: स्थायी भाव सूची: श्रृंगार = रति; हास्य = हास; करुण = शोक; रौद्र = क्रोध; वीर = उत्साह; भयानक = भय; बीभत्स = जुगुप्सा; अद्भुत = विस्मय; शांत = निर्वेद; वात्सल्य = वत्सलता; भक्ति = भगवद्-रति।",
      "tip": ""
    },
    {
      "id": 80,
      "source": "BPSC Teacher TGT Hindi - Advt. 23/2023 | रस शास्त्र - भयानक रस",
      "en": "“बालधी बिसाल बिकराल ज्वाल-जाल मानों, लंक लीलिबे को काल रसना पसारी है।” इन पंक्तियों में किस रस का परिपाक हुआ है?",
      "hi": "“बालधी बिसाल बिकराल ज्वाल-जाल मानों, लंक लीलिबे को काल रसना पसारी है।” इन पंक्तियों में किस रस का परिपाक हुआ है?",
      "options": [
        "हास्य रस",
        "भयानक रस",
        "शांत रस",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "भयानक रस",
      "explanation": "तुलसीदास रचित 'कवितावली' के लंकादहन प्रसंग में हनुमान जी की अग्नि-प्रज्वलित विशाल पूँछ को देखकर लंकावासियों में मृत्यु और काल के विकराल भय का संचार होता है, अतः भयानक रस है।परीक्षा सूत्र एवं ट्रिक्स: विकराल ज्वाल, काल रसना, लंक लीलिबे = भयोत्पादक दृश्य, अतः यहाँ **भयानक रस** (और साथ में अद्भुत रस) का परिपाक है।\nBPSC TRE 4.0 हिन्दी (Part-III) : मास्टर उत्तर कुंजी (Master Answer Key Q.1 to Q.80)\nनीचे सभी 80 प्रश्नों के आधिकारिक उत्तर, संबंधित विषय खंड एवं प्रश्न संदर्भ की त्वरित सारणी दी गई है:\nप्रश्न सं०\nपाठ्यक्रम खंड (Unit)\nमूल साहित्यिक / व्याकरणिक संकल्पना\nआधिकारिक उत्तर\nप्र० 1\nइतिहास-लेखन परंपरा\nमिश्रबंधुओं (गणेशबिहारी, श्यामाबिहारी और शुकदेवबिहारी मिश्...\n(C)\nप्र० 2\nआदिकाल - रासो साहित्य\n'पृथ्वीराज रासो' के रचयिता चंदबरदाई हैं, जिन्हें आचार्य रा...\n(B)\nप्र० 3\nकाल-विभाजन एवं नामकरण\nप्रारंभिक काल को 'आदिकाल' नाम आचार्य हजारी प्रसाद द्विवेदी...\n(C)\nप्र० 4\nभक्तिकाल - समय-सीमा\nआचार्य शुक्ल ने काल-विभाजन संवत् में किया: आदिकाल (वीरगाथा...\n(B)\nप्र० 5\nसंत काव्य - कबीर\nयह प्रसिद्ध साखी ज्ञानाश्रयी निर्गुण संत काव्यधारा के प्रव...\n(A)\nप्र० 6\nसूफी काव्य - प्रेमाख्यानक\nमलिक मुहम्मद जायसी प्रेमाश्रयी निर्गुण सूफी काव्यधारा के प...\n(C)\nप्र० 7\nरामभक्ति काव्य\nरामभक्ति काव्यधारा के शीर्ष कवि तुलसीदास के नाम के पूर्व '...\n(B)\nप्र० 8\nरीतिकाल - नामकरण\nआचार्य रामचंद्र शुक्ल ने लक्षण-ग्रंथों की बहुलता और काव्य-...\n(C)\nप्र० 9\nभारतेन्दु युग - राष्ट्रभाषा\nआधुनिक हिन्दी साहित्य के जनक भारतेन्दु हरिश्चन्द्र ने अपने...\n(A)\nप्र० 10\nगद्य विधाएं - उपन्यास\n'गोदान' (1936 ई०) मुंशी प्रेमचंद द्वारा रचित यथार्थवादी उप...\n(B)\nप्र० 11\nवीर रस काव्य\n'हल्दीघाटी' (1937–1939) महाराणा प्रताप के शौर्य पर आधारित ...\n(B)\nप्र० 12\nनाट्य साहित्य - जयशंकर प्रसाद\n'ध्रुवस्वामिनी' (1933 ई०) जयशंकर प्रसाद का अंतिम और सर्वश्...\n(C)\nप्र० 13\nसाहित्यिक मूल्यांकन\nडॉ० जॉर्ज अब्राहम ग्रियर्सन ने अपने इतिहास ग्रंथ में भक्ति...\n(A)\nप्र० 14\nछायावाद - पंत\nसुमित्रानंदन पंत छायावाद के चार प्रमुख स्तंभों (प्रसाद, पं...\n(C)\nप्र० 15\nकहानी साहित्य\n'आकाशदीप' (1929 ई०) जयशंकर प्रसाद की प्रसिद्ध भावप्रधान एव...\n(A)\nप्र० 16\nद्विवेदी युगीन निबंध\nबाबू बालमुकुंद गुप्त ने 'भारत मित्र' पत्रिका में 'शिवशंभु ...\n(C)\nप्र० 17\nसिद्ध साहित्य - भाषा\nसिद्धों (84 सिद्धों) की अंतःसाधनात्मक अनुभूतियों और प्रतीक...\n(B)\nप्र० 18\nसिद्ध साहित्य - आदि कवि\n84 सिद्धों में सरहपा (सरहपाद / राहुलभद्र, 769 ई०) प्रथम सि...\n(C)\nप्र० 19\nआधुनिक कहानी - अज्ञेय\n'विपथगा' (1937 ई०) अज्ञेय जी का प्रथम कहानी संग्रह है\n(B)\nप्र० 20\nआदिकाल - विद्यापति\nमहाकवि विद्यापति के पिता का नाम 'गणपति ठाकुर' था, जो मिथिल...\n(E)\nप्र० 21\nभारतेन्दु युग - काव्य पंक्तियाँ\nयह प्रसिद्ध मंगलाचरण गीत भारतेन्दु हरिश्चन्द्र के मौलिक ना...\n(A)\nप्र० 22\nनाट्य साहित्य - एकांकी / रूपक\n'एक घूँट' (1930 ई०) को आधुनिक हिन्दी का प्रथम एकांकी और प्...\n(B)\nप्र० 23\nछायावादी काव्य पंक्तियाँ\nयह प्रसिद्ध जागरण गीत जयशंकर प्रसाद के काव्य-संग्रह 'लहर' ...\n(B)\nप्र० 24\nद्विवेदी युग - राष्ट्रकवि\n'भारत-भारती' (1912 ई०) मैथिलीशरण गुप्त द्वारा रचित राष्ट्र...\n(B)\nप्र० 25\nसमकालीन कविता आंदोलन\n1960 के दशक में प्रारंभ हुए 'अकविता आंदोलन' के प्रवर्तक जग...\n(D)\nप्र० 26\nकृष्णभक्ति शाखा - अष्टछाप\nगोस्वामी विट्ठलनाथ ने 1565 ई० में अपने पिता वल्लभाचार्य के...\n(B)\nप्र० 27\nआंचलिक उपन्यास - रेणु\n'मैला आँचल' (1954 ई० - पूर्णिया के मेरीगंज गांव की कथा) और...\n(D)\nप्र० 28\nराष्ट्रकवि दिनकर\n'कुरुक्षेत्र' (1946 ई०) राष्ट्रकवि रामधारी सिंह 'दिनकर' द्...\n(E)\nप्र० 29\nभाषा का ऐतिहासिक विकास\nअपभ्रंश के उत्तर रूप (अवहट्ठ) से आधुनिक भारतीय आर्यभाषाओं ...\n(C)\nप्र० 30\nभारतीय नाट्यशास्त्र - नायक भेद\nकाव्यशास्त्र में नायक के चार प्रमुख भेद हैं: 1. धीरोदात्त ...\n(B)\nप्र० 31\nइतिहास ग्रंथ - हजारी प्रसाद द्विवेदी\n'हिन्दी साहित्य की भूमिका' (1940), 'हिन्दी साहित्य का आदिक...\n(B)\nप्र० 32\nइतिहास ग्रंथ - रामकुमार वर्मा\nडॉ० रामकुमार वर्मा ने अपने ग्रंथ 'हिन्दी साहित्य का आलोचना...\n(A)\nप्र० 33\nइतिहास ग्रंथ - संत परंपरा\nपं० परशुराम चतुर्वेदी का ग्रंथ 'उत्तरी भारत की संत परम्परा...\n(A)\nप्र० 34\nइतिहास ग्रंथ - बच्चन सिंह\nडॉ० बच्चन सिंह ने 'हिन्दी साहित्य का दूसरा इतिहास' (1996) ...\n(A)\nप्र० 35\nइतिहास ग्रंथ - गणपतिचन्द्र गुप्त\nडॉ० गणपतिचन्द्र गुप्त ने 'हिन्दी साहित्य का वैज्ञानिक इतिह...\n(A)\nप्र० 36\nकाल-विभाजन - ग्रियर्सन\nडॉ० जॉर्ज अब्राहम ग्रियर्सन ने अपनी पुस्तक 'The Modern Ver...\n(C)\nप्र० 37\nअपभ्रंश एवं आधुनिक भाषाएँ\nब्राचड़ अपभ्रंश से 'सिन्धी' भाषा का विकास हुआ\n(C)\nप्र० 38\nरीतिकाल - असत्य कथन\nतीनों युग्म प्रामाणिक एवं सत्य हैं: शुक्ल जी ने 'रीतिकाल',...\n(E)\nप्र० 39\nआचार्य शुक्ल की इतिहास-दृष्टि\nआचार्य शुक्ल ने सिद्धों, नाथों और जैनियों की धार्मिक रचनाओ...\n(A)\nप्र० 40\nआदिकाल - चंदबरदाई की उपाधि\nमहाकवि चंदबरदाई को छप्पय छंद का बेजोड़ प्रयोग करने के कारण...\n(E)\nप्र० 41\nसंत काव्य - सुंदरदास\nदादू दयाल के शिष्य संत सुंदरदास संस्कृत, व्याकरण और काव्यश...\n(C)\nप्र० 42\nरासो शब्द की व्युत्पत्ति\nआचार्य शुक्ल ने 'बीसलदेव रासो' की पंक्ति 'बारह सै बहत्तोरा...\n(A)\nप्र० 43\nनिराला - रचना कालक्रम\nनिराला जी की कृतियों का प्रकाशन वर्ष: गीतिका (1936 ई०), अण...\n(C)\nप्र० 44\nकाव्यशास्त्र - शब्द-शक्ति (लक्षणा)\nजहाँ मुख्यार्थ का सर्वथा त्याग न होकर लक्ष्यार्थ के साथ उस...\n(B)\nप्र० 45\nसंस्कृत काव्यशास्त्र - आचार्य कालक्रम\nआचार्यों का ऐतिहासिक काल: भामह (छठी शताब्दी, काव्यालंकार),...\n(C)\nप्र० 46\nरस निष्पत्ति - व्याख्याकार\nरस-सूत्र के चार प्रमुख व्याख्याकार हैं: 1. भट्ट लोल्लट (उत...\n(A)\nप्र० 47\nपारिभाषिक शब्दावली एवं शब्द-शक्ति\nपारिभाषिक शब्दों का एक निश्चित, असंदिग्ध और परिसीमित सांके...\n(B)\nप्र० 48\nअलंकार - उत्प्रेक्षा\nबिहारीलाल रचित इस दोहे में श्रीकृष्ण के श्यामल शरीर पर पीत...\n(A)\nप्र० 49\nकाव्यशास्त्र - ध्वनि संप्रदाय\nनौवीं शताब्दी के कश्मीरी आचार्य आनंदवर्धन ने 'ध्वन्यालोक' ...\n(B)\nप्र० 50\nकाव्यशास्त्र - वक्रोक्ति संप्रदाय\nदसवीं-ग्यारहवीं शताब्दी के आचार्य कुंतक ने 'वक्रोक्तिजीवित...\n(C)\nप्र० 51\nकाव्यशास्त्र - मम्मट\nआचार्य मम्मट (11वीं शताब्दी) ने 'काव्यप्रकाश' की रचना की, ...\n(A)\nप्र० 52\nकाव्यशास्त्र - विश्वनाथ\nयह सुप्रसिद्ध लक्षण 14वीं शताब्दी के उत्कल (ओडिशा) के आचार...\n(E)\nप्र० 53\nकाव्यशास्त्र - जगन्नाथ\nपण्डितराज जगन्नाथ 17वीं शताब्दी के अंतिम महान संस्कृत काव्...\n(B)\nप्र० 54\nनिबंध साहित्य - हजारी प्रसाद द्विवेदी\n'मजदूरी और प्रेम' सरदार पूर्ण सिंह का सुप्रसिद्ध भावात्मक ...\n(B)\nप्र० 55\nउपन्यास और उपन्यासकार\n'अँधेरे बंद कमरे' मोहन राकेश का उपन्यास है (नरेश मेहता का ...\n(D)\nप्र० 56\nकाव्यशास्त्र - शब्द-शक्ति परिभाषा\nमुख्यार्थ (वाच्यार्थ या साक्षात् संकेतित अर्थ) का बोध करान...\n(A)\nप्र० 57\nकाव्य विधा वर्गीकरण\nमैथिलीशरण गुप्त द्वारा रचित 'यशोधरा' (1932 ई०) गद्य और पद्...\n(C)\nप्र० 58\nआदिकाल - जैन साहित्यकार\nचर्पट और नागार्जुन नाथ-साहित्य के सिद्ध/योगी हैं, तथा नरपत...\n(E)\nप्र० 59\nकवि एवं काल सुमेलन\nचन्दबरदाई आदिकाल के कवि हैं; नाभादास ('भक्तमाल' के रचयिता)...\n(D)\nप्र० 60\nउपन्यास एवं उपन्यासकार सुमेलन\n'त्यागपत्र' मनोविश्लेषणवादी उपन्यासकार जैनेन्द्र कुमार का ...\n(B)\nप्र० 61\nआचार्य शुक्ल - आधुनिक काल नामकरण\nआचार्य शुक्ल ने दोहरा नामकरण करते हुए इस काल को प्रवृत्ति ...\n(D)\nप्र० 62\nहिन्दी पत्रकारिता\nगणेशशंकर विद्यार्थी ने कानपुर से सुप्रसिद्ध राष्ट्रीय क्रा...\n(C)\nप्र० 63\nसाहित्येतिहास ग्रंथ\n'शिवसिंह सरोज' हिन्दी भाषा में किसी भारतीय विद्वान द्वारा ...\n(A)\nप्र० 64\nकामायनी - अलंकार\nजयशंकर प्रसाद कृत 'कामायनी' के श्रद्धा सर्ग की इस पंक्ति म...\n(B)\nप्र० 65\nद्विवेदी युग - प्रियप्रवास\nयह अयोध्या सिंह उपाध्याय 'हरिऔध' विरचित 'प्रियप्रवास' (191...\n(C)\nप्र० 66\nरस सिद्धांत - विभाव\nविभाव वे कारक, परिस्थितियां अथवा पात्र होते हैं जो सहृदय क...\n(A)\nप्र० 67\nउपन्यास सुमेलन\n'राग दरबारी' शिवपालगंज गांव की पृष्ठभूमि पर स्वतंत्र भारत ...\n(C)\nप्र० 68\nकहानी - उसने कहा था\n'सरस्वती' में जून 1915 में प्रकाशित 'उसने कहा था' कहानी के...\n(A)\nप्र० 69\nअलंकार - उपमा के अंग\nउपमा के चारों अंग: जिसकी उपमा दी जाए (उपमेय) = 'मन'; जिससे...\n(B)\nप्र० 70\nअलंकार - विरोधाभास\nबिहारीलाल के इस दोहे में काले रंग (श्याम रंग) में डूबने से...\n(C)\nप्र० 71\nअलंकार - उत्प्रेक्षा\nतुलसीदास रचित इस पंक्ति में कैकेयी के कड़वे वचनों में 'जले...\n(B)\nप्र० 72\nअलंकार - उपमा\nमहादेवी वर्मा रचित इस पंक्ति में तन की मोम से तथा मन की दी...\n(B)\nप्र० 73\nछंद शास्त्र - चौपाई\nयह 'रामचरितमानस' की पंक्ति है\n(C)\nप्र० 74\nछंद शास्त्र - रोला\n'रोला' एक सम मात्रिक छंद है जिसके प्रत्येक चरण में 24 मात्...\n(A)\nप्र० 75\nकाव्य-गुण\nभरतमुनि और दण्डी ने 10 गुण माने थे, किंतु आचार्य भामह, आनं...\n(A)\nप्र० 76\nकाव्य-गुण - ओज गुण\nसुभद्रा कुमारी चौहान रचित इस पंक्ति में वीरोचित उत्साह, चि...\n(B)\nप्र० 77\nकाव्य-गुण - माधुर्य गुण\nमैथिलीशरण गुप्त रचित 'पंचवटी' की इस पंक्ति में कोमलकांत पद...\n(A)\nप्र० 78\nरस शास्त्र - रसों की संख्या\nसंस्कृत में नवरस मान्य थे\n(A)\nप्र० 79\nरस शास्त्र - शांत रस\nसंसार की असारता और तत्वज्ञान की प्राप्ति से उत्पन्न वैराग्...\n(C)\nप्र० 80\nरस शास्त्र - भयानक रस\nतुलसीदास रचित 'कवितावली' के लंकादहन प्रसंग में हनुमान जी क...\n(B)",
      "tip": ""
    }
  ],
  "bpsc-tre4-qualifying-paper-40q": [
    {
      "id": 1,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "I have ______ so many good friends.",
      "hi": "I have ______ so many good friends.",
      "options": [
        "a",
        "an",
        "the",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "None of the above",
      "explanation": "The quantifier phrase 'so many' does not permit an article before it when qualifying plural countable nouns ('friends'). Hence, zero article is required.💡 Setter's",
      "tip": "Watch out for pre-determiners like 'so many' or 'too many'; they never take an article ('a/an/the') directly in front."
    },
    {
      "id": 2,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "I want to build ______ very big house.",
      "hi": "I want to build ______ very big house.",
      "options": [
        "a",
        "an",
        "the",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "a",
      "explanation": "The singular countable noun phrase 'very big house' begins with the consonant sound /v/, requiring the indefinite article 'a'.💡 Setter's",
      "tip": "Article choice depends strictly on the phonetic sound of the immediate next word; 'very' starts with a consonant sound, so use 'a'."
    },
    {
      "id": 3,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "Which of the following is not a part of a garden?",
      "hi": "Which of the following is not a part of a garden?",
      "options": [
        "Flowers",
        "Grass",
        "Wardrobe",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Wardrobe",
      "explanation": "Flowers and grass are typical outdoor garden elements, whereas a wardrobe is an indoor furniture unit designed for storing clothing.💡 Setter's",
      "tip": "For negative category questions ('not a part of...'), spot the domestic bedroom/indoor item that contradicts the outdoor domain."
    },
    {
      "id": 4,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "Which of the following is a part of railway station?",
      "hi": "Which of the following is a part of railway station?",
      "options": [
        "Platform",
        "Overbridge",
        "Arrival-Departure",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "More than one of the above",
      "explanation": "Platforms, pedestrian overbridges, and arrival-departure indicators/counters are all essential standard components of a railway station.💡 Setter's",
      "tip": "Whenever you verify that at least two individual options (A and B) are undeniably correct, immediately select Option (D)."
    },
    {
      "id": 5,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "The sixth letter in the alphabet after J will be",
      "hi": "The sixth letter in the alphabet after J will be",
      "options": [
        "G",
        "P",
        "O",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "P",
      "explanation": "Letter J is the 10th letter of the alphabet. Counting 6 positions forward: 10 + 6 = 16th letter, which is 'P' (K, L, M, N, O, P).💡 Setter's",
      "tip": "Convert letters to numbers (EJOTY: E=5, J=10, O=15, T=20, Y=25) to solve alphabet rank questions in 3 seconds without errors."
    },
    {
      "id": 6,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "In a zoo, ______ live in cages.",
      "hi": "In a zoo, ______ live in cages.",
      "options": [
        "birds",
        "animals",
        "snakes",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "More than one of the above",
      "explanation": "In a zoological garden, various fauna including birds (aviaries/cages), wild mammals, and snakes (glass cages/reptile houses) are housed in enclosed cages.💡 Setter's",
      "tip": "Do not rush to pick only (B) 'animals'; birds and reptiles are also zoo inmates kept in cages, triggering Option (D)."
    },
    {
      "id": 7,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "Daughter's daughter is",
      "hi": "Daughter's daughter is",
      "options": [
        "sibling",
        "niece",
        "cousin",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "None of the above",
      "explanation": "One's daughter's daughter is designated as a 'granddaughter' (maternal granddaughter). Since this specific term is not listed in (A), (B), or (C), option (E) is correct.💡 Setter's",
      "tip": "BPSC frequently tests kinships where the exact English term is missing from options (A, B, C); always check if (E) applies."
    },
    {
      "id": 8,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "My siblings are my",
      "hi": "My siblings are my",
      "options": [
        "cousins",
        "brothers and sisters",
        "in-laws",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "brothers and sisters",
      "explanation": "By definition, 'siblings' refers exclusively to brothers and sisters sharing one or both biological parents, excluding cousins and in-laws.💡 Setter's",
      "tip": "Remember: Sibling = Brother/Sister; Nephew/Niece = Sibling's child; Cousin = Uncle/Aunt's child."
    },
    {
      "id": 9,
      "source": "TRE 2 (Advt 22/2023)",
      "en": "Sarita is going to join as ______ BDO.",
      "hi": "Sarita is going to join as ______ BDO.",
      "options": [
        "the",
        "a",
        "an",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "a",
      "explanation": "The abbreviation BDO is pronounced as /biː.diː.oʊ/ with an initial consonant sound /b/, requiring the indefinite article 'a'.💡 Setter's",
      "tip": "Check the sound, not the alphabet letter: 'BDO' starts with consonant /b/ ('a BDO'), whereas 'SDO' starts with vowel sound /e/ ('an SDO')."
    },
    {
      "id": 10,
      "source": "TRE 2 (Advt 22/2023)",
      "en": "______ Washington Post is the most read newspaper in the USA.",
      "hi": "______ Washington Post is the most read newspaper in the USA.",
      "options": [
        "The",
        "A",
        "An",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "The",
      "explanation": "Renowned newspapers, periodicals, and historical publications universally require the definite article 'The' (e.g., The Washington Post, The Hindu).💡 Setter's",
      "tip": "Names of newspapers, ships, rivers, oceans, mountain ranges, and sacred scriptures mandatorily take 'The'."
    },
    {
      "id": 11,
      "source": "TRE 2 (Advt 24/2023)",
      "en": "There are 30 or 31 days in ______ month.",
      "hi": "There are 30 or 31 days in ______ month.",
      "options": [
        "the",
        "a",
        "an",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "a",
      "explanation": "The noun 'month' is singular countable and begins with consonant sound /m/. It refers to any calendar month in general, so 'a' is correct.💡 Setter's",
      "tip": "When a singular countable noun represents any member of a class without prior specification, use indefinite article 'a/an'."
    },
    {
      "id": 12,
      "source": "TRE 2 (Advt 24/2023)",
      "en": "My father is ______ engineer in the Water Works Department.",
      "hi": "My father is ______ engineer in the Water Works Department.",
      "options": [
        "the",
        "an",
        "a",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "an",
      "explanation": "The designation 'engineer' begins with a vowel sound /e/, requiring the indefinite article 'an' before profession titles.💡 Setter's",
      "tip": "Job titles in predicate positions after 'is/was' take 'a/an'; check vowel sound (engineer, architect -> an; teacher, doctor -> a)."
    },
    {
      "id": 13,
      "source": "TRE 2 (Advt 23/2023)",
      "en": "In this school, all ______ students are given free education.",
      "hi": "In this school, all ______ students are given free education.",
      "options": [
        "an",
        "a",
        "the",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "the",
      "explanation": "When 'all' refers to a specific, defined group of students within a stated institution ('this school'), it takes the definite article 'the'.💡 Setter's",
      "tip": "Standard grammar rule: 'All the + plural noun' defines a specific set of entities restricted by context."
    },
    {
      "id": 14,
      "source": "TRE 2 (Advt 23/2023)",
      "en": "I have a friend in Mumbai who is ______ actress.",
      "hi": "I have a friend in Mumbai who is ______ actress.",
      "options": [
        "a",
        "an",
        "the",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "an",
      "explanation": "The noun 'actress' begins with the open vowel phoneme /æ/, taking indefinite article 'an' to introduce the profession.💡 Setter's",
      "tip": "Always verify vowel sounds for feminine nouns: actress, authoress, empress take 'an'."
    },
    {
      "id": 15,
      "source": "BPSC TRE (Advt 10/2024)",
      "en": "Had we ______ punctual, we would have ______ the train.",
      "hi": "Had we ______ punctual, we would have ______ the train.",
      "options": [
        "been, caught",
        "were, boarded",
        "are, got",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "been, caught",
      "explanation": "This is an inverted third conditional ('Had + Subject + Past Participle (V3)... would have + V3'). Thus, 'Had we been... would have caught' is grammatically correct.💡 Setter's",
      "tip": "In conditional inversion: 'Had + Subject' strictly demands a past participle ('been'), never past tense ('were') or base form ('be').\nPART B: GENERAL HINDI (QUESTIONS 16 TO 40)\nनिर्देश: निम्नलिखित प्रत्येक प्रश्न में पाँच विकल्प (A), (B), (C), (D) उपर्युक्त में से एक से अधिक, और (E) उपर्युक्त में से कोई नहीं दिए गए हैं। सही विकल्प का चयन कीजिए।"
    },
    {
      "id": 16,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "'प्रत्युत्तर' शब्द में कौन-सी संधि है?",
      "hi": "'प्रत्युत्तर' शब्द में कौन-सी संधि है?",
      "options": [
        "वृद्धि संधि",
        "अयादि संधि",
        "यण संधि",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "यण संधि",
      "explanation": "'प्रति + उत्तर = प्रत्युत्तर'। नियमानुसार जब इ/ई के बाद कोई असमान स्वर आता है, तो इ/ई का 'य्' हो जाता है, जो यण संधि का विशिष्ट लक्षण है।💡 Setter's",
      "tip": "जब भी 'य' अथवा 'व' से पहले कोई आधा (स्वरहीन) व्यंजन दिखाई दे (जैसे प्रत्युत्तर में 'त्य'), तो 95% मामलों में यण संधि होती है।"
    },
    {
      "id": 17,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "'मनोरंजन' शब्द का संधि-विच्छेद होगा",
      "hi": "'मनोरंजन' शब्द का संधि-विच्छेद होगा",
      "options": [
        "मनः + रंजन",
        "मनो + रंजन",
        "मन + रंजन",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "मनः + रंजन",
      "explanation": "विसर्ग संधि के नियमानुसार यदि विसर्ग (:) से पूर्व 'अ' हो तथा बाद में किसी वर्ग का 3/4/5 वर्ण या य, र, ल, व, ह हो, तो विसर्ग 'ओ' में परिवर्तित हो जाता है (मनः + रंजन = मनोरंजन)।💡 Setter's",
      "tip": "'ओ' की मात्रा वाले तत्सम शब्दों (मनोरंजन, यशोदा, तपोवन, मनोहर) का विच्छेद प्रायः विसर्ग (मनः+, यशः+, तपः+) से होता है।"
    },
    {
      "id": 18,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "विराम चिह्न ';' को क्या कहते हैं?",
      "hi": "विराम चिह्न ';' को क्या कहते हैं?",
      "options": [
        "अल्प-विराम",
        "अर्ध-विराम",
        "योजक-चिह्न",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "अर्ध-विराम",
      "explanation": "चिह्न ';' को 'अर्ध-विराम' (Semicolon) कहा जाता है। अल्प-विराम ',' तथा योजक-चिह्न '-' होता है।💡 Setter's",
      "tip": "विराम चिह्न याद रखें: अल्पविराम = , (सबसे कम ठहराव); अर्धविराम = ; (अल्पविराम से अधिक ठहराव); पूर्णविराम = । (पूर्ण ठहराव)।"
    },
    {
      "id": 19,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "हिन्दी शब्दकोश में, निम्नलिखित में से कौन-सा शब्द सबसे पहले आता है?",
      "hi": "हिन्दी शब्दकोश में, निम्नलिखित में से कौन-सा शब्द सबसे पहले आता है?",
      "options": [
        "शिष्टाचार",
        "श्लाघा",
        "श्रेय",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "शिष्टाचार",
      "explanation": "वर्णक्रम में 'श' के बाद स्वर 'इ' (शि) आता है, जबकि 'श्लाघा' (श्+ल) और 'श्रेय' (श्+र) में संयुक्त व्यंजन हैं जो स्वरों के बाद आते हैं।💡 Setter's",
      "tip": "शब्दकोश नियम: स्वर-युक्त वर्ण (अ, आ, इ, ई आदि) संयुक्त वर्णों (क्+, च्+, श्+) से पहले आते हैं।"
    },
    {
      "id": 20,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "'व्यास' शब्द का विलोम है",
      "hi": "'व्यास' शब्द का विलोम है",
      "options": [
        "समास",
        "समर्थन",
        "प्रावधान",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "समास",
      "explanation": "'व्यास' का शाब्दिक अर्थ विस्तार या फैलाना होता है, जिसका सटीक विलोम 'समास' (संक्षेप या संक्षिप्तीकरण) होता है।💡 Setter's",
      "tip": "शैलीगत विलोम युग्म याद रखें: 'व्यास शैली' (विस्तृत व्याख्या) का विलोम सदैव 'समास शैली' (संक्षिप्त रूप) होता है।"
    },
    {
      "id": 21,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "हिन्दी में प्रचलित विदेशी भाषा और उसके शब्द का कौन-सा युग्म सही नहीं है?",
      "hi": "हिन्दी में प्रचलित विदेशी भाषा और उसके शब्द का कौन-सा युग्म सही नहीं है?",
      "options": [
        "अरबी - अदब",
        "तुर्की - अमरूद",
        "फारसी - आज़ादी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "तुर्की - अमरूद",
      "explanation": "'अमरूद' फ़ारसी भाषा का शब्द है, तुर्की का नहीं। अतः युग्म (B) गलत है। 'अदब' अरबी और 'आज़ादी' फ़ारसी शब्द हैं।💡 Setter's",
      "tip": "तुर्की के प्रसिद्ध शब्द हैं: तोप, बंदूक, कैंची, चाकू, बेगम, कुली, तलाश; फल-संबंधी शब्द जैसे अमरूद, अनार, बादाम फ़ारसी हैं।"
    },
    {
      "id": 22,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "'मगही' किस उपभाषा की बोली है?",
      "hi": "'मगही' किस उपभाषा की बोली है?",
      "options": [
        "बिहारी",
        "पूर्वी हिन्दी",
        "पहाड़ी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "बिहारी",
      "explanation": "मगही, भोजपुरी और मैथिली तीनों बोलियाँ 'बिहारी हिन्दी' उपभाषा वर्ग (मागधी अपभ्रंश से विकसित) के अंतर्गत आती हैं।💡 Setter's",
      "tip": "बिहारी हिन्दी की त्रिमूर्ति याद रखें = MMB (मगही, मैथिली, भोजपुरी); पूर्वी हिन्दी = ABC (अवधी, बघेली, छत्तीसगढ़ी)।"
    },
    {
      "id": 23,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "\"पाठक के भावबोध को सरल और सुबोध बनाने के लिए ______ का प्रयोग होता है।\"",
      "hi": "\"पाठक के भावबोध को सरल और सुबोध बनाने के लिए ______ का प्रयोग होता है।\"",
      "options": [
        "प्रश्न-चिह्नों",
        "योजक-चिह्नों",
        "विराम चिह्नों",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "विराम चिह्नों",
      "explanation": "वाक्य में विचारों के ठहराव, उतार-चढ़ाव और अर्थ की स्पष्टता बनाए रखने के लिए विराम चिह्नों का प्रयोग आवश्यक होता है।💡 Setter's",
      "tip": "व्याकरणिक परिभाषा: 'भावबोध को स्पष्ट व सुबोध करने वाले सभी चिह्नों की सामूहिक संज्ञा 'विराम चिह्न' है।"
    },
    {
      "id": 24,
      "source": "TRE 1 (Advt 21/2023)",
      "en": "कौन-सा विकल्प विराम चिह्न का भेद नहीं है?",
      "hi": "कौन-सा विकल्प विराम चिह्न का भेद नहीं है?",
      "options": [
        "अर्ध-विराम",
        "मध्य-विराम",
        "अंत्य-विराम",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "उपर्युक्त में से एक से अधिक",
      "explanation": "प्रामाणिक हिन्दी व्याकरण में 'मध्य-विराम' और 'अंत्य-विराम' नाम से कोई विराम चिह्न नहीं होता। चूंकि दो विकल्प अमानक हैं, अतः (D) सही है।💡 Setter's",
      "tip": "BPSC में जब दो विकल्प गलत या असत्य पाए जाएँ, तो 'उपर्युक्त में से एक से अधिक' (Option D) सही उत्तर बनता है।"
    },
    {
      "id": 25,
      "source": "TRE 2 (Advt 22/2023)",
      "en": "'भाषा' शब्द संस्कृत की किस धातु से बना है?",
      "hi": "'भाषा' शब्द संस्कृत की किस धातु से बना है?",
      "options": [
        "भाश से",
        "भाष्य से",
        "भाष से",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "भाष से",
      "explanation": "'भाषा' शब्द संस्कृत की 'भाष्' (भाष) धातु में 'टाप्' (आ) प्रत्यय लगने से बना है, जिसका अर्थ है 'व्यक्त वाणी' या बोलना।💡 Setter's",
      "tip": "संस्कृत मूल धातु में मूर्धन्य 'ष' हलंतयुक्त होता है; 'श' या 'भाष्य' वाले विकल्पों को सीधे खारिज करें।"
    },
    {
      "id": 26,
      "source": "TRE 2 (Advt 22/2023)",
      "en": "कौन-सी बोली 'मध्य पहाड़ी हिन्दी' उपभाषा के अंतर्गत आती है?",
      "hi": "कौन-सी बोली 'मध्य पहाड़ी हिन्दी' उपभाषा के अंतर्गत आती है?",
      "options": [
        "लहंदा",
        "नेपाली",
        "गढ़वाली",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "गढ़वाली",
      "explanation": "पहाड़ी उपभाषा वर्ग में मध्य पहाड़ी के अंतर्गत गढ़वाली और कुमाऊँनी बोलियाँ आती हैं। नेपाली पूर्वी पहाड़ी के अंतर्गत आती है।💡 Setter's",
      "tip": "पहाड़ी हिन्दी वर्गीकरण: पश्चिमी पहाड़ी (हिमाचली), मध्य पहाड़ी (गढ़वाली + कुमाऊँनी), पूर्वी पहाड़ी (नेपाली)।"
    },
    {
      "id": 27,
      "source": "TRE 2 (Advt 22/2023)",
      "en": "'कन्नौजी' किस उपभाषा की बोली है?",
      "hi": "'कन्नौजी' किस उपभाषा की बोली है?",
      "options": [
        "पूर्वी हिन्दी",
        "पश्चिमी हिन्दी",
        "बिहारी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "पश्चिमी हिन्दी",
      "explanation": "शौरसेनी अपभ्रंश से विकसित पश्चिमी हिन्दी की पाँच प्रमुख बोलियाँ हैं: खड़ी बोली, ब्रजभाषा, हरियाणवी, बुंदेली और कन्नौजी।💡 Setter's",
      "tip": "पश्चिमी हिन्दी ट्रिक: 'काबू बरखा' -> का (कन्नौजी), बु (बुंदेली), ब (ब्रज), र (रांगड़ी/हरियाणवी), खा (खड़ी बोली)।"
    },
    {
      "id": 28,
      "source": "TRE 2 (Advt 22/2023)",
      "en": "राजस्थानी उपभाषांतर्गत कितनी बोलियाँ आती हैं?",
      "hi": "राजस्थानी उपभाषांतर्गत कितनी बोलियाँ आती हैं?",
      "options": [
        "छः",
        "पाँच",
        "चार",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "चार",
      "explanation": "राजस्थानी उपभाषा के अंतर्गत चार प्रमुख बोलियाँ मानी जाती हैं: मारवाड़ी (पश्चिमी), जयपुरी/ढूँढाड़ी (पूर्वी), मेवाती (उत्तरी), और मालवी (दक्षिणी)।💡 Setter's",
      "tip": "राजस्थानी के चार दिशा-कोण: उत्तर=मेवाती, दक्षिण=मालवी, पूर्व=जयपुरी, पश्चिम=मारवाड़ी।"
    },
    {
      "id": 29,
      "source": "TRE 2 (Advt 22/2023)",
      "en": "खड़ी बोली को 'Artificial Dialect' (कृत्रिम बोली) किसने कहा है?",
      "hi": "खड़ी बोली को 'Artificial Dialect' (कृत्रिम बोली) किसने कहा है?",
      "options": [
        "जॉर्ज अब्राहम ग्रियर्सन",
        "गिलक्राइस्ट",
        "गार्सा द तासी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "जॉर्ज अब्राहम ग्रियर्सन",
      "explanation": "डॉ. जॉर्ज अब्राहम ग्रियर्सन ने अपने भाषा सर्वेक्षण 'Linguistic Survey of India' में खड़ी बोली के साहित्यिक गद्य रूप को कृत्रिम बोली (Artificial Dialect) कहा था।💡 Setter's",
      "tip": "अंग्रेजी शब्दावली युक्त भाषावैज्ञानिक टिप्पणियों में ग्रियर्सन और गिलक्राइस्ट प्रमुख हैं; 'Artificial Dialect' ग्रियर्सन का कथन है।"
    },
    {
      "id": 30,
      "source": "TRE 2 (Advt 22/2023)",
      "en": "निम्नलिखित में से कौन-सा शुद्ध शब्द है?",
      "hi": "निम्नलिखित में से कौन-सा शुद्ध शब्द है?",
      "options": [
        "अंत्याक्षरी",
        "अनत्याक्षरी",
        "अंताक्षरी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "अंत्याक्षरी",
      "explanation": "संधि नियमानुसार 'अंत्य + अक्षरी' के मेल से शुद्ध वर्तनी 'अंत्याक्षरी' बनती है। बोलचाल में प्रयुक्त 'अंताक्षरी' अशुद्ध रूप है।💡 Setter's",
      "tip": "शुद्ध वर्तनी परीक्षण में मूल संधि को पहचानें: अंत्य (अंतिम वर्ण) + अक्षरी = अंत्याक्षरी।"
    },
    {
      "id": 31,
      "source": "TRE 2 (Advt 22/2023)",
      "en": "'नवोढ़ा' का संधि-विच्छेद है",
      "hi": "'नवोढ़ा' का संधि-विच्छेद है",
      "options": [
        "नवो + ढ़ा",
        "नव + उढ़ा",
        "नव + ऊढ़ा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "उपर्युक्त में से कोई नहीं",
      "explanation": "'नवोढ़ा' का वास्तविक गुण संधि विच्छेद 'नव + ऊढ़ा' (दीर्घ ऊ) होता है। मूल प्रश्न पत्र में सही वर्तनी वाला विकल्प न होने के कारण आधिकारिक उत्तर (E) मान्य हुआ।💡 Setter's",
      "tip": "ध्यान दें: ऊढ़ा में 'ऊ' दीर्घ होता है। यदि विकल्प में 'उढ़ा' (ह्रस्व उ) दिया गया हो, तो वह अमान्य होकर (E) बनता है।"
    },
    {
      "id": 32,
      "source": "TRE 2 (Advt 22/2023)",
      "en": "'पारितोषिक' किस शब्द का पर्यायवाची है?",
      "hi": "'पारितोषिक' किस शब्द का पर्यायवाची है?",
      "options": [
        "इनाम",
        "कबूतर",
        "पत्थर",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "इनाम",
      "explanation": "'पारितोषिक' का अर्थ किसी उत्कृष्ट कार्य या प्रतियोगिता में प्राप्त पुरस्कार, पारितोष या इनाम होता है।💡 Setter's",
      "tip": "शब्द निर्माण: परितोष (संतुष्टि/आनंद) + इक = पारितोषिक (प्रसन्नतापूर्वक दिया जाने वाला पुरस्कार/इनाम)।"
    },
    {
      "id": 33,
      "source": "TRE 2 (Advt 22/2023)",
      "en": "भारत की प्राचीन भारतीय आर्यभाषा है",
      "hi": "भारत की प्राचीन भारतीय आर्यभाषा है",
      "options": [
        "संस्कृत",
        "पालि",
        "तमिल",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "संस्कृत",
      "explanation": "प्राचीन भारतीय आर्यभाषा काल (1500 ई.पू. से 500 ई.पू.) में वैदिक संस्कृत और लौकिक संस्कृत प्रचलित थी। तमिल द्रविड़ परिवार की भाषा है।💡 Setter's",
      "tip": "आर्यभाषा कालक्रम: प्राचीन = संस्कृत; मध्यकालीन = पालि, प्राकृत, अपभ्रंश; आधुनिक = हिन्दी व आधुनिक आर्यभाषाएँ।"
    },
    {
      "id": 34,
      "source": "TRE 2 (Advt 22/2023)",
      "en": "\"रोहित अमेरिका में नौकरी करना चाहता है।\" वाक्य में प्रयुक्त क्रिया का स्वरूप है",
      "hi": "\"रोहित अमेरिका में नौकरी करना चाहता है।\" वाक्य में प्रयुक्त क्रिया का स्वरूप है",
      "options": [
        "इच्छाबोधक क्रिया",
        "अभ्यासबोधक क्रिया",
        "शक्तिबोधक क्रिया",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "इच्छाबोधक क्रिया",
      "explanation": "जिस संयुक्त क्रिया में मुख्य क्रिया के साथ 'चाहना' क्रिया जुड़कर कर्ता की इच्छा या आकांक्षा को व्यक्त करे, उसे 'इच्छाबोधक संयुक्त क्रिया' कहते हैं।💡 Setter's",
      "tip": "पहचान: मुख्य क्रिया + 'चाहना' (करना चाहता है, पढ़ना चाहता है) = सदैव इच्छाबोधक क्रिया।"
    },
    {
      "id": 35,
      "source": "TRE 2 (Advt 22/2023)",
      "en": "संविधान सभा द्वारा हिन्दी को भारत की राजभाषा के रूप में कब स्वीकार किया गया?",
      "hi": "संविधान सभा द्वारा हिन्दी को भारत की राजभाषा के रूप में कब स्वीकार किया गया?",
      "options": [
        "26 नवम्बर, 1949",
        "26 जनवरी, 1950",
        "14 सितम्बर, 1949",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "14 सितम्बर, 1949",
      "explanation": "संविधान सभा ने 14 सितम्बर 1949 को भारतीय संविधान के अनुच्छेद 343(1) के अंतर्गत हिन्दी को संघ की राजभाषा और देवनागरी को लिपि घोषित किया।💡 Setter's",
      "tip": "14 सितम्बर को ही पूरे भारत में 'हिन्दी दिवस' मनाया जाता है; 26 नवम्बर = संविधान अंगीकार दिवस; 26 जनवरी = लागू दिवस।"
    },
    {
      "id": 36,
      "source": "TRE 2 (Advt 24/2023)",
      "en": "जिन शब्दों पर लिंग, वचन, कारक का कोई प्रभाव न पड़े, वे कहलाते हैं",
      "hi": "जिन शब्दों पर लिंग, वचन, कारक का कोई प्रभाव न पड़े, वे कहलाते हैं",
      "options": [
        "व्यय",
        "विकारी",
        "अविकारी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "अविकारी",
      "explanation": "जिन शब्दों के मूल रूप में लिंग, वचन, कारक या काल के कारण कोई विकार (परिवर्तन) नहीं होता, उन्हें 'अविकारी शब्द' या 'अव्यय' कहा जाता है।💡 Setter's",
      "tip": "विकारी = संज्ञा, सर्वनाम, विशेषण, क्रिया (बदलते हैं); अविकारी/अव्यय = क्रियाविशेषण, समुच्चयबोधक, संबंधबोधक, विस्मयादिबोधक (स्थिर रहते हैं)।"
    },
    {
      "id": 37,
      "source": "TRE 2 (Advt 24/2023)",
      "en": "\"जसोदा हरि पालनै झुलावै। हलरावै दुलराइ मल्हावैं, जोइ-सोइ कछु गावैं॥\" उक्त काव्य-पंक्तियों में कौन-सा रस है?",
      "hi": "\"जसोदा हरि पालनै झुलावै। हलरावै दुलराइ मल्हावैं, जोइ-सोइ कछु गावैं॥\" उक्त काव्य-पंक्तियों में कौन-सा रस है?",
      "options": [
        "श्रृंगार",
        "वीर",
        "वात्सल्य",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "वात्सल्य",
      "explanation": "सूरदास रचित इन पंक्तियों में माता यशोदा का बाल कृष्ण के प्रति मातृ-स्नेह व ममत्व अभिव्यक्त हुआ है, जिसका स्थायी भाव 'वत्सलता' है।💡 Setter's",
      "tip": "शिशु की क्रीड़ा, पालना झुलाना, लोरी गाना या माँ-बेटे का स्नेह दृश्य सीधे 'वात्सल्य रस' को इंगित करता है।"
    },
    {
      "id": 38,
      "source": "TRE 2 (Advt 23/2023)",
      "en": "निम्नलिखित में से कौन-सा 'प्रत्यय-रहित' शब्द है?",
      "hi": "निम्नलिखित में से कौन-सा 'प्रत्यय-रहित' शब्द है?",
      "options": [
        "झुकाव",
        "भावविह्वल",
        "उल्लेखनीय",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "भावविह्वल",
      "explanation": "'झुकाव' में 'आव' प्रत्यय है; 'उल्लेखनीय' में 'अनीय' प्रत्यय है; 'भावविह्वल' दो स्वतंत्र शब्दों (भाव + विह्वल) का सामासिक पद है, इसमें कोई प्रत्यय नहीं है।💡 Setter's",
      "tip": "शब्द विग्रह करें: यदि दोनों खंड स्वतंत्र सार्थक शब्द हैं और अंत में कोई शब्दांश नहीं है, तो वह यौगिक/सामासिक पद है, प्रत्यय-युक्त नहीं।"
    },
    {
      "id": 39,
      "source": "TRE 2 (Advt 23/2023)",
      "en": "'अल्पप्राण' ध्वनि कौन-सी है?",
      "hi": "'अल्पप्राण' ध्वनि कौन-सी है?",
      "options": [
        "ख",
        "च",
        "छ",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "च",
      "explanation": "प्रत्येक स्पर्श व्यंजन वर्ग का 1ला, 3रा और 5वाँ वर्ण 'अल्पप्राण' होता है। 'च' च-वर्ग का प्रथम वर्ण है, जबकि 'ख' व 'छ' द्वितीय वर्ण (महाप्राण) हैं।💡 Setter's",
      "tip": "ध्वनि सूत्र: अल्पप्राण = विषम वर्ण (1, 3, 5) + अंतःस्थ (य, र, ल, व); महाप्राण = सम वर्ण (2, 4) + ऊष्म (श, ष, स, ह)।"
    },
    {
      "id": 40,
      "source": "TRE 2 (Advt 23/2023)",
      "en": "\"उदित उदयगिरि मंच पर रघुवर बाल पतंग। बिकसे संत सरोज सब हरषे लोचन भृंग॥\" उपर्युक्त दोहे में कौन-सा अलंकार है?",
      "hi": "\"उदित उदयगिरि मंच पर रघुवर बाल पतंग। बिकसे संत सरोज सब हरषे लोचन भृंग॥\" उपर्युक्त दोहे में कौन-सा अलंकार है?",
      "options": [
        "रूपक",
        "उपमा",
        "उत्प्रेक्षा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "रूपक",
      "explanation": "यहाँ मंच पर उदयगिरि का, रघुवर पर बाल सूर्य का, संतों पर सरोज (कमल) का तथा लोचनों पर भृंग (भ्रमर) का अभेद आरोप किया गया है, अतः रूपक अलंकार है।💡 Setter's",
      "tip": "जहाँ उपमेय और उपमान के बीच कोई वाचक शब्द (सा, सी, सरिस, सम, जनु, मनु) न हो और दोनों को एक मान लिया जाए, वहाँ 'रूपक' होता है।\nMASTER ANSWER KEY & QUESTION MAPPING\nQuick-reference matrix of all 40 questions with source mapping and official answer keys:\nQ. No.\nExam Origin\nTopic / Concept\nAnswer Key"
    }
  ],
  "bpsc-tre4-qualifying-paper-set2-40q": [
    {
      "id": 1,
      "source": "BPSC Senior Secondary Booklets (TRE 2.0)",
      "en": "Rainy season comes before",
      "hi": "वर्षा ऋतु किसके पहले आती है?",
      "options": [
        "winter",
        "spring",
        "summer",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "winter",
      "explanation": "According to the Indian seasonal cycle and calendar progression, the rainy (monsoon) season spans July to September and directly precedes the winter (autumn/winter) season.",
      "tip": "Chronological order of seasons in India: Summer (March–May) → Rainy/Monsoon (June–September) → Autumn/Winter (October–February) → Spring (February–March)."
    },
    {
      "id": 2,
      "source": "BPSC Senior Secondary Booklets (TRE 2.0)",
      "en": "The eighth month of the year is",
      "hi": "वर्ष का आठवाँ महीना है",
      "options": [
        "July",
        "September",
        "October",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "None of the above",
      "explanation": "The eighth month in the Gregorian calendar is August. Since August is omitted from options (A), (B), and (C), Option (E) is the official correct choice.",
      "tip": "BPSC calendar trap: 7th = July, 8th = August, 9th = September, 10th = October. When the accurate month name is absent, confidently select Option (E)."
    },
    {
      "id": 3,
      "source": "BPSC Senior Secondary Booklets (TRE 2.0)",
      "en": "Sister-in-law is",
      "hi": "सिस्टर-इन-लॉ (Sister-in-law) होती है",
      "options": [
        "husband's sister",
        "wife's sister",
        "brother's wife",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "More than one of the above",
      "explanation": "In English kinship terminology, 'sister-in-law' denotes one's brother's wife (भाभी), one's husband's sister (ननद), or one's wife's sister (साली). Since all three options are valid, (D) is triggered.",
      "tip": "Whenever an English kinship relation encompasses multiple maternal/paternal or affine equivalents, expect Option (D) in BPSC examinations."
    },
    {
      "id": 4,
      "source": "BPSC Senior Secondary Booklets (TRE 2.0)",
      "en": "Which of the following is a part of bedroom?",
      "hi": "निम्नलिखित में से कौन-सा बेडरूम का एक हिस्सा है?",
      "options": [
        "Pillow",
        "Table lamp",
        "Wardrobe",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "More than one of the above",
      "explanation": "A bedroom standardly contains pillows (for sleeping), table/bedside lamps (for reading/lighting), and wardrobes/closets. All choices represent valid bedroom furnishings.",
      "tip": "In household vocabulary questions, as soon as two independent items naturally belong to the specified room, choose Option (D)."
    },
    {
      "id": 5,
      "source": "BPSC TGT Secondary Question Papers (TRE 2.0)",
      "en": "Today is Sunday. The day before yesterday was",
      "hi": "आज रविवार है। परसों (बीता हुआ कल से पूर्व का दिन) कौन-सा दिन था?",
      "options": [
        "Tuesday",
        "Friday",
        "Saturday",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Friday",
      "explanation": "If today is Sunday, then 'yesterday' was Saturday, and 'the day before yesterday' was Friday (Sunday minus 2 days = Friday).",
      "tip": "Time calculation formula: Today = Day 0; Yesterday = -1; Day before yesterday = -2. For Sunday: Sunday(0) → Saturday(-1) → Friday(-2)."
    },
    {
      "id": 6,
      "source": "BPSC TGT Secondary Question Papers (TRE 2.0)",
      "en": "Which of the following is not a part of drawing room?",
      "hi": "निम्नलिखित में से कौन-सा ड्राइंग रूम का हिस्सा नहीं है?",
      "options": [
        "Washing machine",
        "Chimney",
        "Sofa set",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "More than one of the above",
      "explanation": "A washing machine belongs to the laundry room/utility area, and a kitchen chimney belongs to the kitchen. Since both are not drawing room items, Option (D) is the official key.",
      "tip": "Notice the negative phrasing 'not a part of': Having two non-drawing-room appliances (Washing machine + Chimney) automatically triggers Option (D)."
    },
    {
      "id": 7,
      "source": "BPSC TGT Secondary Question Papers (TRE 2.0)",
      "en": "Mother's parents are",
      "hi": "माताजी के माता-पिता कहलाते हैं",
      "options": [
        "son-in-laws",
        "maternal grandparents",
        "paternal grandparents",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "maternal grandparents",
      "explanation": "One's mother's parents (maternal grandfather and grandmother - नाना-नानी) are termed maternal grandparents. Father's parents (दादा-दादी) are paternal grandparents.",
      "tip": "Maternal = Mother's lineage/relations; Paternal = Father's lineage/relations."
    },
    {
      "id": 8,
      "source": "BPSC Principal & Headmaster Examination",
      "en": "What is the time ______ your watch?आपकी घड़ी में क्या समय हुआ है?",
      "hi": "उचित Preposition चुनें",
      "options": [
        "in",
        "by",
        "at",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "by",
      "explanation": "In standard English idiomatic usage, time indicated according to a timepiece or watch is expressed using the preposition 'by' ('What is the time by your watch?').",
      "tip": "Common error: Do not translate literally from Hindi ('घड़ी में' ≠ 'in your watch'). The standard English collocation is strictly 'by your watch'."
    },
    {
      "id": 9,
      "source": "BPSC Principal & Headmaster Examination",
      "en": "The poems written by Dinkar are the most appealing ______ quality.",
      "hi": "दिनकर द्वारा रचित कविताएँ गुणवत्ता की दृष्टि से सर्वाधिक आकर्षक हैं।",
      "options": [
        "for",
        "by",
        "of",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "of",
      "explanation": "The preposition 'of' is used here to denote specification or belonging of an intrinsic characteristic ('appealing of quality' / 'possessing the attribute of quality').",
      "tip": "Pay close attention to prepositional phrase idioms following adjectives like 'appealing of', 'worthy of', 'devoid of'."
    },
    {
      "id": 10,
      "source": "BPSC Principal & Headmaster Examination",
      "en": "Which of the following is not found in a car?",
      "hi": "निम्नलिखित में से क्या कार में नहीं पाया जाता है?",
      "options": [
        "Gear",
        "Accelerator",
        "Pistol",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Pistol",
      "explanation": "Gears and accelerators are integral mechanical and control components of an automobile, whereas a pistol is a firearm and not a vehicular component.",
      "tip": "Eliminate normal vehicular mechanisms to isolate the extraneous weapon/item."
    },
    {
      "id": 11,
      "source": "BPSC Principal & Headmaster Examination",
      "en": "A sister's husband is called in English as",
      "hi": "बहन के पति को अंग्रेजी में क्या कहा जाता है?",
      "options": [
        "jija",
        "brother-in-law",
        "maternal brother",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "brother-in-law",
      "explanation": "One's sister's husband is designated as 'brother-in-law' in English kinship terminology. 'Jija' is a Hindi colloquial noun, not English.",
      "tip": "BPSC options often include Hindi phonetic spellings (like 'jija' or 'chacha') as traps; always select the formal English genealogical term."
    },
    {
      "id": 12,
      "source": "BPSC Middle Teacher Question Booklet (English/Hindi)",
      "en": "______ beauty is a gift of God.सौंदर्य ईश्वर का उपहार है।",
      "hi": "रिक्त स्थान में उपयुक्त Article चुनें",
      "options": [
        "The",
        "A",
        "An",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "None of the above",
      "explanation": "When an abstract noun ('beauty') is used in a general, universal philosophical sense, it takes zero article. Since zero article is not among (A), (B), or (C), (E) is correct.",
      "tip": "Abstract nouns (beauty, honesty, truth, wisdom) take NO article when used generally: 'Beauty is truth', 'Honesty is the best policy'."
    },
    {
      "id": 13,
      "source": "BPSC Middle Teacher Question Booklet (English/Hindi)",
      "en": "Rajan is selected as ______ MBBS doctor.",
      "hi": "राजन का चयन एक MBBS डॉक्टर के रूप में हुआ है।",
      "options": [
        "the",
        "a",
        "an",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "an",
      "explanation": "The abbreviation 'MBBS' is phonetically pronounced as /ˈem.biː.biː.es/, which begins with the vowel sound /e/. Therefore, the indefinite article 'an' is required.",
      "tip": "Phonetics rule: Abbreviations beginning with letters pronounced with an initial vowel sound (M = /em/, S = /es/, F = /ef/, H = /eɪtʃ/, L = /el/) take 'an' ('an MBBS', 'an SP', 'an FIR')."
    },
    {
      "id": 14,
      "source": "BPSC Middle Teacher Question Booklet (English/Hindi)",
      "en": "Which of the following is not a part of grocery store?",
      "hi": "निम्नलिखित में से कौन-सा किराने की दुकान (Grocery store) का हिस्सा नहीं है?",
      "options": [
        "Cereals",
        "Oil",
        "Leather",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Leather",
      "explanation": "Grocery stores sell food provisions and household consumables like edible grains/cereals and cooking oil. Leather is a processed animal hide sold in footwear or fabric stores.",
      "tip": "Distinguish food/edible consumable groceries from heavy industrial/animal trade materials like leather and timber."
    },
    {
      "id": 15,
      "source": "BPSC Middle Teacher Question Booklet (English/Hindi)",
      "en": "Which of the following is not a continent?",
      "hi": "निम्नलिखित में से कौन-सा महाद्वीप नहीं है?",
      "options": [
        "Asia",
        "Australia",
        "Arab",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Arab",
      "explanation": "Asia and Australia are recognized world continents, whereas the Arabian Peninsula (Arab) is a geographical region/sub-region located within the continent of Asia.",
      "tip": "The 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia. Arab is a geopolitical peninsula, not a continent.\n■ PART B: GENERAL HINDI"
    },
    {
      "id": 16,
      "source": "BPSC Primary Teacher Question Booklet (TRE 1.0)",
      "en": "Which prefix (",
      "hi": "उपसर्ग) is used in the word 'समुज्ज्वल'?'समुज्ज्वल' शब्द में किस उपसर्ग का प्रयोग हुआ है?",
      "options": [
        "सम",
        "सन्",
        "सम्",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "सम्",
      "explanation": "'सम् + उत् + ज्वल = समुज्ज्वल'। यहाँ प्रथम उपसर्ग 'सम्' (हलन्तयुक्त म्) है जो संस्कृत का तत्सम उपसर्ग है।",
      "tip": "संस्कृत के 'सम्' उपसर्ग में 'म्' सदैव हलंतयुक्त होता है; बिना हलंत वाले विकल्प 'सम' को कभी न चुनें।"
    },
    {
      "id": 17,
      "source": "BPSC Primary Teacher Question Booklet (TRE 1.0)",
      "en": "Which of the following words contains the prefix '",
      "hi": "अ'?निम्नलिखित में से कौन-सा शब्द 'अ' उपसर्ग-युक्त है?",
      "options": [
        "अथाह",
        "अनपढ़",
        "अनिष्ट",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "अथाह",
      "explanation": "'अ + थाह = अथाह' (जिसकी थाह न हो)। 'अनपढ़' में हिन्दी का 'अन' उपसर्ग है तथा 'अनिष्ट' में संस्कृत का 'अन्' (अन् + इष्ट) उपसर्ग है।",
      "tip": "उपसर्ग विश्लेषण: स्वर से शुरू होने वाले शब्दों में 'अन्' (अन्+इष्ट) जुड़ता है, व्यंजन से पहले 'अ' (अ+थाह) या 'अन' (अन+पढ़) जुड़ता है।"
    },
    {
      "id": 18,
      "source": "BPSC Primary Teacher Question Booklet (TRE 1.0)",
      "en": "Which of the following words contains the suffix '",
      "hi": "आ'?निम्नलिखित में से कौन-सा शब्द 'आ' प्रत्यय-युक्त है?",
      "options": [
        "धार्मिक",
        "असली",
        "प्यारा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "प्यारा",
      "explanation": "'प्यार + आ = प्यारा'। 'धार्मिक' में 'इक' प्रत्यय (धर्म + इक) और 'असली' में 'ई' प्रत्यय (असल + ई) प्रयुक्त हुआ है।",
      "tip": "मूल शब्द अलग करें: प्यार (संज्ञा) + आ (तद्धित प्रत्यय) = प्यारा (विशेषण)।"
    },
    {
      "id": 19,
      "source": "BPSC Primary Teacher Question Booklet (TRE 1.0)",
      "en": "'The compound in which both components are principal' is called'",
      "hi": "जिसमें दोनों पद प्रधान होते हैं' वह कौन-सा समास है?",
      "options": [
        "अव्ययीभाव",
        "द्वंद्व",
        "बहुव्रीहि",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "द्वंद्व",
      "explanation": "द्वंद्व समास में दोनों पद (पूर्व पद और उत्तर पद) समान रूप से प्रधान होते हैं और विग्रह करने पर 'और', 'अथवा', 'या' लगता है (जैसे माता-पिता)।",
      "tip": "समास प्रधानता नियम: अव्ययीभाव = पूर्व पद प्रधान; तत्पुरुष/कर्मधारय/द्विगु = उत्तर पद प्रधान; द्वंद्व = दोनों पद प्रधान; बहुव्रीहि = अन्य पद प्रधान।"
    },
    {
      "id": 20,
      "source": "BPSC Primary Teacher Question Booklet (TRE 1.0)",
      "en": "Which compound (",
      "hi": "समास) is present in the word 'जन्मांध'?'जन्मांध' शब्द में कौन-सा समास है?",
      "options": [
        "तत्पुरुष",
        "कर्मधारय",
        "द्विगु",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "तत्पुरुष",
      "explanation": "'जन्मांध' का समास विग्रह 'जन्म से अंधा' होता है। यहाँ कारक चिह्न 'से' (अपादान कारक) का लोप होने के कारण अपादान तत्पुरुष समास है।",
      "tip": "जब विग्रह करने पर कारक की विभक्ति (ने, को, से, के लिए, का/की/के, में/पर) आए, तो वह निश्चित रूप से 'तत्पुरुष समास' होता है।"
    },
    {
      "id": 21,
      "source": "BPSC Primary Teacher Question Booklet (TRE 1.0)",
      "en": "How many principal types of Swar Sandhi (",
      "hi": "स्वर संधि) are there?स्वर संधि के कितने मुख्य प्रकार हैं?",
      "options": [
        "चार",
        "पाँच",
        "छः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "पाँच",
      "explanation": "स्वर संधि के पाँच मुख्य भेद होते हैं: 1. दीर्घ स्वर संधि, 2. गुण स्वर संधि, 3. वृद्धि स्वर संधि, 4. यण स्वर संधि, तथा 5. अयादि स्वर संधि।",
      "tip": "स्वर संधि के 5 भेद: दीर्घ (आ, ई, ऊ), गुण (ए, ओ, अर्), वृद्धि (ऐ, औ), यण (य, व, र), अयादि (अय, आय, अव, आव)।"
    },
    {
      "id": 22,
      "source": "BPSC Primary Teacher Question Booklet (TRE 1.0)",
      "en": "The correct Sandhi-Vichchhed of '",
      "hi": "अतीव' is'अतीव' का संधि विच्छेद होगा",
      "options": [
        "अति + इव",
        "अ + तीव",
        "अती + व",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "अति + इव",
      "explanation": "'अति + इव = अतीव'। दीर्घ स्वर संधि के नियमानुसार ह्रस्व 'इ' + ह्रस्व 'इ' मिलकर दीर्घ 'ई' (अतीव) बन जाते हैं।",
      "tip": "उपसर्ग 'अति' में ह्रस्व 'इ' होती है और अव्यय 'इव' में भी ह्रस्व 'इ'; दीर्घ स्वर संधि से 'अतीव' बनता है।"
    },
    {
      "id": 23,
      "source": "BPSC Headmaster & Secondary Booklets",
      "en": "Under which Article of the Constitution, Hindi written in Devanagari script is the Official Language of the Union?",
      "hi": "भारतीय संविधान के किस अनुच्छेद के अनुसार देवनागरी लिपि में लिखित हिन्दी संघ की राजभाषा है?",
      "options": [
        "अनुच्छेद 343",
        "अनुच्छेद 345",
        "अनुच्छेद 351",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "अनुच्छेद 343",
      "explanation": "संविधान के भाग 17 के अनुच्छेद 343(1) के अनुसार संघ की राजभाषा हिन्दी और लिपि देवनागरी होगी तथा अंकों का रूप भारतीय अंकों का अंतर्राष्ट्रीय रूप होगा।",
      "tip": "अनुच्छेद 343 = संघ की राजभाषा; अनुच्छेद 345 = राज्यों की राजभाषा; अनुच्छेद 351 = हिन्दी भाषा के विकास के लिए निर्देश।"
    },
    {
      "id": 24,
      "source": "BPSC Headmaster Examination Booklet",
      "en": "What is the meaning of the word '",
      "hi": "विकारी' in grammar?व्याकरण में 'विकारी' शब्द का अर्थ क्या है?",
      "options": [
        "परिवर्तन",
        "विकीर",
        "स्थिर",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "परिवर्तन",
      "explanation": "'विकारी' शब्द 'विकार' से बना है जिसका अर्थ होता है परिवर्तन या रूपांतर। जिन शब्दों में लिंग, वचन, कारक के अनुसार रूप परिवर्तित होता है, वे विकारी कहलाते हैं।",
      "tip": "विकारी = परिवर्तनशील (संज्ञा, सर्वनाम, विशेषण, क्रिया); अविकारी = अपरिवर्तनशील / स्थिर (अव्यय)।"
    },
    {
      "id": 25,
      "source": "BPSC Headmaster Examination Booklet",
      "en": "What is the root form of the second person singular pronoun (",
      "hi": "मध्यमपुरुष एकवचन)?मध्यमपुरुष एकवचन का मूल रूप क्या है?",
      "options": [
        "तुम",
        "तुझ",
        "तू",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "तू",
      "explanation": "हिन्दी में पुरुषवाचक सर्वनाम के मध्यम पुरुष का मूल एकवचन रूप 'तू' है। 'तुम' बहुवचन या आदरार्थक रूप है और 'तुझ' उसका तिर्यक्/कारक रूप है।",
      "tip": "मूल सर्वनाम रूप: उत्तम पुरुष एकवचन = 'मैं'; मध्यम पुरुष एकवचन = 'तू'; अन्य पुरुष एकवचन = 'वह'/'यह'।"
    },
    {
      "id": 26,
      "source": "BPSC Headmaster Examination Booklet",
      "en": "'बादल खूब गरजे किन्तु वर्षा नहीं हुई।' Which type of sentence is this?'बादल खूब गरजे किन्तु वर्षा नहीं हुई।' कौन-सा वाक्य है?",
      "hi": "'बादल खूब गरजे किन्तु वर्षा नहीं हुई।' Which type of sentence is this?'बादल खूब गरजे किन्तु वर्षा नहीं हुई।' कौन-सा वाक्य है?",
      "options": [
        "संयुक्त वाक्य",
        "साधारण वाक्य",
        "मिश्रित वाक्य",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "संयुक्त वाक्य",
      "explanation": "जहाँ दो या दो से अधिक स्वतंत्र उपवाक्य समानाधिकरण समुच्चयबोधक अव्यय (किन्तु, परन्तु, लेकिन, और) से जुड़े हों, वहाँ 'संयुक्त वाक्य' होता है।",
      "tip": "वाक्य पहचान: 'किन्तु, परन्तु, और, इसलिए, तथा' = संयुक्त वाक्य; 'कि, जो, क्योंकि, यदि...तो, जब...तब' = मिश्रित वाक्य।"
    },
    {
      "id": 27,
      "source": "BPSC Headmaster Examination Booklet",
      "en": "Which pair of 'one word for a phrase' is not correctly matched?",
      "hi": "वाक्यांश के लिए एक शब्द का कौन-सा युग्म सुमेलित नहीं है?",
      "options": [
        "जो खुले हाथों से दान करता हो - दानी",
        "जैसा पहले था वैसा ही - यथाविधि",
        "जिसने मृत्यु को जीत लिया हो - मुमूर्षु",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "उपर्युक्त में से एक से अधिक",
      "explanation": "जो खुले हाथों से दान करे उसे 'मुक्तहस्त' कहते हैं; जिसने मृत्यु को जीत लिया हो उसे 'मृत्युंजय' कहते हैं ('मुमूर्षु' = मरने की इच्छा रखने वाला)। दो युग्म गलत होने से (D) सही है।",
      "tip": "जब प्रश्न में दो या अधिक अशुद्ध युग्म पाए जाएँ, तो BPSC की 5-विकल्प प्रणाली में उत्तर 'उपर्युक्त में से एक से अधिक' (D) होता है।"
    },
    {
      "id": 28,
      "source": "BPSC Headmaster Examination Booklet",
      "en": "Which pair of idiom and its meaning is not correct?",
      "hi": "मुहावरा और अर्थ की दृष्टि से कौन-सा युग्म सही नहीं है?",
      "options": [
        "गोबर गणेश - बिलकुल बुद्धू",
        "गीदड़ भभकी - दिखावटी भय",
        "गूंगे का गुड़ होना - बोल न पाना",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "गूंगे का गुड़ होना - बोल न पाना",
      "explanation": "'गूंगे का गुड़ होना' का वास्तविक अर्थ होता है 'अकथनीय/अव्यक्त आनंद या अनुभव' जिसे वाणी द्वारा प्रकट न किया जा सके, न कि साधारण 'बोल न पाना'।",
      "tip": "गूंगे का गुड़ = ऐसा अवर्णनीय सुख जिसका वर्णन शब्दों में संभव न हो।"
    },
    {
      "id": 29,
      "source": "BPSC Class 1–5 Examination Booklet (Advt. 10/2024)",
      "en": "The correct meaning of the proverb '",
      "hi": "गंगा गए गंगादास, जमुना गए जमुनादास' is'गंगा गए गंगादास, जमुना गए जमुनादास' लोकोक्ति का सही अर्थ है",
      "options": [
        "आदर्शवादी",
        "चरित्रहीन",
        "यथार्थवादी",
        "सिद्धान्तहीन",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "सिद्धान्तहीन",
      "explanation": "इस लोकोक्ति का अर्थ है ऐसा अवसरवादी व्यक्ति जिसका कोई दृढ़ सिद्धान्त या निष्ठा न हो और जो परिस्थिति और लाभ देखकर अपना रुख बदल लेता हो (सिद्धान्तहीन/बेपेंदी का लोटा)।",
      "tip": "समानार्थक मुहावरा: 'बेपेंदी का लोटा होना' या 'थाली का बैंगन होना' = सिद्धान्तहीन व्यक्ति।"
    },
    {
      "id": 30,
      "source": "BPSC Class 1–5 Examination Booklet (Advt. 10/2024)",
      "en": "What is the prefix in the word '",
      "hi": "निराकार'?'निराकार' में उपसर्ग है",
      "options": [
        "निर्",
        "नि",
        "निरा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "निर्",
      "explanation": "'निर् + आकार = निराकार'। यहाँ संस्कृत का हलंतयुक्त 'निर्' उपसर्ग प्रयुक्त हुआ है (रेफ स्वर के साथ जुड़कर 'रा' बन जाता है)।",
      "tip": "हलंत का ध्यान रखें: 'निराकार', 'निरपराध', 'निर्जन' सभी में हलंतयुक्त 'निर्' उपसर्ग होता है।"
    },
    {
      "id": 31,
      "source": "BPSC Class 1–5 Examination Booklet (Advt. 10/2024)",
      "en": "The pause/caesura occurring while reciting a verse (",
      "hi": "छन्द) is calledछन्द पढ़ते समय आने वाले विराम को क्या कहते हैं?",
      "options": [
        "गति",
        "लय",
        "गण",
        "यति",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "यति",
      "explanation": "काव्य या छन्द का पाठ करते समय जहाँ स्वाभाविक रूप से रुकना या ठहरना पड़ता है, उस अल्प विराम को 'यति' कहते हैं। पाठ के प्रवाह को 'गति' कहते हैं।",
      "tip": "छन्द के अंग: यति = विराम/ठहराव; गति = लय या प्रवाह; तुक = अंतिम वर्णों की समानता; गण = तीन वर्णों का समूह (यमाता राजभानसलगा)।"
    },
    {
      "id": 32,
      "source": "BPSC Senior Secondary Booklets (Hindi Core)",
      "en": "'जिसकी यह पुस्तक है, उसे लौटा दो।' Which pronoun is present in this sentence?'जिसकी यह पुस्तक है, उसे लौटा दो।' इस वाक्य में कौन-सा सर्वनाम है?",
      "hi": "'जिसकी यह पुस्तक है, उसे लौटा दो।' Which pronoun is present in this sentence?'जिसकी यह पुस्तक है, उसे लौटा दो।' इस वाक्य में कौन-सा सर्वनाम है?",
      "options": [
        "निश्चयवाचक",
        "संबंधवाचक",
        "पुरुषवाचक",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "संबंधवाचक",
      "explanation": "वाक्य में 'जिसकी' और 'उसे' परस्पर एक दूसरे उपवाक्य के संज्ञा पदों से संबंध स्थापित कर रहे हैं, अतः यहाँ 'संबंधवाचक सर्वनाम' है।",
      "tip": "संबंधवाचक सर्वनाम के जोड़े: 'जो...सो', 'जैसा...वैसा', 'जिसकी...उसकी/उसे', 'जितना...उतना'।"
    },
    {
      "id": 33,
      "source": "BPSC Senior Secondary Booklets (Hindi Core)",
      "en": "Which of the following is an incorrect word (",
      "hi": "अशुद्ध शब्द)?निम्नलिखित में से कौन-सा अशुद्ध शब्द है?",
      "options": [
        "वीभत्स",
        "लगान",
        "आगामी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 4,
      "answer_letter": "E",
      "answer_text": "उपर्युक्त में से कोई नहीं",
      "explanation": "दिए गए तीनों शब्द 'वीभत्स', 'लगान' और 'आगामी' पूर्णतः व्याकरणिक दृष्टि से शुद्ध वर्तनी वाले हैं। कोई भी शब्द अशुद्ध न होने से उत्तर (E) है।",
      "tip": "जब पूछे गए विकल्प में दिए गए सभी शब्द शुद्ध हों और प्रश्न 'अशुद्ध' का हो, तो उत्तर 'उपर्युक्त में से कोई नहीं' (E) बनता है।"
    },
    {
      "id": 34,
      "source": "BPSC Senior Secondary Booklets (Hindi Core)",
      "en": "Which of the following is a word with correct spelling (",
      "hi": "शुद्ध वर्तनी)?निम्नलिखित में से कौन-सा शुद्ध वर्तनी वाला शब्द है?",
      "options": [
        "क्षत्रिय",
        "क्षत्रीय",
        "उज्जवल",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "क्षत्रिय",
      "explanation": "'क्षत्रिय' शुद्ध वर्तनी है। 'क्षत्रीय' अशुद्ध है और 'उज्जवल' भी अशुद्ध है क्योंकि इसका शुद्ध रूप 'उज्ज्वल' (दो बार आधा 'ज्') होता है।",
      "tip": "बार-बार पूछा जाने वाला शब्द: 'उज्ज्वल' में दो आधे 'ज्' होते हैं (उत् + ज्वल = उज्ज्वल)। 'उज्जवल' अशुद्ध वर्तनी है।"
    },
    {
      "id": 35,
      "source": "BPSC Senior Secondary Booklets (Hindi Core)",
      "en": "Which of the following is a 'Tatsama' (",
      "hi": "तत्सम) word?निम्नलिखित में से कौन-सा 'तत्सम' शब्द है?",
      "options": [
        "घर",
        "स्नेह",
        "छेद",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "स्नेह",
      "explanation": "'स्नेह' संस्कृत का मूल तत्सम शब्द है (जिसका तद्भव 'नेह' होता है)। 'घर' का तत्सम 'गृह' तथा 'छेद' का तत्सम 'छिद्र' होता है।",
      "tip": "तत्सम पहचान: संयुक्त व्यंजन (क्ष, त्र, ज्ञ, श्र) और आधे व्यंजन/रेफ (स्नेह, छिद्र, गृह) वाले शब्द प्रायः तत्सम होते हैं।"
    },
    {
      "id": 36,
      "source": "BPSC Senior Secondary Booklets (Hindi Core)",
      "en": "In which of the following sentences is an 'intransitive verb' (",
      "hi": "अकर्मक क्रिया) used?निम्नलिखित में से किस वाक्य में 'अकर्मक क्रिया' है?",
      "options": [
        "उसे मत लजाओ।",
        "बालिका लजाती है।",
        "सेवक नदी से गागर भरता है।",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "बालिका लजाती है।",
      "explanation": "'लजाना' कर्ता की स्वाभाविक शारीरिक/मानसिक क्रिया है जिसमें कोई कर्म नहीं है और फल सीधे बालिका पर पड़ता है। अतः 'बालिका लजाती है' अकर्मक क्रिया है।",
      "tip": "क्रिया से पहले 'क्या' या 'किसको' लगाकर प्रश्न पूछें: यदि उत्तर न मिले, तो क्रिया अकर्मक है (बालिका क्या लजाती है? -> कोई उत्तर नहीं = अकर्मक)।"
    },
    {
      "id": 37,
      "source": "BPSC Senior Secondary Booklets (Hindi Core)",
      "en": "From which language is the word '",
      "hi": "खारिज' derived?'खारिज' किस भाषा का शब्द है?",
      "options": [
        "अरबी",
        "फारसी",
        "तुर्की",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "अरबी",
      "explanation": "'खारिज' अरबी भाषा का शब्द है जिसका अर्थ 'रद्द करना' या 'बाहर करना' होता है। कानून और अदालत की अधिकांश शब्दावली (दाखिल, खारिज, मुकद्दमा) अरबी मूल की है।",
      "tip": "अदालती व प्रशासनिक अरबी शब्द: दाखिल, खारिज, फैसला, बहस, मुवक्किल, तारीख, अदालत।"
    },
    {
      "id": 38,
      "source": "BPSC Senior Secondary Booklets (Hindi Core)",
      "en": "Which pair of incorrect and correct spelling is NOT properly matched?",
      "hi": "अशुद्ध और शुद्ध वर्तनी का कौन-सा युग्म सही नहीं है?",
      "options": [
        "कोमलांगिनी - कोमलांगी",
        "सुश्रूषा - शुश्रूषा",
        "माहात्म - महात्म्य",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "माहात्म - महात्म्य",
      "explanation": "शुद्ध शब्द 'माहात्म्य' (महात्मा + य = माहात्म्य) होता है, जिसमें आद्य स्वर वृद्धि होकर 'मा' होता है। यहाँ 'महात्म्य' लिखा गया है जो अशुद्ध है।",
      "tip": "प्रत्यय नियम: 'य' प्रत्यय जुड़ने पर पहला स्वर दीर्घ हो जाता है: महात्मा + य = माहात्म्य; सुंदर + य = सौंदर्य; मधुर + य = माधुर्य।"
    },
    {
      "id": 39,
      "source": "BPSC TGT Language Qualifying Booklet",
      "en": "What is the adjective form of the noun '",
      "hi": "अग्नि'?'अग्नि' शब्द का विशेषण है",
      "options": [
        "आगृही",
        "आग्नेय",
        "आग्निक",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "आग्नेय",
      "explanation": "'अग्नि + एय = आग्नेय'। 'अग्नि' संज्ञा शब्द से बना व्याकरणिक विशेषण 'आग्नेय' होता है (जैसे आग्नेयास्त्र / आग्नेय शैल)।",
      "tip": "संज्ञा से विशेषण निर्माण: अग्नि → आग्नेय; पृथ्वी → पार्थिव; शिव → शैव; विष्णु → वैष्णव।"
    },
    {
      "id": 40,
      "source": "BPSC TGT Language Qualifying Booklet",
      "en": "Which of the following consonants in Hindi is a trill/rolled consonant (",
      "hi": "प्रकंपी/लुंठित)?हिन्दी वर्णमाला में 'प्रकंपी' व्यंजन कौन-सा है?",
      "options": [
        "श",
        "स",
        "र",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "र",
      "explanation": "'र' ध्वनि के उच्चारण में जिह्वा का अग्र भाग वर्तस्य (मसूड़े) को छूकर हवा के वेग से 2-3 बार कांपता (प्रकंपित) होता है, इसलिए इसे 'प्रकंपी' या 'लुंठित' व्यंजन कहते हैं।",
      "tip": "वर्ण प्रयत्न वर्गीकरण: प्रकंपी/लुंठित = 'र'; पाश्विक व्यंजन = 'ल'; अर्धस्वर = 'य' और 'व'; काकल्य व्यंजन = 'ह'।\nMASTER ANSWER KEY SUMMARY — QUALIFYING PRACTICE SET 2\nComplete 40-Question Tabular Key with Subject Sections and Topic Focus Tags:\nQ. No.\nSection\nTopic / Grammar Concept Tested\nOfficial Key"
    }
  ],
  "bpsc-tre4-sanskrit-80q": [
    {
      "id": 1,
      "source": "BPSC Teacher TGT Sanskrit",
      "en": "How many Maheshwara Sutras are there?",
      "hi": "माहेश्वरसूत्राणां संख्या कति अस्ति?",
      "options": [
        "द्वादश (12)",
        "चतुर्दश (14)",
        "षोडश (16)",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "चतुर्दश (14)",
      "explanation": "भगवान् शङ्करस्य नटराजराजस्य डमरूध्वनेः निर्गतानि चतुर्दश (14) सूत्राणि सन्ति, यैः प्रत्याहाराणां निर्माणं भवति ('नृत्तावसाने नटराजराजो ननाद ढक्कां नवपञ्चवारम्')।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): नवपञ्चवारम् = 9 + 5 = 14 माहेश्वर सूत्राणि ('अइउण्' आरभ्य 'हल्' पर्यन्तम्)। एभ्यः 42 (वा 44) प्रत्याहाराः निष्पद्यन्ते।",
      "tip": ""
    },
    {
      "id": 2,
      "source": "BPSC Middle School Sanskrit",
      "en": "Which characters come under the 'Ak' Pratyahara?",
      "hi": "'अक्' प्रत्याहारस्य अन्तर्गतं के वर्णाः आगच्छन्ति?",
      "options": [
        "अ, इ, उ, ऋ, ऌ",
        "अ, इ, उ, ऋ, ल",
        "आ, ई, ऊ, ॠ, ॡ",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "अ, इ, उ, ऋ, ऌ",
      "explanation": "माहेश्वरसूत्रयोः 'अइउण्' तथा 'ऋऌक्' इत्यनयोः 'अक्' प्रत्याहारे इत्संज्ञकौ 'ण्' तथा 'क्' विहाय पञ्च मूलस्वराः (अ, इ, उ, ऋ, ऌ) परिगणिताः भवन्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): 'अकः सवर्णे दीर्घः' सूत्रे 'अक्' प्रत्याहारस्य पञ्च ह्रस्वस्वराः (अ, इ, उ, ऋ, ऌ) एव गृह्यन्ते।",
      "tip": ""
    },
    {
      "id": 3,
      "source": "BPSC TGT Sanskrit",
      "en": "What is the place of articulation for Ka-varga?",
      "hi": "'क' वर्गस्य उच्चारणस्थानं किम् अस्ति?",
      "options": [
        "कण्ठः",
        "तालु",
        "मूर्धा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "कण्ठः",
      "explanation": "पाणिनीयशिक्षायाः सूत्रानुसारम् 'अकुहविसर्जनीयानां कण्ठः'। अतः 'अ', कवर्गः (क्, ख्, ग्, घ्, ङ्), 'ह' तथा विसर्गस्य उच्चारणस्थानं कण्ठः भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): उच्चारणस्थान सूत्राणि: कण्ठः = अकुहविसर्जनीयानाम्; तालु = इचुयशाम्; मूर्धा = ऋटुरषाणाम्; दन्ताः = लृतुलसानाम्; ओष्ठौ = उपूपध्मानीयानाम्।",
      "tip": ""
    },
    {
      "id": 4,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "By which sutra does sandhi occur in 'Daityarih'?",
      "hi": "'दैत्यारिः' इत्यत्र केन सूत्रेण सन्धिः भवति?",
      "options": [
        "अकः सवर्णे दीर्घः",
        "आद्गुणः",
        "वृद्धिरेचि",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "अकः सवर्णे दीर्घः",
      "explanation": "'दैत्य + अरिः = दैत्यारिः'। अत्र अकारद्वयस्य सवर्णदीर्घैकादेशः 'अकः सवर्णे दीर्घः' सूत्रेण जायते।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): सवर्णदीर्घ सन्धिः: अ/आ + अ/आ = आ; इ/ई + इ/ई = ई; उ/ऊ + उ/ऊ = ऊ; ऋ + ऋ = ॠ।",
      "tip": ""
    },
    {
      "id": 5,
      "source": "BPSC Middle School Sanskrit",
      "en": "What is the sandhi viccheda of 'Upendrah'?",
      "hi": "'उपेन्द्रः' इत्यस्य सन्धिविच्छेदः कः अस्ति?",
      "options": [
        "उप + इन्द्रः",
        "उपे + न्द्रः",
        "उपा + इन्द्रः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "उप + इन्द्रः",
      "explanation": "'उप + इन्द्रः = उपेन्द्रः'। 'आद्गुणः' सूत्रेण अवर्णात् (उप) इचि परे (इन्द्रः) पूर्वपरयोः स्थाने गुण एकादेशः 'ए' भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): गुण सन्धि एकादेशाः: अ + इ = ए (उपेन्द्रः); अ + उ = ओ (सूर्योदयः); अ + ऋ = अर् (महर्षिः); अ + ऌ = अल् (तवल्कारः)।",
      "tip": ""
    },
    {
      "id": 6,
      "source": "BPSC TGT Sanskrit",
      "en": "'इको यणचि' सूत्रेण 'मध्वरिः' इत्यस्य सन्धिविच्छेदः भवति",
      "hi": "'इको यणचि' सूत्रेण 'मध्वरिः' इत्यस्य सन्धिविच्छेदः भवति",
      "options": [
        "मधु + अरिः",
        "मध्व + रिः",
        "मधो + अरिः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "मधु + अरिः",
      "explanation": "'मधु + अरिः = मध्वरिः'। यण्सन्धौ 'इक्' (उकारस्य) स्थाने असमानस्वरे परे 'यण्' (व्) आदेशः भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): यण् सन्धिः: इ -> य् (इत्यलम); उ -> व् (मध्वरिः, स्वागतम्); ऋ -> र् (पित्राज्ञा); ऌ -> ल् (लाकृतिः)।",
      "tip": ""
    },
    {
      "id": 7,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "'नायकः' इत्यत्र सन्धि-विधायकं सूत्रं किम्? (Which sutra governs sandhi in 'Nāyakah'?)",
      "hi": "'नायकः' इत्यत्र सन्धि-विधायकं सूत्रं किम्? (Which sutra governs sandhi in 'Nāyakah'?)",
      "options": [
        "एचोऽयवायावः",
        "वृद्धिरेचि",
        "एङि पररूपम्",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "एचोऽयवायावः",
      "explanation": "'नै + अकः = नायकः'। अत्र ऐकारस्य स्थाने 'एचोऽयवायावः' सूत्रेण अचि परे 'आय्' आदेशः भवति (न् + आय् + अकः = नायकः)।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): अयादि सन्धिः: ए -> अय् (शयनम्); ऐ -> आय् (नायकः); ओ -> अव् (पवनम्); औ -> आव् (पावकः)।",
      "tip": ""
    },
    {
      "id": 8,
      "source": "BPSC TGT Sanskrit",
      "en": "'वागीशः' इत्यत्र कः सन्धिः अस्ति? (Which sandhi is present in 'Vāgīśah'?)",
      "hi": "'वागीशः' इत्यत्र कः सन्धिः अस्ति? (Which sandhi is present in 'Vāgīśah'?)",
      "options": [
        "जश्त्व सन्धिः",
        "श्चुत्व सन्धिः",
        "ष्टुत्व सन्धिः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "जश्त्व सन्धिः",
      "explanation": "'वाक् + ईशः = वागीशः'। 'झलां जशोऽन्ते' सूत्रेण पदान्त-झल् (क्) स्थाने जश् (ग्) आदेशः भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): जश्त्व सन्धिः: क् -> ग्, च् -> ज्, ट् -> ड्, त् -> द्, प् -> ब् (वागीशः, अजन्तः, षडाननः, जगदीशः)।",
      "tip": ""
    },
    {
      "id": 9,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "'रामश्चिनोति' इत्यत्र सन्धि-विधायकं सूत्रं किम्? (Which sutra governs sandhi in 'Rāmaścinoti'?)",
      "hi": "'रामश्चिनोति' इत्यत्र सन्धि-विधायकं सूत्रं किम्? (Which sutra governs sandhi in 'Rāmaścinoti'?)",
      "options": [
        "स्तोः श्चुना श्चुः",
        "ष्टुना ष्टुः",
        "झलां जश् झशि",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "स्तोः श्चुना श्चुः",
      "explanation": "'रामस् + चिनोति = रामश्चिनोति'। अत्र 'स्तोः श्चुना श्चुः' सूत्रेण सकारस्य चवर्गेण योगे सति तालव्य-शकारः (श्) आदेशः भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): श्चुत्व सन्धिः: स/तवर्गस्य श/चवर्गेण योगे सकारस्य 'श्' तथा तवर्गस्य चवर्गः भवति (हरिशेते, सच्छिष्यः)।",
      "tip": ""
    },
    {
      "id": 10,
      "source": "BPSC Middle School Sanskrit",
      "en": "What is the sandhi viccheda of 'Manorathah'?",
      "hi": "'मनोरथः' इत्यस्य सन्धिविच्छेदः कः?",
      "options": [
        "मनः + रथः",
        "मनो + रथः",
        "मनस् + अथः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "मनः + रथः",
      "explanation": "'मनः + रथः = मनोरथः'। 'हशि च' सूत्रेण अप्लुतादतः परस्य रोः हशि परे उत्वं भवति, ततः आद्गुणः सूत्रेण 'अ + उ = ओ' जायते।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): उत्व विसर्ग सन्धिः: मनः + हरः = मनोहरः; मनः + रथः = मनोरथः; यशः + दा = यशोदा; तपः + वनम् = तपोवनम्।",
      "tip": ""
    },
    {
      "id": 11,
      "source": "BPSC TGT Sanskrit",
      "en": "Which compound predominantly has the second member principal?",
      "hi": "प्रायशः उत्तरपदप्रधानः समासः कः भवति?",
      "options": [
        "अव्ययीभावः",
        "तत्पुरुषः",
        "बहुव्रीहिः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "तत्पुरुषः",
      "explanation": "सिद्धान्तकौमुद्याम् उक्तम्: 'प्रायेण उत्तरपदार्थप्रधानस्तत्पुरुषः'। पूर्वपदप्रधानः अव्ययीभावः, अन्यपदप्रधानः बहुव्रीहिः, उभयपदप्रधानः द्वन्द्वः भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): समास प्रधानता: पूर्वपदप्रधानः = अव्ययीभावः; उत्तरपदप्रधानः = तत्पुरुषः; उभयपदप्रधानः = द्वन्द्वः; अन्यपदप्रधानः = बहुव्रीहिः।",
      "tip": ""
    },
    {
      "id": 12,
      "source": "BPSC Middle School Sanskrit",
      "en": "'यथाशक्ति' इत्यस्मिन् पदे कः समासः अस्ति? (Which compound is in 'Yathāśakti'?)",
      "hi": "'यथाशक्ति' इत्यस्मिन् पदे कः समासः अस्ति? (Which compound is in 'Yathāśakti'?)",
      "options": [
        "अव्ययीभावः",
        "तत्पुरुषः",
        "कर्मधारयः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "अव्ययीभावः",
      "explanation": "'शक्तिम् अनतिक्रम्य = यथाशक्ति'। अत्र 'यथा' इति अव्ययस्य पदार्थानतिवृत्ति-अर्थे अव्ययीभाव समासः भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): अव्ययीभाव उदाहरणानि: यथाशक्ति (शक्तिम् अनतिक्रम्य), उपगङ्गम् (गङ्गायाः समीपम्), प्रतिदिनम् (दिनं दिनं प्रति)।",
      "tip": ""
    },
    {
      "id": 13,
      "source": "BPSC TGT Sanskrit",
      "en": "'घनश्यामः' इत्यस्य सामासिक-विग्रहः कः अस्ति? (What is the compound dissolution of 'Ghanaśyāmah'?)",
      "hi": "'घनश्यामः' इत्यस्य सामासिक-विग्रहः कः अस्ति? (What is the compound dissolution of 'Ghanaśyāmah'?)",
      "options": [
        "घनः इव श्यामः",
        "घनः च श्यामः",
        "घने श्यामः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "घनः इव श्यामः",
      "explanation": "'उपमानानि सामान्यवचनैः' सूत्रेण 'घनः इव श्यामः = घनश्यामः' इत्यत्र उपमान-पूर्वपद कर्मधारय समासः भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): कर्मधारय उपमान-उपमेय: घनश्यामः (घनः इव श्यामः); नरसिंहः (सिंहः इव नरः); चन्द्रमुखम् (चन्द्रः इव मुखम्)।",
      "tip": ""
    },
    {
      "id": 14,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "'पञ्चगवम्' इत्यस्मिन् पदे कः समासः अस्ति? (Which compound is in 'Pañcagavam'?)",
      "hi": "'पञ्चगवम्' इत्यस्मिन् पदे कः समासः अस्ति? (Which compound is in 'Pañcagavam'?)",
      "options": [
        "द्विगुः",
        "द्वन्द्वः",
        "बहुव्रीहिः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "द्विगुः",
      "explanation": "'संख्यापूर्वो द्विगुः'। 'पञ्चानां गवां समाहारः = पञ्चगवम्'। समाहारे द्विगुः नित्यं नपुंसकलिंगे एकवचने प्रयुज्यते।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): द्विगु समासः संख्यावाचकः समाहारपरकः च भवति (त्रिभुवनम्, पञ्चवटी, शताब्दी)।",
      "tip": ""
    },
    {
      "id": 15,
      "source": "BPSC TGT Sanskrit",
      "en": "'पीताम्बरः' इत्यत्र कः समासः अस्ति? (Which compound is in 'Pītāmbarah'?)",
      "hi": "'पीताम्बरः' इत्यत्र कः समासः अस्ति? (Which compound is in 'Pītāmbarah'?)",
      "options": [
        "कर्मधारयः",
        "बहुव्रीहिः",
        "तत्पुरुषः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "बहुव्रीहिः",
      "explanation": "'पीतं अम्बरं यस्य सः = पीताम्बरः (विष्णुः/श्रीकृष्णः)'। अत्र अन्यपदार्थप्रधानत्वात् बहुव्रीहि समासः भवति। यदि 'पीताम्बरम्' नपुंसकलिङ्गे स्यात् तर्हि कर्मधारयः भवेत्।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): लिङ्गभेदं पश्यतु: 'पीताम्बरः' (पुंल्लिङ्गः) = बहुव्रीहिः; 'पीताम्बरम्' (नपुंसकलिङ्गः) = कर्मधारयः (पीतं वस्त्रम्)।",
      "tip": ""
    },
    {
      "id": 16,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "'मातापितरौ' इत्यत्र कः समासः? (Which compound is in 'Mātāpitarau'?)",
      "hi": "'मातापितरौ' इत्यत्र कः समासः? (Which compound is in 'Mātāpitarau'?)",
      "options": [
        "इतरेतर द्वन्द्वः",
        "समाहार द्वन्द्वः",
        "एकशेष द्वन्द्वः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "इतरेतर द्वन्द्वः",
      "explanation": "'माता च पिता च = मातापितरौ'। अत्र द्वयोः पदयोः पृथक्-पृथक् अस्तित्वस्य बोधनात् 'इतरेतर द्वन्द्व' समासः अस्ति। यदि केवलं 'पितरौ' स्यात् तदा एकशेषः स्यात्।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): द्वन्द्वभेदाः: मातापितरौ = इतरेतर द्वन्द्वः; पाणिपादम् = समाहार द्वन्द्वः; पितरौ = एकशेष द्वन्द्वः।",
      "tip": ""
    },
    {
      "id": 17,
      "source": "BPSC Middle School Sanskrit",
      "en": "That which directly connects with the action is called",
      "hi": "क्रियायाः साक्षात् अन्वयः येन सह भवति, तत् किम् उच्यते?",
      "options": [
        "कारकम्",
        "समासः",
        "सन्धिः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "कारकम्",
      "explanation": "संस्कृतव्याकरणे कारकस्य लक्षणम् अस्ति: 'क्रियान्वयित्वं कारकत्वम्' अथवा 'क्रियाजनकत्वं कारकत्वम्'। संस्कृते षट् कारकाणि सन्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): संस्कृते षट् कारकाणि: कर्ता, कर्म, करणम्, सम्प्रदानम्, अपादानम्, अधिकरणम्। सम्बन्धस्य साक्षात् अन्वयाभावात् कारकत्वं न मन्यते।",
      "tip": ""
    },
    {
      "id": 18,
      "source": "BPSC TGT Sanskrit",
      "en": "'साधकतमं करणम्' सूत्रेण का विभक्तिः विधीयते? (Which case is prescribed by 'Sādhakatamam Karanam'?)",
      "hi": "'साधकतमं करणम्' सूत्रेण का विभक्तिः विधीयते? (Which case is prescribed by 'Sādhakatamam Karanam'?)",
      "options": [
        "तृतीया",
        "चतुर्थी",
        "पञ्चमी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "तृतीया",
      "explanation": "क्रियासिद्धौ यत् सर्वाधिकं सहायकं भवति तस्य करणसंज्ञा भवति ('साधकतमं करणम्'), तथा 'कर्तृकरणयोस्तृतीया' सूत्रेण तस्मिन् तृतीया विभक्तिः प्रयुज्यते।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): करण कारक तृतीया: 'सः कलमेन लिखति' (कलमेन = तृतीया); 'रामेण बाणेन हतो वाली'।",
      "tip": ""
    },
    {
      "id": 19,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "'अक्ष्णा काणः' इत्यत्र केन सूत्रेण तृतीया विभक्तिः अभवत्?",
      "hi": "'अक्ष्णा काणः' इत्यत्र केन सूत्रेण तृतीया विभक्तिः अभवत्?",
      "options": [
        "येनाङ्गविकारः",
        "इत्थम्भूतलक्षणे",
        "हेतौ",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "येनाङ्गविकारः",
      "explanation": "'येनाङ्गविकारः' सूत्रानुसारं येन विकृतेन अङ्गेन अङ्गिनः विकारः लक्ष्यते, तस्मिन् विकृताङ्गे तृतीया विभक्तिः भवति (यथा- अक्ष्णा काणः, पादेन खञ्जः, शीर्षणा खल्वाटः)।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): अङ्गविकारे तृतीया: पादेन खञ्जः, कर्णेन बधिरः, अक्ष्णा काणः -> सूत्रम्: 'येनाङ्गविकारः'।",
      "tip": ""
    },
    {
      "id": 20,
      "source": "BPSC TGT Sanskrit",
      "en": "'नमः स्वस्तिस्वाहास्वधाऽलंवषड्योगाच्च' सूत्रेण का विभक्तिः प्रयुज्यते?",
      "hi": "'नमः स्वस्तिस्वाहास्वधाऽलंवषड्योगाच्च' सूत्रेण का विभक्तिः प्रयुज्यते?",
      "options": [
        "तृतीया",
        "चतुर्थी",
        "पञ्चमी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "चतुर्थी",
      "explanation": "नमः, स्वस्ति, स्वाहा, स्वधा, अलम् तथा वषट् एतेषां शब्दानां योगे सर्वदा चतुर्थी विभक्तिः भवति (यथा- विष्णवे नमः, अग्नये स्वाहा, दैत्येभ्यो हरिरलम्)।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): उपदविभक्ति चतुर्थी: 'शिवाय नमः', 'प्रजाभ्यः स्वस्ति', 'इन्द्राय वषट्'।",
      "tip": ""
    },
    {
      "id": 21,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "'रुच्यार्थानां प्रीयमाणः' सूत्रस्य उदाहरणं किम् अस्ति?",
      "hi": "'रुच्यार्थानां प्रीयमाणः' सूत्रस्य उदाहरणं किम् अस्ति?",
      "options": [
        "बालकाय मोदकं रोचते",
        "हरये रोचते भक्तिः",
        "विप्राय गां ददाति",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "उपर्युक्त में से एक से अधिक",
      "explanation": "'रुच्' धातोः प्रयोगे यः प्रीयमाणः (प्रसन्नो भवति) तस्य सम्प्रदानसंज्ञा भूत्वा चतुर्थी भवति। अत्र 'बालकाय मोदकं रोचते' तथा 'हरये रोचते भक्तिः' द्वे अपि शुद्धोदाहरणे स्तः।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): द्वयोः विकल्पयोः सत्यत्वात् BPSC परीक्षायां विकल्पः (D) उपर्युक्त में से एक से अधिक उत्तरम् भविष्यति।",
      "tip": ""
    },
    {
      "id": 22,
      "source": "BPSC Middle School Sanskrit",
      "en": "'ध्रुवमपायेऽपादानम्' सूत्रेण कस्याः विभक्तेः विधानं भवति?",
      "hi": "'ध्रुवमपायेऽपादानम्' सूत्रेण कस्याः विभक्तेः विधानं भवति?",
      "options": [
        "पञ्चमी",
        "चतुर्थी",
        "षष्ठी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "पञ्चमी",
      "explanation": "अपाये (विश्लेषे/पृथग्भावकार्ये) यद् ध्रुवम् (अवधिभूतम्) तत् अपादानसंज्ञकं भवति, 'अपादाने पञ्चमी' सूत्रेण च तस्मिन् पञ्चमी विभक्तिः प्रयुज्यते (यथा- वृक्षात् पत्रं पतति)।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): पृथक्करणे पञ्चमी: वृक्षात् पत्रं पतति; ग्रामात् आयाति; आसनात् उत्तिष्ठति।",
      "tip": ""
    },
    {
      "id": 23,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "'यस्य च भावेन भावलक्षणम्' सूत्रस्य प्रसिद्धम् उदाहरणं किम्?",
      "hi": "'यस्य च भावेन भावलक्षणम्' सूत्रस्य प्रसिद्धम् उदाहरणं किम्?",
      "options": [
        "गोषु दुह्यमानासु गतः",
        "रुदति प्राव्रजीत्",
        "गवां कृष्णा बहुक्षीरा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "गोषु दुह्यमानासु गतः",
      "explanation": "यस्य क्रियाया अन्यस्याः क्रियायाः कालो लक्ष्यते तत्र सप्तमी विभक्तिः भवति (सप्तमी भावविभक्तिः)। 'गोषु दुह्यमानासु गतः' तथा 'सूर्ये उदिते कमलं विकसति' अस्य मुख्योदाहरणे स्तः।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): सति-सप्तमी / भावलक्षणम्: 'रामे वनं गते दशरथः प्राणान् अत्यजत्', 'सूर्ये उदिते'।",
      "tip": ""
    },
    {
      "id": 24,
      "source": "BPSC TGT Sanskrit",
      "en": "'हरये क्रुध्यति' इत्यत्र 'हरि' शब्दस्य सम्प्रदानसंज्ञा केन सूत्रेण भवति?",
      "hi": "'हरये क्रुध्यति' इत्यत्र 'हरि' शब्दस्य सम्प्रदानसंज्ञा केन सूत्रेण भवति?",
      "options": [
        "क्रुधद्रुहेर्ष्यासूयार्थानां यं प्रति कोपः",
        "क्रुधद्रुहोरुपसृष्टयोः कर्म",
        "कर्मणा यमभिप्रेति स सम्प्रदानम्",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "क्रुधद्रुहेर्ष्यासूयार्थानां यं प्रति कोपः",
      "explanation": "क्रुध्, द्रुह्, ईर्ष्य, असूय् धात्वर्थानां प्रयोगे यं प्रति कोपः क्रियते तस्य सम्प्रदानसंज्ञा भवति तथा चतुर्थी विभक्तिः प्रयुज्यते ('हरये क्रुध्यति')।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): सावधानी: यदि क्रुध्/द्रुह् धातोः पूर्वम् उपसर्गः स्यात् (यथा- अभिक्रुध्यति), तर्हि द्वितीया भवति ('हरिम् अभिक्रुध्यति')।",
      "tip": ""
    },
    {
      "id": 25,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "'अपादाने पञ्चमी' सूत्रेण 'भीत्रार्थानां भयहेतुः' इत्यस्य उदाहरणं किम्?",
      "hi": "'अपादाने पञ्चमी' सूत्रेण 'भीत्रार्थानां भयहेतुः' इत्यस्य उदाहरणं किम्?",
      "options": [
        "चौरात् बिभेति",
        "वृक्षात् फलं पतति",
        "सिंहात् त्रायते",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "उपर्युक्त में से एक से अधिक",
      "explanation": "भी (भयार्थक) तथा त्रा (रक्षार्थक) धातूनां प्रयोगे भयस्य यः हेतुः (कारणं) तस्य अपादानसंज्ञा भवति। अत्र 'चौरात् बिभेति' तथा 'सिंहात् त्रायते' द्वे अपि शुद्धे स्तः।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): भयहेतु अपादान: सर्पात् बिभेति; व्याघ्रात् त्रायते -> द्वयोः विकल्पयोः सद्भावात् (D) उत्तरम्।",
      "tip": ""
    },
    {
      "id": 26,
      "source": "BPSC Middle School Sanskrit",
      "en": "Who is the author of Ashtadhyayi?",
      "hi": "'अष्टाध्यायी' ग्रन्थस्य रचयिता कः अस्ति?",
      "options": [
        "महर्षि पाणिनिः",
        "कात्यायनः",
        "पतञ्जलिः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "महर्षि पाणिनिः",
      "explanation": "संस्कृतव्याकरणस्य सर्वप्रमुखः ग्रन्थः 'अष्टाध्यायी' महर्षिणा पाणिनिना विरचितः, यस्मिन् अष्टौ अध्यायाः प्रायः 4000 सूत्राणि च सन्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): मुनित्रयम्: सूत्रकारः = पाणिनिः; वार्तिककारः = कात्यायनः (वररुचिः); भाष्यकारः = पतञ्जलिः (महाभाष्यम्)।",
      "tip": ""
    },
    {
      "id": 27,
      "source": "BPSC TGT Sanskrit",
      "en": "Who is not included in the 'Munitraya'?",
      "hi": "संस्कृतव्याकरणे 'मुनित्रय' अन्तर्गतः कः न आगच्छति?",
      "options": [
        "पाणिनिः",
        "पतञ्जलिः",
        "भरतमुनिः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "भरतमुनिः",
      "explanation": "व्याकरणपरम्परायां पाणिनि-कात्यायन-पतञ्जलयः 'मुनित्रयम्' उच्यन्ते। भरतमुनिः नाट्यशास्त्रस्य प्रणेता अस्ति, न तु व्याकरण-मुनित्रयस्य।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): व्याकरण मुनित्रय = पाणिनिः, कात्यायनः, पतञ्जलिः। भरतमुनिः = नाट्यशास्त्र प्रवर्तकः।",
      "tip": ""
    },
    {
      "id": 28,
      "source": "BPSC Middle School Sanskrit",
      "en": "'भू' धातोः लट्लकारस्य प्रथमपुरुष-बहुवचने रूपं भवति",
      "hi": "'भू' धातोः लट्लकारस्य प्रथमपुरुष-बहुवचने रूपं भवति",
      "options": [
        "भवति",
        "भवतः",
        "भवन्ति",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "भवन्ति",
      "explanation": "'भू' (सत्तायाम्) धातोः लट्लकारे (वर्तमाने) रूपाणि भवन्ति: प्रथमपुरुषे- भवति, भवतः, भवन्ति। अतः बहुवचने 'भवन्ति' रूपं सिद्ध्यति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): लट् लकार प्रथमपुरुष रूपाणि: एकवचने = भवति; द्विवचने = भवतः; बहुवचने = भवन्ति।\nभाग २: संस्कृत-साहित्यम्, महाकाव्यानि, रूपकाणि, वैदिकसाहित्यम् च (प्रश्न २९ तः ५५)",
      "tip": ""
    },
    {
      "id": 29,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "Who is honoured as 'Kavikulguru'?",
      "hi": "संस्कृतसाहित्ये 'कविकुलगुरुः' इति उपाधिना कः विभूषितः?",
      "options": [
        "महाकवि कालिदासः",
        "महाकवि भारविः",
        "महाकवि बाणभट्टः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "महाकवि कालिदासः",
      "explanation": "जयदेवेन प्रसन्नराघवे 'कविकुलगुरुः कालिदासो विलासः' इति उक्तम्। कालिदासः उपमासम्राट् अपि कथ्यते ('उपमा कालिदासस्य')।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): कालिदासस्य उपाधयः: कविकुलगुरुः, उपमासम्राट्, दीपशिखा-कालिदासः, रघुपतिः।",
      "tip": ""
    },
    {
      "id": 30,
      "source": "BPSC TGT Sanskrit",
      "en": "How many authentic works of Kalidasa are accepted?",
      "hi": "कालिदासस्य कति प्रामाणिकाः कृतयः स्वीक्रियन्ते?",
      "options": [
        "पञ्च (5)",
        "सप्त (7)",
        "नव (9)",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "सप्त (7)",
      "explanation": "कालिदासस्य सप्त प्रामाणिकग्रन्थाः सन्ति: महाकाव्यद्वयम् (रघुवंशम्, कुमारसम्भवम्), खण्डकाव्यद्वयम् (मेघदूतम्, ऋतुसंहारम्), नाटकत्रयम् (अभिज्ञानशाकुन्तलम्, विक्रमोर्वशीयम्, मालविकाग्निमित्रम्)।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): कालिदासस्य 7 कृतयः: 2 महाकाव्ये + 2 खण्डकाव्ये + 3 नाटकानि।",
      "tip": ""
    },
    {
      "id": 31,
      "source": "BPSC Middle School Sanskrit",
      "en": "How many acts are there in Abhijnanashakuntalam?",
      "hi": "'अभिज्ञानशाकुन्तलम्' नाटके कति अङ्काः सन्ति?",
      "options": [
        "पञ्च (5)",
        "सप्त (7)",
        "दश (10)",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "सप्त (7)",
      "explanation": "कालिदासस्य सर्वश्रेष्ठनाटके 'अभिज्ञानशाकुन्तले' सप्त (7) अङ्काः सन्ति, यस्य चतुर्थोऽङ्कः सर्वाधिकप्रसिद्धः मर्मस्पर्शी च मन्यते ('काव्येषु नाटकं रम्यं तत्र रम्या शकुन्तला। तत्रापि च चतुर्थोऽङ्कः')।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): अभिज्ञानशाकुन्तलम् = 7 अङ्काः; शृङ्गाररसप्रधानम्; नायकः दुष्यन्तः (धीरोदात्तः), नायिका शकुन्तला। चतुर्थे अङ्के 4 श्लोकाः सर्वोत्कृष्टाः।",
      "tip": ""
    },
    {
      "id": 32,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "How many cantos are in Raghuvamsham?",
      "hi": "'रघुवंशम्' महाकाव्ये कति सर्गाः सन्ति?",
      "options": [
        "नवदश (19)",
        "सप्तदश (17)",
        "द्वाविंशतिः (22)",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "नवदश (19)",
      "explanation": "महाकवि कालिदासविरचिते 'रघुवंशम्' महाकाव्ये नवदश (19) सर्गाः सन्ति, यत्र दिलीप-रघु-अज-दशरथ-रामादीनां 31 सूर्यवंशीय-राजानां वर्णनं वर्तते।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): सर्गाः: रघुवंशम् = 19 सर्गाः; कुमारसम्भवम् = 17 सर्गाः; किरातार्जुनीयम् = 18 सर्गाः; शिशुपालवधम् = 20 सर्गाः; नैषधीयचरितम् = 22 सर्गाः।",
      "tip": ""
    },
    {
      "id": 33,
      "source": "BPSC TGT Sanskrit",
      "en": "Which text is not counted in 'Brihattrayi'?",
      "hi": "संस्कृतसाहित्ये 'बृहत्त्रयी' अन्तर्गतः कः ग्रन्थः न गण्यते?",
      "options": [
        "किरातार्जुनीयम्",
        "शिशुपालवधम्",
        "रघुवंशम्",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "रघुवंशम्",
      "explanation": "बृहत्त्रयी त्रयः ग्रन्थाः सन्ति: किरातार्जुनीयम् (भारविः), शिशुपालवधम् (माघः), नैषधीयचरितम् (श्रीहर्षः) - सूत्रम् 'किशिनै'। 'रघुवंशम्' तु लघुत्रय्याम् आगच्छति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): बृहत्त्रयी = किरातार्जुनीयम् (18), शिशुपालवधम् (20), नैषधीयचरितम् (22)। लघुत्रयी = रघुवंशम्, कुमारसम्भवम्, मेघदूतम् (कालिदासस्य त्रयः ग्रन्थाः)।",
      "tip": ""
    },
    {
      "id": 34,
      "source": "BPSC Middle School Sanskrit",
      "en": "'भारवेरर्थगौरवम्' इति प्रशंसोक्तिः कस्य कवेः कृते प्रसिद्धा? (For which poet is 'Bhāraverarthagauravam' famous?)",
      "hi": "'भारवेरर्थगौरवम्' इति प्रशंसोक्तिः कस्य कवेः कृते प्रसिद्धा? (For which poet is 'Bhāraverarthagauravam' famous?)",
      "options": [
        "माघस्य",
        "भारवेः",
        "दण्डिनः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "भारवेः",
      "explanation": "प्रसिद्धश्लोकः अस्ति: 'उपमा कालिदासस्य भारवेरर्थगौरवम्। दण्डिनः पदलालित्यं माघे सन्ति त्रयो गुणाः॥' अतः अर्थगौरवाय महाकविः भारविः प्रसिद्धः अस्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): चतुष्टय गुण स्मरतु: कालिदासः = उपमा; भारविः = अर्थगौरवम्; दण्डी = पदलालित्यम्; माघः = त्रयो गुणाः।",
      "tip": ""
    },
    {
      "id": 35,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "What is the very first word of Kiratarjuniyam?",
      "hi": "'किरातार्जुनीयम्' महाकाव्यस्य प्रथमः शब्दः कः अस्ति?",
      "options": [
        "श्रियः",
        "नमः",
        "कश्चित्",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "श्रियः",
      "explanation": "किरातार्जुनीयस्य मङ्गलाचरणम् 'श्रियः कुरुणामधिपस्य पालनीम्' इति 'श्रियः' शब्देन प्रारभ्यते, प्रत्येकसर्गस्य च अन्तिमः श्लोकः 'लक्ष्मी' शब्देन समाप्यते।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): किरातार्जुनीयम् = 'श्रियः' शब्देन आरम्भः, 'लक्ष्मी' शब्देन सर्गान्तः। शिशुपालवधम् = 'श्रियः' शब्देन आरम्भः, 'श्री' शब्देन सर्गान्तः।",
      "tip": ""
    },
    {
      "id": 36,
      "source": "BPSC TGT Sanskrit",
      "en": "Who is the author of Shishupalavadham?",
      "hi": "'शिशुपालवधम्' महाकाव्यस्य रचयिता कः अस्ति?",
      "options": [
        "महाकवि माघः",
        "श्रीहर्षः",
        "भारविः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "महाकवि माघः",
      "explanation": "'शिशुपालवधम्' महाकाव्यस्य प्रणेता महाकविः माघः अस्ति, यस्मिन् विंशतिः (20) सर्गाः सन्ति तथा श्रीकृष्णद्वारा शिशुपालस्य वधस्य कथा वर्णिता अस्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): माघः राजस्थानस्य भीनमाल-निवासी आसीत्। 'नवसर्गगते माघे नवशब्दो न विद्यते'।",
      "tip": ""
    },
    {
      "id": 37,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "Which work is famous as 'Vidvad-aushadham'?",
      "hi": "'विद्वदौषधम्' इति नाम्ना कः ग्रन्थः प्रसिद्धः अस्ति?",
      "options": [
        "नैषधीयचरितम्",
        "किरातार्जुनीयम्",
        "कादम्बरी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "नैषधीयचरितम्",
      "explanation": "श्रीहर्षविरचितं 'नैषधीयचरितम्' पाण्डित्यपूर्ण-क्लिष्टरचनात्वात् विदुषां कृते औषधसदृशं मन्यते ('नैषधं विद्वदौषधम्')। अत्र द्वाविंशतिः (22) सर्गाः सन्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): नैषधीयचरितम् = विद्वदौषधम्; नल-दमयन्त्याः कथा; शृङ्गाररसप्रधानम्; रचयिता श्रीहर्षः (कान्यकुब्जनरेशस्य जयचन्द्रस्य सभापण्डितः)।",
      "tip": ""
    },
    {
      "id": 38,
      "source": "BPSC Middle School Sanskrit",
      "en": "From which work is this sukti taken?",
      "hi": "'हितं मनोहारि च दुर्लभं वचः' इति सूक्तिः कस्मात् ग्रन्थात् उद्धृता?",
      "options": [
        "किरातार्जुनीयात्",
        "रघुवंशात्",
        "मेघदूतात्",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "किरातार्जुनीयात्",
      "explanation": "इयं सूक्तिः भारवेः 'किरातार्जुनीयम्' महाकाव्यस्य प्रथमसर्गात् उद्धृता, यत्र वनेचरः युधिष्ठिरं प्रति सत्यं किन्तु अप्रियं वचनं श्रावयन् इदं कथयति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): किरातार्जुनीयस्य अमर सूक्तयः: 'हितं मनोहारि च दुर्लभं वचः', 'अहो दुरन्ता बलवद्विरोधिता', 'सहसा विदधीत न क्रियाम्'।",
      "tip": ""
    },
    {
      "id": 39,
      "source": "BPSC TGT Sanskrit",
      "en": "What is the predominant sentiment in Uttararamacharitam?",
      "hi": "'उत्तररामचरितम्' नाटकस्य प्रधानः अङ्गीरसः कः अस्ति?",
      "options": [
        "वीररसः",
        "करुणरसः",
        "शृङ्गाररसः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "करुणरसः",
      "explanation": "भवभूतेः 'उत्तररामचरिते' करुणरसः एव प्रधानः अस्ति। स्वयं कविना उक्तम्: 'एको रसः करुण एव निमित्तभेदाद्भिन्नः पृथक् पृथगिवाश्रयते विवर्तान्'।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): भवभूतिः = करुणरसस्य मूर्धन्यकविः। उत्तररामचरिते 7 अङ्काः सन्ति, तृतीयोऽङ्कः 'छायाङ्कः' उच्यते।",
      "tip": ""
    },
    {
      "id": 40,
      "source": "BPSC Middle School Sanskrit",
      "en": "Who authored Dashakumaracharitam?",
      "hi": "'दशकुमारचरितम्' गद्यकाव्यस्य रचयिता कः अस्ति?",
      "options": [
        "दण्डी",
        "बाणभट्टः",
        "सुबन्धुः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "दण्डी",
      "explanation": "महाकविना दण्डिना 'दशकुमारचरितम्' तथा 'काव्यादर्शः' इति ग्रन्थद्वयं रचितम्। 'दण्डिनः पदलालित्यम्' इति तस्य पदविन्यासचातुर्यं प्रशंस्यते।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): दण्डी = दशकुमारचरितम् (गद्यकाव्यम्), काव्यादर्शः (काव्यशास्त्रम्), अवन्तिसुन्दरीकथा।",
      "tip": ""
    },
    {
      "id": 41,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "Whose prose work is Kadambari?",
      "hi": "'कादम्बरी' कस्य कवेः गद्यरचना अस्ति?",
      "options": [
        "बाणभट्टस्य",
        "दण्डिनः",
        "सुबन्धोः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "बाणभट्टस्य",
      "explanation": "'कादम्बरी' तथा 'हर्षचरितम्' महाकवि बाणभट्टस्य अमरगद्यकृतयः स्तः। बाणभट्टः सम्राट् हर्षवर्धनस्य सभाकविः आसीत्। 'बाणोच्छिष्टं जगत्सर्वम्' इति तस्य ख्यातिः।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): कादम्बरी = कथा (चन्द्रापीडस्य पुण्डरीकस्य च त्रिजन्मकथा); हर्षचरितम् = आख्यायिका (संस्कृतस्य प्रथमा ऐतिहासिक आख्यायिका)।",
      "tip": ""
    },
    {
      "id": 42,
      "source": "BPSC TGT Sanskrit",
      "en": "What is absent in Mudrarakshasam?",
      "hi": "'मुद्राराक्षसम्' नाटके कस्य अभावः वर्तते?",
      "options": [
        "विदूषकस्य",
        "नायिकायाः",
        "शृङ्गाररसस्य",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "उपर्युक्त में से एक से अधिक",
      "explanation": "विशाखदत्तविरचिते 'मुद्राराक्षसे' विदूषकस्य अभावः अस्ति, नायिकायाः अपि अभावः अस्ति, तथा शृङ्गाररसस्यापि अभावः वर्तते (शुद्धं राजनीतिकं नाटकम्)।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): मुद्राराक्षसस्य वैशिष्ट्यम्: विदूषकरहितम्, नायिकारहितम्, शृङ्गाररहितम् \\(\\rightarrow\\) विकल्पः (D) उपर्युक्त में से एक से अधिक उत्तरम्।",
      "tip": ""
    },
    {
      "id": 43,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "Which dramatic genre does Mricchakatikam belong to?",
      "hi": "'मृच्छकटिकम्' रूपकस्य कः प्रभेदः अस्ति?",
      "options": [
        "नाटकम्",
        "प्रकरणम्",
        "भाणः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "प्रकरणम्",
      "explanation": "महाराज शूद्रकविरचितं 'मृच्छकटिकम्' दशसु रूपकेषु 'प्रकरणम्' इति प्रभेदे आगच्छति, यस्मिन् दश (10) अङ्काः सन्ति, कथा च कविकल्पिता लोकसम्बन्धिनी अस्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): रूपकभेदाः: अभिज्ञानशाकुन्तलम् = नाटकम्; मृच्छकटिकम् = प्रकरणम्; मालतीमाधवम् = प्रकरणम्। मृच्छकटिकस्य नायकः चारुदत्तः, नायिका वसन्तसेना।",
      "tip": ""
    },
    {
      "id": 44,
      "source": "BPSC Middle School Sanskrit",
      "en": "Whose dramatic work is Swapnavasavadattam?",
      "hi": "'स्वप्नवासवदत्तम्' कस्य नाटककारस्य रचना अस्ति?",
      "options": [
        "भासस्य",
        "कालिदासस्य",
        "शूद्रकस्य",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "भासस्य",
      "explanation": "महाकवि भासस्य त्रयोदश (13) नाटकेषु 'स्वप्नवासवदत्तम्' सर्वोत्कृष्टं षडङ्कात्मकं नाटकम् अस्ति, यत्र उदयन-वासवदत्तयोः प्रणयकथा वर्णिता।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): भासस्य 13 नाटकानि टी. गणपतिशास्त्रिणा 1912 तमे वर्षे तिरुवनन्तपुरम्तः प्राप्तानि।",
      "tip": ""
    },
    {
      "id": 45,
      "source": "BPSC TGT Sanskrit",
      "en": "Which metre is used throughout Meghadutam?",
      "hi": "'मेघदूतम्' काव्ये कः छन्दः प्रयुक्तः अस्ति?",
      "options": [
        "मन्दाक्रान्ता",
        "शार्दूलविक्रीडितम्",
        "शिखरिणी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "मन्दाक्रान्ता",
      "explanation": "कालिदासस्य 'मेघदूते' आद्यन्तं केवलं 'मन्दाक्रान्ता' छन्दः एव प्रयुक्तः ('मन्दाक्रान्ताजलधिषडगैर्म्भौ नतौ ताद्गुरू चेत्')। अत्र विप्रलम्भशृङ्गाररसः अस्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): मेघदूतम् = मन्दाक्रान्ता छन्दः (17 वर्णाः, यतिः 4, 6, 7 वर्णे)। नायकः यक्षः, नायिका यक्षी, निर्वासितस्थानं रामगिरिः।",
      "tip": ""
    },
    {
      "id": 46,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "Who is the author of Venisamharam?",
      "hi": "'वेणीसंहारम्' नाटकस्य रचयिता कः अस्ति?",
      "options": [
        "भट्टनारायणः",
        "मुरारिः",
        "जयदेवः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "भट्टनारायणः",
      "explanation": "महाभारतकथाधारितस्य वीररसप्रधानस्य 'वेणीसंहारम्' नाटकस्य प्रणेता भट्टनारायणः अस्ति, यत्र भीमस्य प्रतिज्ञा तथा द्रौपद्याः वेणीबन्धनस्य कथा अस्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): वेणीसंहारम् = 6 अङ्काः; भट्टनारायणः; नायकः भीमसेनः; अङ्गीरसः वीररसः।",
      "tip": ""
    },
    {
      "id": 47,
      "source": "BPSC Middle School Sanskrit",
      "en": "Whose work is Gita Govindam?",
      "hi": "'गीतगोविन्दम्' कस्य महाकवेः रचना अस्ति?",
      "options": [
        "जयदेवस्य",
        "गोवर्धनाचार्यस्य",
        "विद्यापतेः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "जयदेवस्य",
      "explanation": "उत्कलवासी महाकवि जयदेवविरचितं 'गीतगोविन्दम्' द्वादश (12) सर्गेषु विभक्तं मधुरशृङ्गारमयं गीत्तिकाव्यम् अस्ति, यत्र राधाकृष्णयोः रासलीला वर्णिता।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): गीतगोविन्दम् = जयदेवः; 12 सर्गाः; 24 प्रबन्धाः; 'मधुरकोमलकान्तपदावली'।",
      "tip": ""
    },
    {
      "id": 48,
      "source": "BPSC Middle School Sanskrit",
      "en": "Who is the author of Panchatantram?",
      "hi": "'पञ्चतन्त्रम्' नीतिग्रन्थस्य रचयिता कः?",
      "options": [
        "विष्णुशर्मा",
        "नारायणपण्डितः",
        "सोमदेवः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "विष्णुशर्मा",
      "explanation": "पण्डित विष्णुशर्मणा राजपुत्राणां शिक्षार्थं 'पञ्चतन्त्रम्' रचितम्, यस्मिन् पञ्च तन्त्राणि सन्ति: मित्रभेदः, मित्रप्राप्तिः, काकोलूकीयम्, लब्धप्रणाशः, अपरीक्षितकारकम्।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): नीतिकथा ग्रन्थाः: पञ्चतन्त्रम् = विष्णुशर्मा; हितोपदेशः = नारायणपण्डितः; कथासरित्सागरः = सोमदेवः।",
      "tip": ""
    },
    {
      "id": 49,
      "source": "BPSC TGT Sanskrit",
      "en": "Whose work is Nitishatakam?",
      "hi": "'नीतिशतकम्' कस्य कवेः मुक्तककाव्यम् अस्ति?",
      "options": [
        "भर्तृहरेः",
        "अमरुकस्य",
        "कल्हणस्य",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "भर्तृहरेः",
      "explanation": "महाराजा भर्तृहरिणा 'शतकत्रयम्' रचितम्: नीतिशतकम्, शृङ्गारशतकम्, वैराग्यशतकम्। अस्य व्याकरणग्रन्थः 'वाक्यपदीयम्' अपि अतीव प्रसिद्धः।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): भर्तृहरि = शतकत्रयम् (नीति, शृङ्गार, वैराग्य) + वाक्यपदीयम् (दार्शनिक व्याकरणग्रन्थः)।",
      "tip": ""
    },
    {
      "id": 50,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "Who authored Rajatarangini?",
      "hi": "'राजतरङ्गिणी' ग्रन्थस्य रचयिता कः अस्ति?",
      "options": [
        "कल्हणः",
        "बिल्हणः",
        "जयानकः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "कल्हणः",
      "explanation": "काश्मीरस्य ऐतिहासिकवृत्तदर्शकः 'राजतरङ्गिणी' ग्रन्थः 1148–1150 ई० मध्ये महाकवि कल्हणेन विरचितः, यस्मिन् अष्टौ (8) तरङ्गाः सन्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): राजतरङ्गिणी = कल्हणः (काश्मीरस्य इतिहासः); विक्रमाङ्कदेवचरितम् = बिल्हणः; पृथ्वीराजविजयम् = जयानकः।",
      "tip": ""
    },
    {
      "id": 51,
      "source": "BPSC TGT Sanskrit",
      "en": "The first hymn of Rigveda is dedicated to which deity?",
      "hi": "ऋग्वेदस्य प्रथमं सूक्तम् कस्य देवस्य अस्ति?",
      "options": [
        "अग्नेः",
        "इन्द्रस्य",
        "वरुणस्य",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "अग्नेः",
      "explanation": "ऋग्वेदस्य प्रथममण्डलस्य प्रथमं सूक्तम् 'अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम्' इति अग्नये समर्पितम् अस्ति। अस्य ऋषिः मधुच्छन्दाः, छन्दः च गायत्री अस्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): ऋग्वेद प्रथम सूक्तम् = अग्नि सूक्तम् (1.1); ऋग्वेद अन्तिम सूक्तम् = संज्ञान सूक्तम् (10.191)।",
      "tip": ""
    },
    {
      "id": 52,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "In which mandala of Rigveda is Gayatri Mantra found?",
      "hi": "'गायत्री मन्त्रः' ऋग्वेदस्य कस्मिन् मण्डले वर्तते?",
      "options": [
        "तृतीये मण्डले",
        "दशमे मण्डले",
        "प्रथमे मण्डले",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "तृतीये मण्डले",
      "explanation": "गायत्री मन्त्रः ('तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्') ऋग्वेदस्य तृतीये मण्डले (3.62.10) वर्तते। अस्य ऋषिः विश्वामित्रः, देवता च सविता अस्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): गायत्री मन्त्रः: मण्डलम् = तृतीयम्; ऋषिः = विश्वामित्रः; देवता = सविता (सूर्यः); छन्दः = गायत्री (24 अक्षराणि)।",
      "tip": ""
    },
    {
      "id": 53,
      "source": "BPSC Middle School Sanskrit",
      "en": "From which Upanishad is 'Satyameva Jayate' taken?",
      "hi": "'सत्यमेव जयते' इति वाक्यं कस्मात् उपनिषदः उद्धृतम्?",
      "options": [
        "मुण्डकोपनिषदः",
        "माण्डूक्योपनिषदः",
        "कठोपनिषदः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "मुण्डकोपनिषदः",
      "explanation": "भारतस्य राष्ट्रियम् आदर्शवाक्यम् 'सत्यमेव जयते नानृतम्' अथर्ववेदीय 'मुण्डकोपनिषदः' (3.1.6) मन्त्रात् उद्धृतम् अस्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): उपनिषद् सूक्तयः: सत्यमेव जयते = मुण्डकोपनिषद्; नचिकेता-यम संवादः = कठोपनिषद्; अहंब्रह्मास्मि = बृहदारण्यकोपनिषद्; तत्त्वमसि = छान्दोग्योपनिषद्।",
      "tip": ""
    },
    {
      "id": 54,
      "source": "BPSC TGT Sanskrit",
      "en": "How many Vedangas are there?",
      "hi": "वेदाङ्गानां संख्या कति अस्ति?",
      "options": [
        "चत्वारः (4)",
        "षट् (6)",
        "अष्टौ (8)",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "षट् (6)",
      "explanation": "वेदाङ्गाः षट् सन्ति: शिक्षा (घ्राणं), कल्पः (करौ), व्याकरणम् (मुखं), निरुक्तम् (श्रोत्रं), छन्दः (पादौ), ज्योतिषम् (चक्षुः)।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): षड् वेदाङ्गानि: 'छन्दः पादौ तु वेदस्य हस्तौ कल्पोऽथ पठ्यते। ज्योतिषामयनं चक्षुर्निरुक्तं श्रोत्रमुच्यते। शिक्षा घ्राणं तु वेदस्य मुखं व्याकरणं स्मृतम्॥'",
      "tip": ""
    },
    {
      "id": 55,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "How many chapters and verses in Bhagavad Gita?",
      "hi": "श्रीमद्भगवद्गीतायां कति अध्यायाः कति च श्लोकाः सन्ति?",
      "options": [
        "18 अध्यायाः, 700 श्लोकाः",
        "16 अध्यायाः, 650 श्लोकाः",
        "20 अध्यायाः, 800 श्लोकाः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "18 अध्यायाः, 700 श्लोकाः",
      "explanation": "महाभारतस्य भीष्मपर्वणः (अध्याय 25–42) अन्तर्गतभूतायां श्रीमद्भगवद्गीतायां अष्टादश (18) अध्यायाः सप्तशतम् (700) श्लोकाः च सन्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): भगवद्गीता = महाभारतस्य भीष्मपर्व; 18 अध्यायाः; 700 श्लोकाः; उपदेशकः श्रीकृष्णः, श्रोता अर्जुनः।\nभाग ३: कृत्-तद्धित-स्त्रीप्रत्ययाः, शब्दरूपाणि, धातुरूपाणि, छन्दांसि, अलङ्काराः, काव्यशास्त्रम् च (प्रश्न ५६ तः ८०)",
      "tip": ""
    },
    {
      "id": 56,
      "source": "BPSC Middle School Sanskrit",
      "en": "'गत्वा' इत्यत्र कः प्रत्ययः प्रयुक्तः अस्ति? (Which suffix is used in 'Gatvā'?)",
      "hi": "'गत्वा' इत्यत्र कः प्रत्ययः प्रयुक्तः अस्ति? (Which suffix is used in 'Gatvā'?)",
      "options": [
        "क्त्वा",
        "ल्यप्",
        "तुमुन्",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "क्त्वा",
      "explanation": "'गम् + क्त्वा = गत्वा'। 'समानकर्तृकयोः पूर्वकाले' सूत्रेण पूर्वकालिकक्रियायां 'क्त्वा' प्रत्ययः भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): क्त्वा प्रत्ययान्तः अव्ययः भवति (पठित्वा, गत्वा, कृत्वा, श्रुत्वा)।",
      "tip": ""
    },
    {
      "id": 57,
      "source": "BPSC TGT Sanskrit",
      "en": "Which suffix replaces Ktva when a prefix is present?",
      "hi": "उपसर्गयुक्ते धातौ पूर्वकालिकक्रियायां कः प्रत्ययः भवति?",
      "options": [
        "ल्यप्",
        "क्त्वा",
        "शतृ",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "ल्यप्",
      "explanation": "'समासेऽनञ्पूर्वे क्त्वो ल्यप्' सूत्रेण नञ्-भिन्न-उपसर्गयुक्तात् धातोः क्त्वा-स्थाने 'ल्यप्' (य) आदेशः भवति (यथा- आ + गम् + ल्यप् = आगत्य/आगम्य; वि + हस् + ल्यप् = विहस्य)।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): यदि धातोः पूर्वम् उपसर्गः अस्ति, तदा क्त्वा स्थाने 'ल्यप्' (अन्ते 'य' दृश्यते): प्रणम्य, विहस्य, आदाय।",
      "tip": ""
    },
    {
      "id": 58,
      "source": "BPSC Middle School Sanskrit",
      "en": "Which suffix is in 'Pathitum'?",
      "hi": "'पठितुम्' इत्यत्र कः प्रत्ययः अस्ति?",
      "options": [
        "तुमुन्",
        "तव्यत्",
        "अनीयर्",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "तुमुन्",
      "explanation": "'तुमुन्ण्वुलौ क्रियायां क्रियार्थायाम्'। पठ् + तुमुन् = पठितुम् (पठनार्थम्)। अत्र 'तुम्' अवशिष्यते।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): तुमुन् प्रत्ययः निमित्तार्थकः/क्रियार्थकः भवति: गन्तुम् (गन्तुम् इच्छति), पठितुम्, पातुम्, क्रेतुम्।",
      "tip": ""
    },
    {
      "id": 59,
      "source": "BPSC TGT Sanskrit",
      "en": "Which suffix is in 'Kurvan'?",
      "hi": "'कुर्वन्' पदे कः कृत्-प्रत्ययः अस्ति?",
      "options": [
        "शतृ",
        "शानच्",
        "क्त",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "शतृ",
      "explanation": "'लक्षणे हेत्वोः क्रियायाः' तथा 'लटः शतृशानचावप्रथमासमानाधिकरणे'। कृ + शतृ = कुर्वन् (वर्तमानकाले परस्मैपदिभ्यः)।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): वर्तमानकालिक प्रत्ययौ: परस्मैपदिभ्यः = शतृ (पठन्, लिखन्, कुर्वन्); आत्मनेपदिभ्यः = शानच् (कुर्वाणः, सेवमानः)।",
      "tip": ""
    },
    {
      "id": 60,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "'सेवमानः' पदे कः प्रत्ययः प्रयुक्तः? (Which suffix is used in 'Sevamānah'?)",
      "hi": "'सेवमानः' पदे कः प्रत्ययः प्रयुक्तः? (Which suffix is used in 'Sevamānah'?)",
      "options": [
        "शानच्",
        "शतृ",
        "क्तवतु",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "शानच्",
      "explanation": "सेव् (आत्मनेपदी) + शानच् = सेवमानः। अत्र 'आन' अवशिष्यते तथा 'मुक्' आगमेन 'मान' भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): आत्मनेपदी धातोः वर्तमानकाले 'शानच्' प्रत्ययः: सेवमानः, वर्धमानः, याचमानः।",
      "tip": ""
    },
    {
      "id": 61,
      "source": "BPSC Middle School Sanskrit",
      "en": "'अज' शब्देन 'टाप्' प्रत्यये कृते किं रूपं सिद्ध्यति?",
      "hi": "'अज' शब्देन 'टाप्' प्रत्यये कृते किं रूपं सिद्ध्यति?",
      "options": [
        "अजा",
        "अजी",
        "अजानी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "अजा",
      "explanation": "'अजाद्यतष्टाप्' सूत्रेण अजादिगणे पठितेभ्यः अकारान्तेभ्यश्च प्रातिपदिकेभ्यः स्त्रियां 'टाप्' (आ) प्रत्ययः भवति। अज + टाप् = अजा।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): स्त्रीप्रत्ययाः: टाप् (अजा, बाला, अश्व), ङीप् (गौरी, नर्तकी), ङीष्, ङीन्।",
      "tip": ""
    },
    {
      "id": 62,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "'मति' शब्दस्य पञ्चमी-विभक्तेः एकवचने रूपं भवति",
      "hi": "'मति' शब्दस्य पञ्चमी-विभक्तेः एकवचने रूपं भवति",
      "options": [
        "मतेः",
        "मत्याः",
        "मत्याम्",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "उपर्युक्त में से एक से अधिक",
      "explanation": "इकारान्त-स्त्रीलिङ्ग 'मति' शब्दस्य पञ्चमी-षष्ठ्योः एकवचने रूपद्वयं भवति: 'मतेः' (ङिति ह्रस्वश्च सूत्रेण घिसंज्ञायां) तथा 'मत्याः' (नदीसंज्ञायां)। अतः द्वे अपि रूपे शुद्धे स्तः।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): मति शब्दस्य चतुर्थी, पञ्चमी, षष्ठी, सप्तमी एकवचने रूपद्वयं भवति: मत्यै/मतये, मत्याः/मतेः, मत्याम्/मतौ। द्वयोः सत्यत्वात् (D) उत्तरम्।",
      "tip": ""
    },
    {
      "id": 63,
      "source": "BPSC TGT Sanskrit",
      "en": "'वारि' (नपुंसकलिङ्ग) शब्दस्य प्रथमा-द्वितीया बहुवचने रूपं भवति",
      "hi": "'वारि' (नपुंसकलिङ्ग) शब्दस्य प्रथमा-द्वितीया बहुवचने रूपं भवति",
      "options": [
        "वारीणि",
        "वारिणी",
        "वारीणी",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "वारीणि",
      "explanation": "'वारि' शब्दस्य रूपाणि: वारि, वारिणी, वारीणि। प्रथमायाः द्वितीयायाश्च बहुवचने 'वारीणि' (दीर्घ ईकारः, ह्रस्व इकारयुक्त णकारः) रूपं सिद्ध्यति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): वारि रूपानि: वारि (एकवचनम्), वारिणी (द्विवचनम् - ह्रस्व ई, दीर्घ ई), वारीणि (बहुवचनम् - दीर्घ ई, ह्रस्व इ)।",
      "tip": ""
    },
    {
      "id": 64,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "'अस्मद्' सर्वनामशब्दस्य द्वितीया-विभक्तौ वैकल्पिकानि रूपाणि कानि भवन्ति?",
      "hi": "'अस्मद्' सर्वनामशब्दस्य द्वितीया-विभक्तौ वैकल्पिकानि रूपाणि कानि भवन्ति?",
      "options": [
        "मा, नौ, नः",
        "मे, नौ, नः",
        "ते, वाम्, वः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "मा, नौ, नः",
      "explanation": "'अस्मद्' शब्दस्य द्वितीयायां माम्, आवाम्, अस्मान् इत्येषां स्थाने 'मा, नौ, नः' इति वैकल्पिकादेशाः भवन्ति। चतुर्थी-षष्ठ्योः 'मे, नौ, नः' भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): अस्मद् वैकल्पिकादेशाः: द्वितीया = मा, नौ, नः; चतुर्थी/षष्ठी = मे, नौ, नः। युष्मद्: द्वितीया = त्वा, वाम्, वः; चतुर्थी/षष्ठी = ते, वाम्, वः।",
      "tip": ""
    },
    {
      "id": 65,
      "source": "BPSC Middle School Sanskrit",
      "en": "'गम्' धातोः लृट्लकारस्य (भविष्यत्काले) प्रथमपुरुष-एकवचने रूपं किम्?",
      "hi": "'गम्' धातोः लृट्लकारस्य (भविष्यत्काले) प्रथमपुरुष-एकवचने रूपं किम्?",
      "options": [
        "गमिष्यति",
        "गच्छिष्यति",
        "आगमिष्यति",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "गमिष्यति",
      "explanation": "'गम्' धातोः लृट्लकारे 'गम्' इत्यस्य 'गच्छ्' आदेशः न भवति (केवलं शिति परे लट्-लोट्-लङ्-विधिलिङ्गेषु गच्छ् भवति)। लृटि 'गमिष्यति' रूपं भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): गम् धातु भेदः: लट् = गच्छति; लोट् = गच्छतु; लङ् = अगच्छत्; विधिलिङ् = गच्छेत्; लृट् (भविष्यत्) = गमिष्यति।",
      "tip": ""
    },
    {
      "id": 66,
      "source": "BPSC TGT Sanskrit",
      "en": "'स्था' धातोः लोट्लकारस्य मध्यमपुरुष-एकवचने रूपं भवति",
      "hi": "'स्था' धातोः लोट्लकारस्य मध्यमपुरुष-एकवचने रूपं भवति",
      "options": [
        "तिष्ठ",
        "तिष्ठतु",
        "स्थास्यति",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "तिष्ठ",
      "explanation": "'स्था' धातोः लोट्लकारे रूपाणि: प्रथमपुरुषे- तिष्ठतु, तिष्ठताम्, तिष्ठन्तु; मध्यमपुरुषे- तिष्ठ, तिष्ठतम्, तिष्ठत। अतः एकवचने 'तिष्ठ' रूपं भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): लोट् लकार मध्यमपुरुष एकवचने 'हि' प्रत्ययस्य लुक् भवति: पठ् -> पठ; गम् -> गच्छ; स्था -> तिष्ठ।",
      "tip": ""
    },
    {
      "id": 67,
      "source": "BPSC Middle School Sanskrit",
      "en": "How many syllables per quarter in Anushtubh metre?",
      "hi": "'अनुष्टुप्' छन्दसि प्रतिपादं कति वर्णाः भवन्ति?",
      "options": [
        "अष्टौ (8)",
        "एकादश (11)",
        "द्वादश (12)",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "अष्टौ (8)",
      "explanation": "'श्लोके षष्ठं गुरु ज्ञेयं सर्वत्र लघु पञ्चमम्। द्विचतुष्पादयोर्ह्रस्वं सप्तमं दीर्घमन्ययोः॥' अनुष्टुप् छन्दसः प्रत्येकस्मिन् पादे अष्टौ (8) वर्णाः, सम्पूर्णे च श्लोके 32 वर्णाः भवन्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): छन्द वर्णसंख्या: अनुष्टुप् = 8; इन्द्रवज्रा/उपेन्द्रवज्रा = 11; वंशस्थ/द्रुतविलम्बित = 12; वसन्ततिलका = 14; मालिनी = 15; मन्दाक्रान्ता/शिखरिणी = 17; शार्दूलविक्रीडितम् = 19; स्रग्धरा = 21।",
      "tip": ""
    },
    {
      "id": 68,
      "source": "BPSC TGT Sanskrit",
      "en": "How many syllables in Indravajra metre?",
      "hi": "'इन्द्रवज्रा' छन्दसः प्रत्येकस्मिन् पादे कति वर्णाः भवन्ति?",
      "options": [
        "एकादश (11)",
        "द्वादश (12)",
        "चतुर्दश (14)",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "एकादश (11)",
      "explanation": "'स्यादिन्द्रवज्रा यदि तौ जगौ गः'। अत्र प्रतिपादम् एकादश (11) वर्णाः भवन्ति (गणक्रमः- तगण, तगण, जगण, गुरुद्वयम्)।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): 11 वर्णयुक्तानि छन्दांसि: इन्द्रवज्रा (त, त, ज, गा, गा); उपेन्द्रवज्रा (ज, त, ज, गा, गा); उपजातिः (अनयोः मिश्रणम्)।",
      "tip": ""
    },
    {
      "id": 69,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "'वागर्थाविव सम्पृक्तौ वागर्थप्रतिपत्तये। जगतः पितरौ वन्दे पार्वतीपरमेश्वरौ॥' अत्र कः अलङ्कारः अस्ति?",
      "hi": "'वागर्थाविव सम्पृक्तौ वागर्थप्रतिपत्तये। जगतः पितरौ वन्दे पार्वतीपरमेश्वरौ॥' अत्र कः अलङ्कारः अस्ति?",
      "options": [
        "उपमा",
        "रूपकम्",
        "उत्प्रेक्षा",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "उपमा",
      "explanation": "कालिदासस्य रघुवंशस्य अस्मिन् मङ्गलाचरणे 'इव' वाचकशब्देन पार्वतीपरमेश्वरयोः वागर्थेन सह सादृश्यं प्रतिपादितम्, अतः अत्र 'उपमा' अलङ्कारः अस्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): 'साधर्म्यमुपमा भेदे' (मम्मटः)। यत्र 'इव, यथा, सदृश, सम' इत्यादयः सादृश्यवाचकाः शब्दाः प्रयुक्ताः स्युः, सा उपमा।",
      "tip": ""
    },
    {
      "id": 70,
      "source": "BPSC TGT Sanskrit",
      "en": "'लिम्पतीव तमोऽङ्गानि वर्षतीवाञ्जनं नभः' इत्यत्र कः अलङ्कारः अस्ति?",
      "hi": "'लिम्पतीव तमोऽङ्गानि वर्षतीवाञ्जनं नभः' इत्यत्र कः अलङ्कारः अस्ति?",
      "options": [
        "उत्प्रेक्षा",
        "उपमा",
        "रूपकम्",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "उत्प्रेक्षा",
      "explanation": "'सम्भावनमथोत्प्रेक्षा प्रकृतस्य परात्मना'। अत्र अन्धकारव्याप्तेः अङ्गलेपनेन तथा नभसः अञ्जनवर्षणेन सह सम्भावना कृता अस्ति, अतः 'उत्प्रेक्षा' अलङ्कारः अस्ति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): उत्प्रेक्षायां सम्भावना व्यज्यते। वाचकशब्दाः: मन्ये, शङ्के, ध्रुवं, प्रायः, नूनम्, 'इव' (क्रियापदस्य योगे लिम्पतीव)।",
      "tip": ""
    },
    {
      "id": 71,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "Non-difference of Upamana and Upameya is",
      "hi": "'उपमानोपमेययोरभेदः' कस्य अलङ्कारस्य लक्षणम् अस्ति?",
      "options": [
        "रूपकस्य",
        "उपमायाः",
        "उत्प्रेक्षायाः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "रूपकस्य",
      "explanation": "काव्यप्रकाशे मम्मटेन उक्तम्: 'तद्रूपकमभेदो य उपमानोपमेययोः'। यत्र उपमेयस्य उपमानस्य च अभेदः आरोप्यते (यथा- मुखमेव चन्द्रः), तत्र रूपकालङ्कारः भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): अलङ्कार भेदाः: उपमा = सादृश्यम्; रूपकम् = अभेदः; उत्प्रेक्षा = सम्भावना; सन्देहः = संशयः।",
      "tip": ""
    },
    {
      "id": 72,
      "source": "BPSC TGT Sanskrit",
      "en": "Who is the author of Dhvanyaloka?",
      "hi": "'ध्वन्यालोकः' ग्रन्थस्य रचयिता कः अस्ति?",
      "options": [
        "आनन्दवर्धनः",
        "अभिनवगुप्तः",
        "मम्मटः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "आनन्दवर्धनः",
      "explanation": "ध्वनि-सिद्धान्तस्य प्रणेता महाचार्यः आनन्दवर्धनः नवमशताब्द्यां काश्मीरे 'ध्वन्यालोकम्' अरचयत्। अस्य प्रसिद्धटीका 'लोचन' अभिनवगुप्तेन विरचिता।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): ध्वनि-प्रवर्तकः = आनन्दवर्धनः ('काव्यस्यात्मा ध्वनिः'); ध्वन्यालोकलोचन टीकाकारः = अभिनवगुप्तः।",
      "tip": ""
    },
    {
      "id": 73,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "Whose work is Kavyaprakasha?",
      "hi": "'काव्यप्रकाशः' कस्य आलंकारिकस्य कृतिः अस्ति?",
      "options": [
        "मम्मटस्य",
        "विश्वनाथस्य",
        "जगन्नाथस्य",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "मम्मटस्य",
      "explanation": "काव्यशास्त्रस्य प्रामाणिकः ग्रन्थः 'काव्यप्रकाशः' दशसु उल्लासेषु आचार्य मम्मटेन (काश्मीरनिवासिना) विरचितः। अस्य काव्यलक्षणम्: 'तद्दोषौ शब्दार्थौ सगुणावनलङ्कृती पुनः क्वापि'।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): काव्यशास्त्र ग्रन्थाः: काव्यप्रकाशः = मम्मटः; साहित्यदर्पणः = विश्वनाथः; रसगंगाधरः = पण्डितराज जगन्नाथः।",
      "tip": ""
    },
    {
      "id": 74,
      "source": "BPSC Middle School Sanskrit",
      "en": "'वाक्यं रसात्मकं काव्यम्' इति काव्यलक्षणं केन प्रदत्तम्? (Who gave the definition 'Vākyam rasātmakam kāvyam'?)",
      "hi": "'वाक्यं रसात्मकं काव्यम्' इति काव्यलक्षणं केन प्रदत्तम्? (Who gave the definition 'Vākyam rasātmakam kāvyam'?)",
      "options": [
        "आचार्य विश्वनाथेन",
        "आचार्य मम्मटेन",
        "आचार्य भामहेन",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "आचार्य विश्वनाथेन",
      "explanation": "साहित्यदर्पणस्य रचयित्रा आचार्य विश्वनाथेन मम्मटस्य काव्यलक्षणं खण्डयित्वा रसध्वनिमयं 'वाक्यं रसात्मकं काव्यम्' इति स्वकीयं काव्यलक्षणं स्थापितम्।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): काव्यलक्षणानि: भामहः = शब्दार्थौ सहितौ काव्यम्; दण्डी = शरीरं तावदिष्टार्थव्यवच्छिन्ना पदावली; मम्मटः = तद्दोषौ शब्दार्थौ...; विश्वनाथः = वाक्यं रसात्मकं काव्यम्।",
      "tip": ""
    },
    {
      "id": 75,
      "source": "BPSC TGT Sanskrit",
      "en": "According to Natyashastra, how many Rasas are there?",
      "hi": "नाट्यशास्त्रानुसारं रसानां संख्या कति स्वीक्रियते?",
      "options": [
        "अष्टौ (8)",
        "नव (9)",
        "एकादश (11)",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "अष्टौ (8)",
      "explanation": "भरतमुनेः नाट्यशास्त्रे अष्टौ (8) रसाः एव स्वीकृताः सन्ति ('अष्टौ नाट्ये रसाः स्मृताः')। तत्र शान्तरसः नाट्ये न स्वीकृतः। काव्ये तु मम्मटादिभिः नवमः 'शान्तः' स्वीकृतः।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): नाट्ये भरतमुनिमतानुसारम् = 8 रसाः; काव्यशास्त्रे मम्मटमतानुसारम् = 9 रसाः (नवमः शान्तरसः, स्थायी निर्वेदः)।",
      "tip": ""
    },
    {
      "id": 76,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "रसनिष्पत्तौ भरतमुनेः रससूत्रस्य 'उत्पत्तिवाद' व्याख्याता कः अस्ति?",
      "hi": "रसनिष्पत्तौ भरतमुनेः रससूत्रस्य 'उत्पत्तिवाद' व्याख्याता कः अस्ति?",
      "options": [
        "भट्टलोल्लटः",
        "शङ्कुकः",
        "भट्टनायकः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "भट्टलोल्लटः",
      "explanation": "भरतमुनेः रससूत्रस्य 'विभावानुभावव्यभिचारिसंयोगाद्रसनिष्पत्तिः' चत्वारः व्याख्यातारः सन्ति: भट्टलोल्लटः (उत्पत्तिवादः/मीमांसा), शङ्कुकः (अनुमितिवादः/न्यायः), भट्टनायकः (भुक्तिवादः/सांख्यः), अभिनवगुप्तः (अभिव्यक्तिवादः/वेदान्त-शैव)।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): रससूत्र व्याख्यातारः: भट्टलोल्लटः = उत्पत्तिवादः; शङ्कुकः = अनुमितिवादः; भट्टनायकः = भुक्तिवादः; अभिनवगुप्तः = अभिव्यक्तिवादः।",
      "tip": ""
    },
    {
      "id": 77,
      "source": "BPSC Middle School Sanskrit",
      "en": "What is the Sthayi Bhava of Vira Rasa?",
      "hi": "'वीररसस्य' स्थायी भावः कः अस्ति?",
      "options": [
        "उत्साहः",
        "क्रोधः",
        "विस्मयः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "उत्साहः",
      "explanation": "वीररसस्य स्थायी भावः 'उत्साहः' अस्ति। क्रोधः रौद्रस्य, विस्मयः अद्भुतस्य, रतिः शृङ्गारस्य, हासः हास्यस्य स्थायी भावः भवति।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): स्थायी भावाः: शृङ्गारः = रतिः; हास्यः = हासः; करुणः = शोकः; रौद्रः = क्रोधः; वीरः = उत्साहः; भयानकः = भयम्; बीभत्सः = जुगुप्सा; अद्भुतम् = विस्मयः; शान्तः = निर्वेदः/शमः।",
      "tip": ""
    },
    {
      "id": 78,
      "source": "BPSC TGT Sanskrit",
      "en": "The primary power denoting literal sense is",
      "hi": "शब्दस्य मुख्यार्थं बोधयित्री प्रथमा शक्तिः का अस्ति?",
      "options": [
        "अभिधा",
        "लक्षणा",
        "व्यञ्जना",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "अभिधा",
      "explanation": "'स मुख्योऽर्थस्तत्र मुख्यो व्यापारोऽस्याभिधोच्यते'। साक्षात् संकेतिकार्थं (मुख्यार्थं वा वाच्यार्थं) प्रतिपादयित्री शब्दशक्तिः 'अभिधा' कथ्यते।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): शब्दशक्तयः तिस्रः: 1. अभिधा (वाच्यार्थः/मुख्यार्थः); 2. लक्षणा (लक्ष्यार्थः, मुख्यार्थबाधे); 3. व्यञ्जना (व्यङ्ग्यार्थः/ध्वनिः)।",
      "tip": ""
    },
    {
      "id": 79,
      "source": "BPSC Senior Secondary Sanskrit",
      "en": "Sahitya Akademi Award is given in how many languages?",
      "hi": "संस्कृतभाषायै साहित्य अकादमी पुरस्कारः कति भारतीयभाषासु दीयते?",
      "options": [
        "द्वाविंशतिः (22)",
        "चतुर्विंशतिः (24)",
        "अष्टाविंशतिः (28)",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "चतुर्विंशतिः (24)",
      "explanation": "साहित्य अकादमी पुरस्कारः भारतस्य संविधानस्य अष्टमसूच्यां परिगणितासु 22 भाषासु तथा आंग्ल-राजस्थानी-सहितासु चतुर्विंशतिः (24) भाषासु प्रतिवर्षं प्रदीयते।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): संविधानस्य 8वीं अनुसूची = 22 भाषाः; साहित्य अकादमी = 24 भाषाः (22 + आंग्ल + राजस्थानी)।",
      "tip": ""
    },
    {
      "id": 80,
      "source": "BPSC Middle School Sanskrit",
      "en": "Which is the most ancient Veda?",
      "hi": "सर्वप्राचीनः वेदः कः अस्ति?",
      "options": [
        "ऋग्वेदः",
        "सामवेदः",
        "यजुर्वेदः",
        "उपर्युक्त में से एक से अधिक",
        "उपर्युक्त में से कोई नहीं"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "ऋग्वेदः",
      "explanation": "मानवजातेः सर्वप्राचीनः ग्रन्थः 'ऋग्वेदः' अस्ति, यस्मिन् 10 मण्डलानि, 1028 सूक्तानि, 10,580 ऋचाः च सन्ति। अस्य प्रधानऋत्विक् 'होता' कथ्यते।परीक्षा-संकेतः (Exam Setter's Tips & Tricks): वेद-ऋत्विक् सम्बन्धाः: ऋग्वेदः = होता; यजुर्वेदः = अध्वर्युः; सामवेदः = उद्गाता; अथर्ववेदः = ब्रह्मा।\nBPSC TRE 4.0 संस्कृतम् - सम्पूर्ण उत्तर-कुञ्जिका (Master Answer Key Q1-Q80)\nप्रश्न\nउत्तर\nप्रश्न\nउत्तर\nप्रश्न\nउत्तर\nप्रश्न\nउत्तर",
      "tip": ""
    }
  ],
  "bpsc-tre4-science-80q": [
    {
      "id": 1,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "The human eye forms the image of an object on its",
      "hi": "मानव आँख में किसी वस्तु का प्रतिबिम्ब बनता है",
      "options": [
        "cornea",
        "retina",
        "pupil",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "retina",
      "explanation": "The eye lens focuses incident light rays onto the retina, a light-sensitive screen at the back of the eye containing photoreceptor rods and cones that generate electrical impulses.",
      "tip": "Cornea = transparent front window; Iris = regulates pupil diameter; Retina = screen where real and inverted image is formed."
    },
    {
      "id": 2,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Soundwaves travel fastest in",
      "hi": "ध्वनि तरंगों का सबसे तीव्र प्रगमन होता है",
      "options": [
        "solids",
        "liquids",
        "vacuum",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "solids",
      "explanation": "Mechanical sound waves propagate via particle collisions; higher elasticity and closer atomic packing in solids yield the highest acoustic velocity (approx. 5100 m/s in steel vs. 1500 m/s in water and 343 m/s in air).",
      "tip": "Sound velocity order: Solids > Liquids > Gases >> Vacuum (0 m/s, cannot travel through vacuum)."
    },
    {
      "id": 3,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Transfer of heat by convection can take place in",
      "hi": "संवहन द्वारा ऊष्मा का स्थानान्तरण हो सकता है",
      "options": [
        "solids and liquids",
        "solids and vacuum",
        "gases and liquids",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "gases and liquids",
      "explanation": "Convection involves macroscopic mass movement of fluid particles due to density gradients under gravity. Therefore, it occurs exclusively in fluids (liquids and gases).",
      "tip": "Conduction = Solids (fixed particles); Convection = Fluids (Liquids & Gases); Radiation = Vacuum & transparent media (no material medium required)."
    },
    {
      "id": 4,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "The power of a lens is measured in",
      "hi": "लेंस की शक्ति मापी जाती है",
      "options": [
        "dioptre",
        "aeon",
        "candela",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "dioptre",
      "explanation": "The optical power of a lens is defined as the reciprocal of its focal length expressed in metres (P = 1/f). Its SI unit is dioptre (D = m^-1).",
      "tip": "Candela = luminous intensity; Dioptre = lens power. Always convert focal length to metres before applying P = 1/f."
    },
    {
      "id": 5,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "The phenomenon used in optical fibre for transmission of light energy is\n(",
      "hi": "प्रकाशीय तन्तु (ऑप्टिकल फाइबर) में प्रकाश ऊर्जा के संचरण हेतु प्रयुक्त परिघटना है)",
      "options": [
        "total internal reflection",
        "diffraction",
        "refraction",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "total internal reflection",
      "explanation": "Optical fibres consist of a high refractive index core surrounded by lower refractive index cladding. Light launched at an angle exceeding the critical angle undergoes repeated total internal reflection without signal leakage.",
      "tip": "Two conditions for TIR: (1) Light must travel from denser to rarer medium, and (2) Angle of incidence must exceed critical angle."
    },
    {
      "id": 6,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following types of glass can cut ultraviolet (UV) rays?",
      "hi": "निम्नलिखित में से काँच का कौन-सा प्रकार पराबैंगनी किरणों को काट सकता है?",
      "options": [
        "Crookes glass",
        "Jena glass",
        "Pyrex glass",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Crookes glass",
      "explanation": "Crookes glass contains cerium oxide (CeO2), which absorbs harmful high-energy ultraviolet radiation while remaining transparent to visible light, making it ideal for sunglasses.",
      "tip": "Crookes glass = absorbs UV rays (sunglasses); Pyrex glass = heat-resistant borosilicate (lab apparatus); Flint glass = optical lenses and prisms."
    },
    {
      "id": 7,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "The velocity of electromagnetic waves in vacuum is",
      "hi": "निर्वात में विद्युत्-चुम्बकीय तरंगों का वेग होता है",
      "options": [
        "3 × 10^8 m/s",
        "3 × 10^7 m/s",
        "3 × 10^6 m/s",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "3 × 10^8 m/s",
      "explanation": "All electromagnetic waves (gamma rays, X-rays, UV, visible light, infrared, microwaves, and radio waves) propagate through free space (vacuum) at the universal speed of light c = 1 / sqrt(mu_0 * epsilon_0) approx. 3 × 10^8 m/s.",
      "tip": "Notice unit exponents carefully: 3 × 10^8 m/s = 3 × 10^5 km/s = 3 × 10^10 cm/s."
    },
    {
      "id": 8,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Kepler's second law (law of areas) is based on the conservation of\n(",
      "hi": "केप्लर का द्वितीय नियम (क्षेत्रफलीय चाल का नियम) किस संरक्षण पर आधारित है?)",
      "options": [
        "Newton's first law",
        "Newton's second law",
        "conservation of angular momentum",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "conservation of angular momentum",
      "explanation": "Because gravitational attraction is a central force, the net external torque acting on an orbiting planet about the Sun is zero (tau = r × F = 0). Consequently, its orbital angular momentum L = m * r^2 * omega remains constant, yielding constant areal velocity (dA/dt = L / 2m).",
      "tip": "Kepler's 1st Law = Law of Elliptical Orbits; Kepler's 2nd Law = Conservation of Angular Momentum; Kepler's 3rd Law = Harmonic Law (T^2 proportional to R^3)."
    },
    {
      "id": 9,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following is not a vector quantity?",
      "hi": "निम्नलिखित में से कौन-सी सदिश राशि नहीं है?",
      "options": [
        "Speed",
        "Displacement",
        "Velocity",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Speed",
      "explanation": "Speed is a scalar quantity possessing magnitude only, without directional dependence. Displacement and velocity are vector quantities requiring both magnitude and spatial direction.",
      "tip": "Scalars = Speed, Distance, Mass, Time, Work, Energy, Power; Vectors = Velocity, Displacement, Acceleration, Force, Momentum."
    },
    {
      "id": 10,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Solar energy is converted into electric energy through",
      "hi": "सौर ऊर्जा को विद्युत् ऊर्जा में किसके द्वारा परिवर्तित किया जाता है?",
      "options": [
        "voltaic cells",
        "dry cells",
        "photovoltaic cells",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "photovoltaic cells",
      "explanation": "Photovoltaic (solar) cells exploit the photoelectric/photovoltaic effect across a semiconductor p-n junction (such as silicon) to convert absorbed solar photons directly into electric current.",
      "tip": "Chemical to Electrical = Voltaic/Dry cell; Solar to Electrical = Photovoltaic (solar) cell; Mechanical to Electrical = Dynamo/Generator."
    },
    {
      "id": 11,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "In which of the following heat engines is a carburettor used?",
      "hi": "निम्नलिखित प्रकार के ऊष्मा इंजनों में से किसमें कार्बुरेटर का प्रयोग किया जाता है?",
      "options": [
        "Petrol engine",
        "Diesel engine",
        "Steam engine",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Petrol engine",
      "explanation": "A carburettor mixes atomized petrol with intake air in stoichiometric proportion before induction into the cylinder for spark ignition. Diesel engines utilize fuel injectors instead of carburettors.",
      "tip": "Petrol engine = Spark ignition + Carburettor; Diesel engine = Compression ignition + Fuel injector (no spark plug or carburettor)."
    },
    {
      "id": 12,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Lenz's law is based on the conservation of",
      "hi": "लेन्ज का नियम किस संरक्षण नियम पर आधारित है?",
      "options": [
        "energy",
        "charge",
        "momentum",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "energy",
      "explanation": "Lenz's law states that induced electromotive force opposes the magnetic flux change producing it. Mechanical work done in overcoming this opposing magnetic force is converted into electrical energy, satisfying conservation of energy.",
      "tip": "Kirchhoff's 1st Law (Junction) = Conservation of Charge; Kirchhoff's 2nd Law (Loop) = Conservation of Energy; Lenz's Law = Conservation of Energy."
    },
    {
      "id": 13,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Cosmic rays are",
      "hi": "कॉस्मिक किरणें हैं",
      "options": [
        "charged particles",
        "uncharged particles",
        "electromagnetic waves",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "charged particles",
      "explanation": "Cosmic rays are high-energy relativistic charged particles originating from outer space, consisting predominantly of positive protons (approx. 90%), alpha particles (9%), and heavier atomic nuclei.",
      "tip": "Cosmic rays are particulate radiation (positively charged nuclei), not photons or electromagnetic waves."
    },
    {
      "id": 14,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following is not an electromagnetic wave?",
      "hi": "निम्नलिखित में से कौन-सी विद्युत्-चुम्बकीय तरंग नहीं है?",
      "options": [
        "Gamma ray",
        "X-ray",
        "Beta ray",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Beta ray",
      "explanation": "Beta rays are high-speed streams of energetic electrons (beta-) or positrons (beta+) emitted during nuclear decay, possessing mass and charge. Gamma rays and X-rays are massless, chargeless electromagnetic waves.",
      "tip": "EM Waves: Radio, Microwave, Infrared, Visible, UV, X-rays, Gamma rays. Non-EM Particulate Streams: Alpha rays (He nuclei), Beta rays (electrons), Cathode rays."
    },
    {
      "id": 15,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "On heating, the electrical resistance of a semiconductor",
      "hi": "गर्म करने पर किसी अर्द्धचालक का विद्युत् प्रतिरोध",
      "options": [
        "increases",
        "decreases",
        "remains same",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "decreases",
      "explanation": "Semiconductors have a negative temperature coefficient of resistance (alpha < 0). Thermal energy breaks covalent bonds, liberating covalent electrons into the conduction band, vastly increasing charge carrier concentration and lowering resistance.",
      "tip": "Metals (Conductors) = Resistance increases on heating; Semiconductors & Electrolytes = Resistance decreases on heating."
    },
    {
      "id": 16,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Internal energy of an ideal gas in a cyclic thermodynamic process",
      "hi": "चक्रीय प्रक्रम में किसी गैस की आन्तरिक ऊर्जा",
      "options": [
        "increases",
        "decreases",
        "remains unchanged",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "remains unchanged",
      "explanation": "Internal energy is a thermodynamic state function dependent solely on temperature (U = f(T)). In any completed cyclic process, the system returns to its initial thermodynamic state (Delta U = 0), so net internal energy remains unchanged.",
      "tip": "For any cyclic process: Delta U = 0 (Internal energy change is zero); therefore Q = W (First Law of Thermodynamics)."
    },
    {
      "id": 17,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following is considered a better nuclear fuel?",
      "hi": "निम्नलिखित में से कौन-सा एक बेहतर नाभिकीय ईंधन है?",
      "options": [
        "Thorium 236",
        "Uranium 235",
        "Neptunium 239",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Uranium 235",
      "explanation": "Uranium-235 is a naturally occurring fissile isotope that readily undergoes nuclear fission upon capturing low-energy thermal neutrons, sustaining controlled chain reactions in nuclear power reactors.",
      "tip": "Fissile isotopes that split directly with thermal neutrons: U-235, Pu-239, U-233. Fertile isotopes requiring transmutation: U-238, Th-232."
    },
    {
      "id": 18,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "If the speed of sound in air at 0°C is 332 m/s, then at 35°C the speed of sound in air will be approximately",
      "hi": "यदि 0°C पर वायु में ध्वनि की चाल 332 मी०/से० है, तो 35°C पर वायु में ध्वनि की चाल लगभग होगी",
      "options": [
        "325 metres/second",
        "353 metres/second",
        "367 metres/second",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "353 metres/second",
      "explanation": "Acoustic velocity increases with temperature at the rate of approx. 0.61 m/s per °C: v_t = v_0 + 0.61 * t = 332 + 0.61 * 35 = 332 + 21.35 = 353.35 m/s approx. 353 m/s.",
      "tip": "Rule of thumb: Velocity of sound increases by 0.61 m/s for every 1°C increase in temperature."
    },
    {
      "id": 19,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Magnetic domains are formed in which of the following substances?",
      "hi": "चुम्बकीय डोमेन निम्नलिखित में से किस पदार्थ में बनते हैं?",
      "options": [
        "Diamagnetic",
        "Paramagnetic",
        "Ferromagnetic",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Ferromagnetic",
      "explanation": "Ferromagnetic materials (such as iron, cobalt, and nickel) contain microscopic regions called magnetic domains (approx. 10^17 to 10^21 atoms each) where exchange coupling aligns atomic dipoles in a spontaneous common direction.",
      "tip": "Domains = Ferromagnetic only; Diamagnetic = Weakly repelled; Paramagnetic = Weakly attracted with randomly oriented dipoles."
    },
    {
      "id": 20,
      "source": "BPSC Middle School & TGT Science",
      "en": "Monochromatic light enters from one optical medium to another. Which one of the following physical properties does not change?",
      "hi": "एकवर्णी प्रकाश एक माध्यम से दूसरे माध्यम में प्रवेश करता है। निम्नलिखित में से कौन-सा भौतिक गुण नहीं बदलता है?",
      "options": [
        "Frequency",
        "Amplitude",
        "Velocity",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Frequency",
      "explanation": "The frequency of light depends exclusively on the atomic oscillations of the generating source. During refraction across media boundaries, velocity and wavelength decrease proportionally (v = f * lambda), leaving frequency invariant.",
      "tip": "In refraction: Frequency (f) remains invariant; Velocity (v) and Wavelength (lambda) change proportionally; Wave slows down and bends towards normal in denser media.\nSection 2: Chemistry (रसायन विज्ञान) — Questions 21 to 40\nPeriodic Trends, Molecular Structure, Coordination Chemistry, Organic Mechanisms & Thermochemistry"
    },
    {
      "id": 21,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following is an intensive property?\n(",
      "hi": "निम्नलिखित में से कौन-सा एक गहन (विशिष्ट) गुणधर्म है?)",
      "options": [
        "Refractive index",
        "Volume",
        "Mass",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Refractive index",
      "explanation": "An intensive property is independent of the size or quantity of matter in the thermodynamic system. Refractive index, density, temperature, and pressure are intensive, whereas mass and volume are extensive.",
      "tip": "Extensive = depends on sample size (Mass, Volume, Enthalpy, Heat capacity); Intensive = independent of sample size (Density, Refractive index, Temperature, Viscosity)."
    },
    {
      "id": 22,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "The decreasing order of second ionization potential of Carbon (C), Nitrogen (N), Oxygen (O), and Fluorine (F) is\n(",
      "hi": "कार्बन (C), नाइट्रोजन (N), ऑक्सीजन (O) और फ्लोरीन (F) के द्वितीय आयनन विभव का घटता क्रम है)",
      "options": [
        ", Nitrogen (N), Oxygen (O), and Fluorine (F) is\n(कार्बन",
        ", नाइट्रोजन (N), ऑक्सीजन (O) और फ्लोरीन (F) के द्वितीय आयनन विभव का घटता क्रम है)",
        "O > F > N > C",
        "C > N > O > F",
        "O > N > F > C"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "O > F > N > C",
      "explanation": "Second ionization removes an electron from the unipositive cation. O+ has the stable half-filled electronic configuration 2s^2 2p^3, requiring the highest removal energy, making its second IP greater than that of F+ (2p^4), N+ (2p^2), and C+ (2p^1).",
      "tip": "Always write the electronic configuration of the M+ cation when analyzing 2nd Ionization Potential. O+ is 2p^3 (half-filled stability), hence O has the highest 2nd IP."
    },
    {
      "id": 23,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following elements has the largest atomic size?",
      "hi": "निम्नलिखित में से किसका परमाणु आकार सबसे बड़ा है?",
      "options": [
        "Mg",
        "Be",
        "Ra",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Ra",
      "explanation": "All three elements belong to Group 2 (alkaline earth metals). Down a periodic group, principal quantum shells are progressively added, so atomic radius increases: Be (period 2) < Mg (period 3) < Ca < Sr < Ba < Ra (period 7, largest).",
      "tip": "Periodic trend: Atomic radius increases down a group (due to increasing shells) and decreases across a period left-to-right (due to increasing effective nuclear charge)."
    },
    {
      "id": 24,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "The number of nodal planes in a p_x-orbital is",
      "hi": "p_x-कक्षक में नोडल तलों की संख्या होती है",
      "options": [
        "1",
        "2",
        "3",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "1",
      "explanation": "The number of angular nodes (nodal planes) for any atomic subshell equals its azimuthal quantum number (l). For a p-orbital, l = 1; specifically, the p_x orbital has exactly one nodal plane, which is the yz-plane.",
      "tip": "Nodal planes = l. s-orbital (l=0) has 0; p-orbital (l=1) has 1; d-orbital (l=2) has 2 (except d_z^2 which has 2 nodal cones)."
    },
    {
      "id": 25,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Intermolecular hydrogen bonding is strongest in which of the following compounds?",
      "hi": "निम्नलिखित यौगिकों में से किसमें अंतराआण्विक हाइड्रोजन बंधन सबसे प्रबल होगा?",
      "options": [
        "C2H5OC2H5",
        "(C2H5)3N",
        "C2H5OH",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "C2H5OH",
      "explanation": "Ethanol (C2H5OH) contains hydrogen directly bonded to highly electronegative oxygen (O-H), establishing strong intermolecular hydrogen bonding. Diethyl ether lacks O-H bonds, and triethylamine lacks N-H bonds.",
      "tip": "Hydrogen bonding requires H bonded directly to F, O, or N (FON). Ethers and tertiary amines have no acidic H on heteroatoms."
    },
    {
      "id": 26,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "The oxidation number of iron (Fe) in sodium nitroprusside, Na2[Fe(CN)5(NO)], is\n(",
      "hi": "सोडियम नाइट्रोप्रुसाइड, Na2[Fe(CN)5(NO)] में आयरन (Fe) की ऑक्सीकरण संख्या है)",
      "options": [
        "+3",
        "+2",
        "-4",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "+2",
      "explanation": "In sodium nitroprusside, the nitrosyl ligand exists as the nitrosonium cation (NO+). Setting up the coordination sphere charge equation: x + 5(-1) + 1(+1) = -2 yields x - 4 = -2, so x = +2.",
      "tip": "Nitroprusside trap: NO is coordinated as NO+ (positive nitrosyl), NOT neutral NO. Hence Fe is in the +2 oxidation state."
    },
    {
      "id": 27,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "How many sigma (sigma) and pi (pi) bonds are present in a tetracyanoethylene molecule?\n(",
      "hi": "टेट्रासायनोएथिलीन अणु में कितने सिग्मा (sigma) और पाई (pi) बंध उपस्थित होते हैं?)",
      "options": [
        "9 sigma and 9 pi bonds",
        "5 sigma and 9 pi bonds",
        "9 sigma and 7 pi bonds",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "9 sigma and 9 pi bonds",
      "explanation": "Structure (NC)2C=C(CN)2: Contains one central C=C double bond (1 sigma, 1 pi), four C-C single bonds (4 sigma), and four -C#N cyano triple bonds (4 sigma, 8 pi). Total = 1+4+4 = 9 sigma bonds and 1+8 = 9 pi bonds.",
      "tip": "Single bond = 1 sigma; Double bond = 1 sigma + 1 pi; Triple bond = 1 sigma + 2 pi. Sum carefully: 4 nitriles give 4 sigma and 8 pi."
    },
    {
      "id": 28,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following synthetic polymers is a polyamide?",
      "hi": "निम्नलिखित में से कौन-सा संश्लेषित बहुलक एक पॉलिएमाइड है?",
      "options": [
        "Nylon",
        "Polythene",
        "Bakelite",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Nylon",
      "explanation": "Nylons (such as Nylon-6,6 and Nylon-6) are condensation polymers joined by recurring amide linkages (-CO-NH-), classifying them as polyamides. Polythene is an addition polyalkene, and Bakelite is a phenol-formaldehyde resin.",
      "tip": "Polyamides = Nylon 6, Nylon 6,6; Polyesters = Terylene / Dacron; Phenol resins = Bakelite; Addition polymers = Polythene, PVC, Teflon."
    },
    {
      "id": 29,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following hydrocarbons does not give a red precipitate with ammoniacal cuprous chloride?",
      "hi": "निम्नलिखित में से कौन-सा हाइड्रोकार्बन अमोनियाकल क्यूप्रस क्लोराइड के साथ लाल अवक्षेप नहीं देता है?",
      "options": [
        "C2H2",
        "C3H4",
        "CH3-C#C-CH3",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "CH3-C#C-CH3",
      "explanation": "Ammoniacal cuprous chloride reacts selectively with terminal alkynes possessing acidic acetylenic hydrogen atoms (H-C#C-R) to form red copper acetylide precipitates. But-2-yne (CH3-C#C-CH3) is an internal alkyne with no terminal sp-hybridized hydrogen.",
      "tip": "Red ppt with Cu2Cl2 / white ppt with Tollens' reagent requires a terminal alkyne (-C#CH). Internal alkynes (R-C#C-R) give no reaction."
    },
    {
      "id": 30,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following carbocations is the most stable?",
      "hi": "निम्नलिखित में से कौन-सा कार्बोधनायन सर्वाधिक स्थायी है?",
      "options": [
        "(CH3)3C+",
        "(C6H5)3C+",
        "CH2=CH-CH2+",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "(C6H5)3C+",
      "explanation": "The triphenylmethyl (trityl) carbocation, (C6H5)3C+, is exceptionally stabilized because the positive charge is delocalized over three aromatic phenyl rings across nine contributing canonical resonance structures.",
      "tip": "Carbocation stability: Triphenylmethyl > Diphenylmethyl > Benzyl > Allyl approx. 3° alkyl > 2° alkyl > 1° alkyl > methyl."
    },
    {
      "id": 31,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following carboxylic acids is the strongest acid?",
      "hi": "निम्नलिखित में से कौन-सा अम्ल प्रबलतम है?",
      "options": [
        "CH3CH2COOH",
        "CH3CHClCOOH",
        "CH3CH2CH2COOH",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "CH3CHClCOOH",
      "explanation": "2-Chloropropanoic acid (CH3CHClCOOH) possesses an electronegative chlorine atom at the alpha-carbon, exerting a strong electron-withdrawing inductive effect (-I effect) that disperses negative charge on the carboxylate anion, stabilizing it.",
      "tip": "I effect increases acid strength. Closer the halogen to the -COOH group (alpha > beta > gamma), stronger the acid."
    },
    {
      "id": 32,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following species behaves as a nucleophilic reagent?\n(",
      "hi": "निम्नलिखित में से कौन-सा अभिकर्मक नाभिकस्नेही (न्यूक्लियोफाइल) की तरह व्यवहार करता है?)",
      "options": [
        "R3N",
        "SO3",
        "NO2+",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "R3N",
      "explanation": "A nucleophile is an electron-rich Lewis base capable of donating an electron pair. Tertiary amines (R3N) carry an unshared non-bonding lone pair of electrons on nitrogen. SO3 and NO2+ are electron-deficient electrophiles.",
      "tip": "Nucleophile = lone pair or negative charge (R3N, NH3, H2O, OH-); Electrophile = positive charge or incomplete octet (NO2+, AlCl3, SO3)."
    },
    {
      "id": 33,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Markownikoff's rule is applicable to which of the following addition reactions?",
      "hi": "मार्कोनीकॉफ का नियम निम्नलिखित में से किस योगशील अभिक्रिया पर लागू होता है?",
      "options": [
        "HCl + CH2=CH2",
        "Cl2 + CH3CH=CH2",
        "HBr + CH3CH=CH2",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "HBr + CH3CH=CH2",
      "explanation": "Markownikoff's rule applies strictly to the addition of an unsymmetrical polar reagent (like HBr) across an unsymmetrical alkene (like propene, CH3CH=CH2), directing the electrophilic H+ to the carbon holding more hydrogens.",
      "tip": "Markownikoff's rule prerequisites: Both the alkene AND the adding reagent must be unsymmetrical (CH3-CH=CH2 + H-Br)."
    },
    {
      "id": 34,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following is a functional isomer of diethyl ether (C4H10O)?\n(",
      "hi": "डाईएथिल ईथर (C4H10O) का क्रियात्मक समावयवी कौन-सा है?)",
      "options": [
        "(CH3)3C-OH",
        "(CH3)2CHOH",
        "(C2H5)2CHOH",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "(CH3)3C-OH",
      "explanation": "Ethers and monohydric alcohols of formula CnH2n+2O are functional isomers. Diethyl ether (C4H10O) has 4 carbons; tert-butyl alcohol (CH3)3C-OH also has molecular formula C4H10O, making it an isomer.",
      "tip": "Count carbons first: Diethyl ether = 4 carbons. (CH3)2CHOH has 3 carbons; (C2H5)2CHOH has 5 carbons; (CH3)3C-OH has 4 carbons."
    },
    {
      "id": 35,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following statements regarding phosphine (PH3) and ammonia (NH3) is true?\n(",
      "hi": "फॉस्फीन (PH3) और अमोनिया (NH3) के संदर्भ में कौन-सा कथन सत्य है?)",
      "options": [
        "PH3 is less alkaline as compared to NH3",
        "PH3 is more alkaline as compared to NH3",
        "PH3 is amphoteric while NH3 is alkaline",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "PH3 is less alkaline as compared to NH3",
      "explanation": "Phosphorus is larger in size and less electronegative than nitrogen, so its lone pair occupies a diffused, almost non-hybridized 3s orbital with lower electron density, making PH3 a substantially weaker Lewis base than NH3.",
      "tip": "Basicity of Group 15 hydrides decreases down the group: NH3 > PH3 > AsH3 > SbH3 > BiH3."
    },
    {
      "id": 36,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following chemical compounds does not liberate oxygen gas on thermal decomposition?",
      "hi": "निम्नलिखित में से कौन-सा रासायनिक यौगिक गर्म करने पर ऑक्सीजन गैस नहीं देता है?",
      "options": [
        "Zn(ClO3)2",
        "K2Cr2O7",
        "(NH4)2Cr2O7",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "(NH4)2Cr2O7",
      "explanation": "Ammonium dichromate decomposes thermally via internal redox to produce nitrogen gas, chromic oxide, and steam: (NH4)2Cr2O7 -> N2 + Cr2O3 + 4 H2O. Potassium dichromate and chlorates liberate oxygen gas on heating.",
      "tip": "Heating (NH4)2Cr2O7 gives nitrogen (N2) gas (the 'chemical volcano' reaction); it does NOT release oxygen."
    },
    {
      "id": 37,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Chloroform (CHCl3) on oxidation by atmospheric oxygen in the presence of sunlight gives\n(",
      "hi": "सूर्य के प्रकाश की उपस्थिति में वायुमण्डलीय ऑक्सीजन द्वारा क्लोरोफॉर्म (CHCl3) के ऑक्सीकरण से प्राप्त होता है)",
      "options": [
        "phosgene",
        "formic acid",
        "chloropicrin",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "phosgene",
      "explanation": "In the presence of light and air, chloroform slowly oxidizes to produce the extremely toxic, suffocating gas carbonyl chloride (phosgene, COCl2): 2 CHCl3 + O2 -> 2 COCl2 + 2 HCl.",
      "tip": "To prevent toxic phosgene formation, chloroform is stored in dark brown bottles filled to the brim with 1% ethanol added as a negative catalyst."
    },
    {
      "id": 38,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Chemically, the widely used analgesic drug Aspirin is",
      "hi": "रासायनिक रूप से, व्यापक रूप से प्रयुक्त दर्द निवारक दवा एस्पिरिन है",
      "options": [
        "Methyl salicylic acid",
        "Acetyl salicylic acid",
        "Acetyl salicylate",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Acetyl salicylic acid",
      "explanation": "Aspirin is 2-acetoxybenzoic acid (acetylsalicylic acid), synthesized industrially via acetylation of the phenolic -OH group of salicylic acid with acetic anhydride in the presence of concentrated sulfuric acid.",
      "tip": "Aspirin = Acetyl salicylic acid (analgesic/antipyretic); Oil of wintergreen = Methyl salicylate; Salol = Phenyl salicylate."
    },
    {
      "id": 39,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following haloalkanes reacts with aqueous potassium hydroxide (KOH) to yield acetaldehyde?\n(",
      "hi": "निम्नलिखित में से कौन-सा हैलोएल्केन जलीय पोटैशियम हाइड्रॉक्साइड (KOH) के साथ अभिक्रिया करके एसीटैल्डिहाइड बनाता है?)",
      "options": [
        "CH3CH2Cl",
        "CH3CHCl2",
        "CH3COCl",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "CH3CHCl2",
      "explanation": "Ethylidene chloride, CH3CHCl2 (a gem-dihalide), undergoes nucleophilic substitution with aqueous KOH to form an unstable gem-diol [CH3CH(OH)2], which spontaneously eliminates a water molecule to yield acetaldehyde (CH3CHO).",
      "tip": "Gem-dihalide with two halogens on the end carbon (R-CHX2) yields an aldehyde; gem-dihalide on an internal carbon (R-CX2-R) yields a ketone."
    },
    {
      "id": 40,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "The standard electrode reduction potentials of three metals X, Y, and Z are -3.05 V, -1.66 V, and -0.40 V respectively. The strongest reducing agent among them is",
      "hi": "तीन धातुओं X, Y और Z के मानक इलेक्ट्रोड अपचयन विभव क्रमशः -3.05 V, -1.66 V तथा -0.40 V हैं। इनमें से सबसे प्रबल अपचायक है",
      "options": [
        "X",
        "Y",
        "Z",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "X",
      "explanation": "A more negative standard reduction potential signifies a greater tendency to lose electrons (undergo oxidation) and therefore a stronger reducing capability. Metal X with E° = -3.05 V is the most powerful reducing agent.",
      "tip": "Standard Reduction Potential rule: More negative E° value = Stronger reducing agent (e.g., Lithium). More positive E° value = Stronger oxidizing agent (e.g., Fluorine).\nSection 3: Botany / Plant Sciences (वनस्पति विज्ञान) — Questions 41 to 60\nPlant Morphology & Anatomy, Photosynthesis, Taxonomic Classifications, Phytohormones & Economic Botany"
    },
    {
      "id": 41,
      "source": "BPSC Middle School & TGT Science",
      "en": "The primary intracellular site of photosynthesis in the cells of a green leaf is",
      "hi": "हरी पत्ती की कोशिकाओं में प्रकाश-संश्लेषण का प्राथमिक अंतःकोशिकीय स्थल है",
      "options": [
        "mitochondria",
        "cytoplasm",
        "chloroplast",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "chloroplast",
      "explanation": "Chloroplasts are double-membrane organelles containing chlorophyll pigments; light-dependent reactions occur on the thylakoid grana membranes, while the light-independent Calvin cycle occurs in the stroma.",
      "tip": "Mitochondria = Cellular respiration (Powerhouse of cell); Ribosomes = Protein synthesis; Chloroplasts = Photosynthesis (Kitchen of cell)."
    },
    {
      "id": 42,
      "source": "BPSC Middle School & TGT Science",
      "en": "In vascular plants, the complex permanent tissue responsible for the translocation of food (sucrose) is\n(",
      "hi": "संवहनी पौधों में भोजन (सुक्रोज) के स्थानांतरण के लिए उत्तरदायी जटिल स्थायी ऊतक है)",
      "options": [
        "xylem",
        "phloem",
        "parenchyma",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "phloem",
      "explanation": "Phloem conducts soluble organic substances synthesized during photosynthesis (predominantly sucrose) bidirectionally from source to sink via sieve tube elements and companion cells.",
      "tip": "Xylem = Unidirectional transport of water and dissolved minerals; Phloem = Bidirectional translocation of organic nutrients (food)."
    },
    {
      "id": 43,
      "source": "BPSC Senior Secondary Botany - Advt. 24/2023",
      "en": "The photosynthetic accessory pigments phycocyanin and phycoerythrin are characteristic of",
      "hi": "प्रकाश-संश्लेषी सहायक वर्णक फाइकोसायनिन और फाइकोएरिथ्रिन किसकी विशेषता हैं?",
      "options": [
        "Chlorophyceae",
        "Cyanophyceae and Rhodophyceae",
        "Phaeophyceae",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 3,
      "answer_letter": "D",
      "answer_text": "More than one of the above",
      "explanation": "Phycobiliprotein pigments, notably red phycoerythrin and blue phycocyanin, occur water-solubly in Cyanophyceae (blue-green algae) and Rhodophyceae (red algae). Since both classes contain these pigments, Option (D) is triggered.",
      "tip": "Chlorophyceae (Green algae) = Chlorophyll a, b; Phaeophyceae (Brown algae) = Fucoxanthin; Rhodophyceae (Red algae) = r-Phycoerythrin & r-Phycocyanin."
    },
    {
      "id": 44,
      "source": "BPSC Senior Secondary Botany - Advt. 24/2023",
      "en": "Which of the following is an edible special inflorescence?",
      "hi": "निम्नलिखित में से कौन-सा एक खाने योग्य विशेष पुष्पक्रम है?",
      "options": [
        "corymb",
        "catkin",
        "hypanthodium",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "hypanthodium",
      "explanation": "In the genus Ficus (fig, banyan, gular), the fleshy, flask-shaped receptacle with a tiny apical pore bears microscopic flowers internally, constituting an edible hypanthodium inflorescence (syconus fruit).",
      "tip": "Fig (अंजीर) and Gular = Hypanthodium inflorescence; Pineapple and Mulberry = Sorosis fruit developing from spike/spadix/catkin."
    },
    {
      "id": 45,
      "source": "BPSC Senior Secondary Botany - Advt. 24/2023",
      "en": "In a racemose (raceme) inflorescence, the flowers are arranged\n(",
      "hi": "रेसीम (असीमाक्षी) पुष्पक्रम में फूल किस क्रम में व्यवस्थित होते हैं?)",
      "options": [
        "acropetally",
        "basipetally",
        "centripetally",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "acropetally",
      "explanation": "In racemose inflorescences, the main floral axis continues indeterminate growth, bearing flowers laterally in acropetal succession (oldest flowers at the base, progressively younger buds towards the apex).",
      "tip": "Racemose = Indeterminate growth, Acropetal succession (youngest at apex); Cymose = Determinate growth, Basipetal succession (youngest at base)."
    },
    {
      "id": 46,
      "source": "BPSC Senior Secondary Botany - Advt. 24/2023",
      "en": "Which of the following carbohydrates is a hexose monosaccharide?",
      "hi": "निम्नलिखित में से कौन-सा कार्बोहाइड्रेट एक हेक्सोज़ मोनोसैकराइड है?",
      "options": [
        "Mannose",
        "Cellulose",
        "Xylulose",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Mannose",
      "explanation": "Mannose is a six-carbon aldohexose sugar with formula C6H12O6 (a C-2 epimer of glucose). Cellulose is a complex structural polysaccharide, while xylulose is a five-carbon ketopentose.",
      "tip": "Hexoses (6 Carbons) = Glucose, Fructose, Galactose, Mannose; Pentoses (5 Carbons) = Ribose, Deoxyribose, Xylulose; Polysaccharides = Starch, Cellulose."
    },
    {
      "id": 47,
      "source": "BPSC Senior Secondary Botany - Advt. 24/2023",
      "en": "Which of the following classification systems was proposed and utilized by Carl Linnaeus?",
      "hi": "कार्ल लिनियस द्वारा पादप जगत के वर्गीकरण हेतु कौन-सी प्रणाली प्रयुक्त की गई थी?",
      "options": [
        "Phylogenetic system",
        "Natural system",
        "Artificial system",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Artificial system",
      "explanation": "Carl Linnaeus established an artificial system of plant classification (known as the sexual system) based purely on superficial morphological characteristics, primarily the numerical count of stamens and styles.",
      "tip": "Artificial System = Linnaeus (stamen numbers); Natural System = Bentham & Hooker; Phylogenetic System = Engler & Prantl, Hutchinson."
    },
    {
      "id": 48,
      "source": "BPSC Senior Secondary Botany - Advt. 24/2023",
      "en": "Which plant hormone acts as a stress hormone by triggering the closure of stomata during water deficit?\n(",
      "hi": "जल संकट के समय रंध्रों (स्टोमेटा) को बंद करके कौन-सा पादप हॉर्मोन 'तनाव हॉर्मोन' के रूप में कार्य करता है?)",
      "options": [
        "Abscisic acid (ABA)",
        "Gibberellic acid",
        "Cytokinin",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Abscisic acid (ABA)",
      "explanation": "Abscisic acid (ABA) is synthesized rapidly in leaves under drought stress, causing potassium ion efflux from stomatal guard cells, reducing turgor pressure and promoting rapid stomatal closure to conserve water.",
      "tip": "Plant Stress Hormone = Abscisic Acid (ABA); Fruit Ripening Gas = Ethylene; Cell Division Promoter = Cytokinin; Stem Elongation = Gibberellin."
    },
    {
      "id": 49,
      "source": "BPSC Senior Secondary Botany - Advt. 24/2023",
      "en": "Which of the following phytohormone pairs is wrongly matched with its physiological function?",
      "hi": "निम्नलिखित में से कौन-सा पादप हॉर्मोन युग्म अपने कार्य के साथ सही सुमेलित नहीं है?",
      "options": [
        "Abscisic acid - Stomatal closure",
        "Gibberellic acid - Leaf fall",
        "Cytokinin - Cell division",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Gibberellic acid - Leaf fall",
      "explanation": "Gibberellic acid promotes stem internode elongation, seed germination, and delays leaf senescence. Leaf fall (abscission) is induced by abscisic acid (ABA) and ethylene, making pair (B) factually incorrect.",
      "tip": "Gibberellins delay senescence and breakdown dormancy; they NEVER promote leaf fall or abscission."
    },
    {
      "id": 50,
      "source": "BPSC Senior Secondary Botany - Advt. 24/2023",
      "en": "Axile placentation is characteristically found in which of the following?\n(",
      "hi": "अक्षीय बीजाण्डन्यास (Axile placentation) मुख्य रूप से किसमें पाया जाता है?)",
      "options": [
        "Argemone",
        "Dianthus",
        "Citrus",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Citrus",
      "explanation": "In axile placentation, the multilocular ovary's septa meet at a central axis bearing the ovules, as observed in Citrus (lemon/orange), tomato, and China rose. Argemone exhibits parietal placentation, and Dianthus shows free-central.",
      "tip": "Placentation examples: Axile = Citrus, Tomato, China rose; Parietal = Mustard, Argemone; Free-central = Dianthus, Primrose; Marginal = Pea."
    },
    {
      "id": 51,
      "source": "BPSC Senior Secondary Botany - Advt. 24/2023",
      "en": "The fern Adiantum caudatum is popularly called the 'walking fern' because",
      "hi": "फर्न एडिएन्टम को 'वॉकिंग फर्न' कहा जाता है, क्योंकि",
      "options": [
        "its spores are able to walk",
        "it is dispersed through walking animals",
        "it propagates vegetatively by its leaf tips",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "it propagates vegetatively by its leaf tips",
      "explanation": "Adiantum caudatum produces adventitious buds at the tips of its arching fronds. When the frond tips touch moist soil, they produce roots and daughter plantlets, creating a walking habit across ground surfaces.",
      "tip": "Walking fern (Adiantum) reproduces vegetatively via leaf-tip rooting; it does NOT physically walk or possess motile spores."
    },
    {
      "id": 52,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following is a geocarpic fruit developing subterraneanly?\n(",
      "hi": "निम्नलिखित में से कौन-सा एक भूमिगत विकसित होने वाला भू-फलीय (geocarpic) फल है?)",
      "options": [
        "potato",
        "groundnut",
        "onion",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "groundnut",
      "explanation": "In the groundnut (Arachis hypogaea), flowers are aerial, but after fertilization, the floral peg elongates downward into the soil by positive geotropism, where the fruit (pod) matures underground.",
      "tip": "Groundnut is a geocarpic fruit (subterranean legume); Potato is an underground stem tuber; Onion is a modified underground tunicated bulb."
    },
    {
      "id": 53,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Commercial Sunn hemp jute fibres are anatomically obtained from the plant's",
      "hi": "व्यावसायिक सन हेम्प के रेशे पौधे के किस भाग से प्राप्त होते हैं?",
      "options": [
        "leaf",
        "phloem",
        "xylem",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "phloem",
      "explanation": "Commercial fibres of Sunn hemp (Crotalaria juncea) and Jute (Corchorus) are sclerenchymatous bast fibres derived from secondary phloem tissue in the stem cortex.",
      "tip": "Bast fibres = Secondary phloem (Jute, Hemp, Flax); Surface fibres = Epidermal seed hairs (Cotton); Leaf fibres = Sclerenchyma of monocot leaves (Sisal)."
    },
    {
      "id": 54,
      "source": "BPSC Middle School & TGT Science",
      "en": "Which specialized pigment is essential for symbiotic nitrogen fixation in leguminous root nodules?",
      "hi": "दलहनी पौधों की जड़ ग्रंथिकाओं में सहजीवी नाइट्रोजन स्थिरीकरण के लिए कौन-सा वर्णक आवश्यक है?",
      "options": [
        "Anthocyanin",
        "Leghaemoglobin",
        "Phycocyanin",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Leghaemoglobin",
      "explanation": "Leghaemoglobin is an oxygen-scavenging haemoprotein synthesized collaboratively by Rhizobium bacteroids and legume plant cells that maintains strict anaerobic conditions around oxygen-sensitive nitrogenase.",
      "tip": "The enzyme nitrogenase is destroyed by free O2. Leghaemoglobin binds oxygen away from it, turning the interior of active nodules pink."
    },
    {
      "id": 55,
      "source": "BPSC Senior Secondary Botany - Advt. 24/2023",
      "en": "In C4 plants, the ultimate fixation of CO2 and synthesis of carbohydrates during the Calvin cycle occurs in the chloroplasts of",
      "hi": "C4 पौधों में केल्विन चक्र के दौरान CO2 का अंतिम स्थिरीकरण और कार्बोहाइड्रेट का संश्लेषण किन कोशिकाओं के हरितलवक में होता है?",
      "options": [
        "guard cells",
        "palisade mesophyll cells",
        "bundle sheath cells",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "bundle sheath cells",
      "explanation": "C4 plants exhibit Kranz anatomy. Initial carboxylation by PEP carboxylase occurs in mesophyll cells forming C4 acids, which are transported to bundle sheath cells where Rubisco carries out the final Calvin cycle.",
      "tip": "C4 plants division of labor: Mesophyll cells = PEP carboxylase (initial C4 acid formation); Bundle sheath cells = Rubisco + Calvin Cycle (C3 pathway)."
    },
    {
      "id": 56,
      "source": "BPSC Senior Secondary Botany - Advt. 24/2023",
      "en": "The ploidy level of the endosperm in gymnosperms is\n(",
      "hi": "जिम्नोस्पर्म (अनावृतबीजी) में भ्रूणपोष की गुणसूत्र संख्या (प्लॉइडी स्तर) होती है)",
      "options": [
        "triploid (3n)",
        "diploid (2n)",
        "haploid (n)",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "haploid (n)",
      "explanation": "In gymnosperms, endosperm is the female gametophyte tissue developed directly from the functional megaspore before fertilization, making it haploid (n). In angiosperms, double fertilization forms triploid (3n) endosperm.",
      "tip": "Gymnosperm endosperm = Haploid (n), formed BEFORE fertilization; Angiosperm endosperm = Triploid (3n), formed AFTER double fertilization."
    },
    {
      "id": 57,
      "source": "BPSC Middle School & TGT Science",
      "en": "An unripe green fruit turns yellow or red when it ripens because",
      "hi": "एक कच्चा हरा फल पकने पर पीले या लाल रंग में परिवर्तित हो जाता है, क्योंकि",
      "options": [
        "chromoplast changes to chlorophyll",
        "chromoplast changes to chromosome",
        "chloroplast changes to chromoplast",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "chloroplast changes to chromoplast",
      "explanation": "During fruit ripening, green chlorophyll pigments degrade while thylakoids dissolve, transforming photosynthetic chloroplasts into non-photosynthetic chromoplasts rich in carotenoid and lycopene pigments.",
      "tip": "Plastid transformation during ripening: Green Chloroplast -> Red/Yellow Chromoplast. Amyloplasts store starch; Leucoplasts are colorless."
    },
    {
      "id": 58,
      "source": "BPSC Senior Secondary Botany - Advt. 24/2023",
      "en": "Which chemotrophic nitrifying bacteria oxidizes ammonium salts into nitrites?",
      "hi": "कौन-सा रसायनसंश्लेषी जीवाणु अमोनियम लवणों को नाइट्राइट में परिवर्तित करता है?",
      "options": [
        "Nitrobacter",
        "Nitrosomonas",
        "Azotobacter",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Nitrosomonas",
      "explanation": "Nitrification occurs in two sequential biological steps: Nitrosomonas oxidizes ammonia/ammonium ions into nitrite (NO2-), and Nitrobacter subsequent oxidizes nitrite into nitrate (NO3-).",
      "tip": "Step 1: Ammonia -> Nitrite (Nitrosomonas & Nitrococcus); Step 2: Nitrite -> Nitrate (Nitrobacter). Azotobacter is free-living N2 fixer."
    },
    {
      "id": 59,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "The commercially valuable hydrocolloid 'Agar-agar' used in microbiological culture media is extracted from",
      "hi": "सूक्ष्मजैविक संवर्धन माध्यम में प्रयुक्त व्यावसायिक 'एगार-एगार' किससे प्राप्त किया जाता है?",
      "options": [
        "Gelidium",
        "Ulothrix",
        "Sargassum",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Gelidium",
      "explanation": "Agar-agar is a sulfated galactan polysaccharide derived from cell walls of red algae (Rhodophyceae), primarily Gelidium and Gracilaria. Sargassum yields alginates, and Ulothrix is a green alga.",
      "tip": "Agar-agar = Gelidium & Gracilaria (Red algae); Alginic acid / Algin = Laminaria & Fucus (Brown algae); Carrageenan = Chondrus crispus (Red alga)."
    },
    {
      "id": 60,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Floridean starch, the stored carbohydrate food reserve in red algae, has a structural similarity to",
      "hi": "लाल शैवाल का संचित खाद्य 'फ्लोरिडियन स्टार्च' संरचनात्मक रूप से किसके समान होता है?",
      "options": [
        "amylopectin and glycogen",
        "mannitol and algin",
        "laminarin and cellulose",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "amylopectin and glycogen",
      "explanation": "Floridean starch synthesized in Rhodophyceae consists of branched alpha-glucan polymers connected by alpha-(1,4) and alpha-(1,6) glycosidic linkages, mirroring the molecular branching of amylopectin and animal glycogen.",
      "tip": "Stored foods: Chlorophyceae = Starch; Phaeophyceae = Laminarin and Mannitol; Rhodophyceae = Floridean starch (structurally like amylopectin & glycogen).\nSection 4: Zoology & Human Physiology (जंतु विज्ञान एवं मानव कार्यिकी) — Questions 61 to 80\nDigestive & Excretory Systems, Cellular Immunology, Evolutionary Connecting Links, Genetics & Molecular Biology"
    },
    {
      "id": 61,
      "source": "BPSC Senior Secondary Zoology - Advt. 24/2023",
      "en": "Hydrochloric acid (HCl) secreting cells present in the gastric glands of the stomach are called\n(",
      "hi": "आमाशय की जठर ग्रंथियों में हाइड्रोक्लोरिक अम्ल (HCl) स्रावित करने वाली कोशिकाएँ कहलाती हैं)",
      "options": [
        "zymogen cells",
        "goblet cells",
        "oxyntic cells",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "oxyntic cells",
      "explanation": "Oxyntic (also called parietal) cells in the gastric mucosa secrete hydrochloric acid (which lowers stomach pH to 1.5-2.0 to activate pepsinogen) and Castle's intrinsic factor (essential for vitamin B12 absorption).",
      "tip": "Oxyntic/Parietal cells = HCl & Intrinsic Factor; Chief/Zymogenic cells = Pepsinogen & Prorennin; Goblet cells = Mucus."
    },
    {
      "id": 62,
      "source": "BPSC Senior Secondary Zoology - Advt. 24/2023",
      "en": "The peptide hormone Secretin stimulates the secretory functioning of which digestive organ?",
      "hi": "पेप्टाइड हॉर्मोन सीक्रेटिन किस पाचक अंग के स्रावण को उत्तेजित करता है?",
      "options": [
        "liver",
        "pancreas",
        "intestinal gland",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "pancreas",
      "explanation": "Secretin is released by duodenum S-cells in response to acidic chyme, stimulating the exocrine pancreas to secrete watery pancreatic juice rich in bicarbonate ions to neutralize stomach acid.",
      "tip": "Secretin = stimulates pancreatic bicarbonate and water secretion; Cholecystokinin (CCK) = stimulates gallbladder bile ejection and pancreatic digestive enzymes."
    },
    {
      "id": 63,
      "source": "BPSC Senior Secondary Zoology - Advt. 24/2023",
      "en": "Which digestive enzyme hydrolyzes dietary proteins optimally at a strongly acidic pH around 1.6 to 2.0?\n(",
      "hi": "कौन-सा पाचक एंजाइम अत्यधिक अम्लीय माध्यम (pH 1.6 से 2.0) पर प्रोटीन का पाचन करता है?)",
      "options": [
        "Trypsin",
        "Pepsin",
        "Peptidase",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "Pepsin",
      "explanation": "Pepsin is the active proteolytic enzyme of the stomach, converted from inactive pepsinogen by gastric HCl; it operates optimally at pH 1.5-2.0 to cleave complex proteins into proteoses and peptones.",
      "tip": "Pepsin = operates in acidic medium (pH 1.5-2.0) in stomach; Trypsin = operates in alkaline medium (pH 7.8-8.5) in small intestine."
    },
    {
      "id": 64,
      "source": "BPSC Middle School & Senior Secondary",
      "en": "The basic structural and functional microscopic filtration unit of the human kidney is called\n(",
      "hi": "मानव वृक्क (गुर्दे) की मूलभूत संरचनात्मक एवं क्रियात्मक निस्यंदन इकाई कहलाती है)",
      "options": [
        "Nephron",
        "Neutron",
        "Neuron",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Nephron",
      "explanation": "Each human kidney contains approximately one million nephrons comprising a glomerulus, Bowman's capsule, and renal tubules that perform blood ultrafiltration, selective reabsorption, and tubular secretion.",
      "tip": "Nephron = Excretory and filtration unit of Kidney; Neuron = Structural and functional unit of Nervous system."
    },
    {
      "id": 65,
      "source": "BPSC Senior Secondary Zoology - Advt. 24/2023",
      "en": "Which cellular component of human blood is directly responsible for producing circulating antibodies?\n(",
      "hi": "मानव रक्त का कौन-सा कोशिकीय घटक प्रतिरक्षी (एंटीबॉडी) उत्पादन के लिए प्रत्यक्षतः उत्तरदायी है?)",
      "options": [
        "lymphocyte",
        "thrombocyte",
        "RBC",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "lymphocyte",
      "explanation": "B-lymphocytes proliferate and differentiate into effector plasma cells, which secrete specific immunoglobulin proteins (antibodies) into circulating blood to neutralize invading pathogens.",
      "tip": "B-Lymphocytes = Humoral immunity (produce antibodies); T-Lymphocytes = Cell-mediated immunity; Thrombocytes = Blood clotting."
    },
    {
      "id": 66,
      "source": "BPSC Senior Secondary Zoology - Advt. 24/2023",
      "en": "The exchange of respiratory gases (O2 and CO2) across the pulmonary alveolar surface occurs through\n(",
      "hi": "श्वसन सतह (कूपिकाओं) पर ऑक्सीजन और CO2 का विनिमय किस प्रक्रिया द्वारा होता है?)",
      "options": [
        "active transport",
        "osmosis",
        "diffusion",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "diffusion",
      "explanation": "Alveolar gas exchange is a passive biophysical process governed by Fick's law of simple diffusion down partial pressure concentration gradients without cellular ATP expenditure.",
      "tip": "Gas exchange in lungs and tissues is strictly driven by simple physical diffusion based on partial pressure differences (pO2 and pCO2)."
    },
    {
      "id": 67,
      "source": "BPSC Middle School & PRT Class 1-5",
      "en": "The rhythmic contraction and expansion wave movements of the muscular wall of the food pipe (oesophagus) are known as",
      "hi": "आहार नली की दीवार के संकुचन और विस्तार की लयबद्ध गति कहलाती है",
      "options": [
        "translocation",
        "transpiration",
        "peristaltic movement",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "peristaltic movement",
      "explanation": "Peristalsis is an involuntary reflex characterized by coordinated circular muscle contraction behind the food bolus and longitudinal muscle relaxation ahead of it, propelling food down the digestive tract.",
      "tip": "Peristalsis = Muscular wave movement propelling food through gut; Translocation = Phloem nutrient transport; Transpiration = Water vapor loss from leaves."
    },
    {
      "id": 68,
      "source": "BPSC Middle School Question Paper - Science",
      "en": "The paired muscular tube connecting each kidney with the urinary bladder in humans is the\n(",
      "hi": "मानव शरीर में वृक्क (गुर्दे) को मूत्राशय से जोड़ने वाली नली कहलाती है)",
      "options": [
        "urethra",
        "ureter",
        "nephron",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "ureter",
      "explanation": "The ureters are bilateral muscular ducts that transport urine from the renal pelvis of each kidney into the urinary bladder. The urethra discharges urine from the bladder to the exterior.",
      "tip": "Kidney to Bladder = Ureter (द्वि-पार्श्वी नलिका); Bladder to Outside = Urethra (मूत्रमार्ग)."
    },
    {
      "id": 69,
      "source": "BPSC Middle School Question Paper - Science",
      "en": "The 'Nodes of Ranvier' are periodic microscopic gaps characteristically found in\n('",
      "hi": "रैनवियर के नोड्स' (Nodes of Ranvier) सूक्ष्म रूप से किसमें पाए जाते हैं?)",
      "options": [
        "nerve cells",
        "heart cells",
        "liver cells",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "nerve cells",
      "explanation": "Nodes of Ranvier are periodic uninsulated gaps along the myelinated axons of neurons where voltage-gated sodium channels are concentrated, facilitating rapid saltatory conduction of nerve impulses.",
      "tip": "Nodes of Ranvier = Gaps in the myelin sheath along neuron axons enabling fast saltatory impulse conduction."
    },
    {
      "id": 70,
      "source": "BPSC Middle School Question Paper - Science",
      "en": "The celebrated fossil organism that represents an evolutionary connecting missing link between reptiles and birds is",
      "hi": "सरीसृपों और पक्षियों के बीच की विकासवादी योजक कड़ी माना जाने वाला प्रसिद्ध जीवाश्म जीव है",
      "options": [
        "Archaeopteryx",
        "Ichthyostega",
        "Lycaenops",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Archaeopteryx",
      "explanation": "Archaeopteryx possessed avian characteristics (feathers, wings, wishbone) alongside reptilian features (beak with teeth, long bony tail, clawed digits), establishing that birds evolved from theropod reptiles.",
      "tip": "Archaeopteryx = Connecting link between Reptiles and Birds; Ichthyostega = Connecting link between Fishes and Amphibians; Platypus = Reptiles and Mammals."
    },
    {
      "id": 71,
      "source": "BPSC Middle School & TGT Science",
      "en": "Dengue fever is caused by which of the following pathogens?",
      "hi": "डेंगू ज्वर निम्नलिखित में से किस रोगजनक के कारण होता है?",
      "options": [
        "DNA-containing arbovirus",
        "RNA-containing arbovirus",
        "paramyxovirus",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "RNA-containing arbovirus",
      "explanation": "Dengue is caused by the Dengue virus (DENV 1-4), an arthropod-borne single-stranded positive-sense RNA virus belonging to the family Flaviviridae, transmitted by Aedes aegypti mosquitoes.",
      "tip": "Dengue virus genome = Single-stranded RNA (Flavivirus / Arbovirus); Vector = Day-biting female Aedes aegypti mosquito."
    },
    {
      "id": 72,
      "source": "BPSC Senior Secondary Zoology - Advt. 24/2023",
      "en": "The protozoan parasite causing Malaria in humans is biological transmitted by the vector",
      "hi": "मनुष्यों में मलेरिया रोग फैलाने वाला प्रोटोजोआ परजीवी किस वाहक द्वारा संचारित होता है?",
      "options": [
        "female Culex",
        "male Anopheles",
        "female Anopheles",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "female Anopheles",
      "explanation": "Malaria is caused by Plasmodium species and transmitted by female Anopheles mosquitoes, which require blood meals to nourish developing eggs. Male mosquitoes feed exclusively on plant nectar.",
      "tip": "Malaria = Female Anopheles (Plasmodium parasite); Dengue/Chikungunya = Female Aedes (Flavivirus); Filariasis = Female Culex (Wuchereria worm)."
    },
    {
      "id": 73,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "The primary biochemical function of cellular ribosomes is",
      "hi": "कोशिकीय राइबोसोम का प्राथमिक जैव रासायनिक कार्य है",
      "options": [
        "photosynthesis",
        "protein synthesis",
        "fat synthesis",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "protein synthesis",
      "explanation": "Ribosomes (often termed 'protein factories' of the cell) translate mRNA codon sequences into polypeptide chains by catalyzing peptide bond formation between linked amino acids.",
      "tip": "Ribosomes = Protein synthesis; Smooth Endoplasmic Reticulum = Lipid and steroid synthesis; Golgi Apparatus = Packaging and secretion."
    },
    {
      "id": 74,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following exceptional mammals is oviparous (lays eggs)?\n(",
      "hi": "निम्नलिखित में से कौन-सा अपवाद स्वरूप अण्डप्रजक (अण्डे देने वाला) स्तनधारी है?)",
      "options": [
        "Echidna",
        "Kangaroo",
        "Loris",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Echidna",
      "explanation": "Monotremes (order Monotremata), including the spiny anteater (Echidna / Tachyglossus) and the duck-billed platypus (Ornithorhynchus), are primitive egg-laying (oviparous) mammals that nourish hatched young with milk.",
      "tip": "Egg-laying mammals (Prototheria / Monotremes) = Echidna and Platypus; Marsupials (Pouched) = Kangaroo; Placental mammals = Loris, Humans."
    },
    {
      "id": 75,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "The proteolytic enzyme Rennin, which curdles milk casein, is found in",
      "hi": "दूध के केसीन को पचाने वाला प्रोटीयोलाइटिक एंजाइम रेनिन किसमें पाया जाता है?",
      "options": [
        "intestinal juice",
        "gastric juice",
        "bile juice",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "gastric juice",
      "explanation": "Prorennin is secreted by gastric chief cells in infant gastric juice and activated by HCl into active rennin, which coagulates soluble milk casein into insoluble calcium paracaseinate for digestion by pepsin.",
      "tip": "Rennin (with double 'n') is a milk-coagulating enzyme in infant gastric juice; Renin (with single 'n') is a kidney hormone in the RAAS blood pressure system."
    },
    {
      "id": 76,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Intercostal muscles are anatomically situated in which part of the human body?\n(",
      "hi": "अंतरापर्शुक पेशियाँ (Intercostal muscles) मानव शरीर के किस भाग में स्थित होती हैं?)",
      "options": [
        "abdomen",
        "diaphragm",
        "ribs",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "ribs",
      "explanation": "Intercostal muscles occupy the intercostal spaces between adjacent ribs; their external and internal sets contract and relax to alter the antero-posterior and transverse dimensions of the thoracic cavity during breathing.",
      "tip": "External and internal intercostal muscles are located strictly between the ribs, functioning in pulmonary ventilation."
    },
    {
      "id": 77,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following is the most abundant structural protein in the animal kingdom?",
      "hi": "जंतु जगत में सर्वाधिक प्रचुर मात्रा में पाया जाने वाला संरचनात्मक प्रोटीन कौन-सा है?",
      "options": [
        "Lectin",
        "Haemoglobin",
        "Collagen",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "Collagen",
      "explanation": "Collagen is the primary insoluble fibrous protein of the extracellular matrix and connective tissues (tendons, skin, ligaments, bones, and cartilage), constituting approx. 30% of total body protein mass in animals.",
      "tip": "Most abundant protein in the Animal Kingdom = Collagen; Most abundant protein in the entire Biosphere = Rubisco (in green plants)."
    },
    {
      "id": 78,
      "source": "BPSC TGT Science - Advt. 23/2023",
      "en": "Which of the following endocrine hormones is not a steroid hormone?",
      "hi": "निम्नलिखित अंतःस्रावी हॉर्मोनों में से कौन-सा स्टीरॉइड हॉर्मोन नहीं है?",
      "options": [
        "Thyroxine",
        "Aldosterone",
        "Estrogen",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 0,
      "answer_letter": "A",
      "answer_text": "Thyroxine",
      "explanation": "Thyroxine (T4) is an iodinated amino acid derivative synthesized from tyrosine in the thyroid gland. In contrast, aldosterone and estrogen are lipid-soluble steroid hormones synthesized from cholesterol.",
      "tip": "Steroid Hormones (from cholesterol) = Cortisol, Aldosterone, Estrogen, Progesterone, Testosterone; Amino Acid Derivatives = Thyroxine, Epinephrine."
    },
    {
      "id": 79,
      "source": "BPSC Senior Secondary Zoology - Advt. 24/2023",
      "en": "In molecular genetics, how many nitrogenous nucleotides constitute a single genetic codon?\n(",
      "hi": "आणविक आनुवंशिकी में, एक आनुवंशिक कोडॉन (codon) में कितने न्यूक्लियोटाइड होते हैं?)",
      "options": [
        "1",
        "2",
        "3",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 2,
      "answer_letter": "C",
      "answer_text": "3",
      "explanation": "The genetic code is a triplet code: three consecutive ribonucleotide bases on mRNA constitute a codon specifying one particular amino acid (yielding 4^3 = 64 possible codons, proved by Nirenberg, Khorana, and Holley).",
      "tip": "Triplet code: 3 bases = 1 codon = 1 amino acid. There are 64 codons in total: 61 sense codons and 3 nonsense/stop codons (UAA, UAG, UGA)."
    },
    {
      "id": 80,
      "source": "BPSC Senior Secondary Zoology - Advt. 24/2023",
      "en": "Charles Darwin's epoch-making book 'On the Origin of Species by Means of Natural Selection' was originally published in the year",
      "hi": "चार्ल्स डार्विन की युगांतरकारी पुस्तक 'ओरिजिन ऑफ स्पीशीज़' मूल रूप से किस वर्ष में प्रकाशित हुई थी?",
      "options": [
        "1849",
        "1859",
        "1869",
        "More than one of the above",
        "None of the above"
      ],
      "answer": 1,
      "answer_letter": "B",
      "answer_text": "1859",
      "explanation": "Charles Darwin's revolutionary masterwork 'On the Origin of Species by Means of Natural Selection' was officially published in London on 24th November 1859, proposing the theory of biological evolution by natural selection.",
      "tip": "Milestone science publication dates: 1859 = Darwin's 'Origin of Species'; 1866 = Mendel's laws of inheritance published; 1953 = Watson & Crick DNA double helix.\nMaster Answer Key & Topic Index (Questions 1 to 80)\nQ. No.\nDiscipline\nCore Scientific Topic\nOfficial Key"
    }
  ]
};
