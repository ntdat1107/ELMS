const dataAnnounce = [
    {receiver:"Genovera Hearthfield",subject:"Biostatistician II",content:"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",time:"06.10.2021",stt:1},
    {receiver:"Arden Mould",subject:"Structural Analysis Engineer",content:"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat stt mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",time:"05.10.2021",stt:2},
    {receiver:"Constantine Pablo",subject:"Internal Auditor",content:"Proin leo odio, porttitor stt, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",time:"17.10.2021",stt:3},
    {receiver:"Joelle Savoury",subject:"Sales Associate",content:"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",time:"28.10.2021",stt:4},
    {receiver:"Quintina Weight",subject:"Chief Design Engineer",content:"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam stt ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",time:"03.11.2021",stt:5},
    {receiver:"Kristo Lidierth",subject:"Associate Professor",content:"Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor stt, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",time:"07.10.2021",stt:6},
    {receiver:"Annabel Kenner",subject:"Systems Administrator II",content:"In congue. Etiam justo. Etiam pretium iaculis justo.",time:"17.10.2021",stt:7},
    {receiver:"Cahra Drinkhill",subject:"Account Representative IV",content:"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",time:"14.10.2021",stt:8},
    {receiver:"Rollo Mintoff",subject:"Developer III",content:"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",time:"21.10.2021",stt:9},
    {receiver:"Tiena Joannic",subject:"Office Assistant I",content:"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",time:"11.10.2021",stt:10},
    {receiver:"Vanya Blunt",subject:"Information Systems Manager",content:"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor stt nulla ultrices aliquet.",time:"07.10.2021",stt:11},
    {receiver:"Marcellus Tomsu",subject:"Teacher",content:"Sed ante. Vivamus tortor. Duis mattis egestas metus.",time:"18.10.2021",stt:12},
    {receiver:"Gloria Ellar",subject:"Analyst Programmer",content:"Quisque stt justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam stt ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",time:"24.10.2021",stt:13},
    {receiver:"Glyn Gilchrest",subject:"General Manager",content:"In hac habitasse platea dictumst. Morbi vestibulum, velit stt pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",time:"25.10.2021",stt:14},
    {receiver:"Aurelie Ayris",subject:"Registered Nurse",content:"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",time:"22.10.2021",stt:15},
    {receiver:"Roana Libbis",subject:"Assistant Media Planner",content:"In hac habitasse platea dictumst. Morbi vestibulum, velit stt pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",time:"16.10.2021",stt:16},
    {receiver:"Hunt Palethorpe",subject:"Staff Accountant IV",content:"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",time:"19.10.2021",stt:17},
    {receiver:"Roda Crowley",subject:"Software Engineer I",content:"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem stt ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",time:"06.10.2021",stt:18},
    {receiver:"Tiffie Cuff",subject:"VP Quality Control",content:"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",time:"23.10.2021",stt:19},
    {receiver:"Merlina Askaw",subject:"Operator",content:"Quisque stt justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam stt ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",time:"30.10.2021",stt:20},
    {receiver:"Inge Gooley",subject:"Help Desk Operator",content:"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus stt sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",time:"09.10.2021",stt:21},
    {receiver:"Weidar Chesshyre",subject:"VP Accounting",content:"Quisque stt justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",time:"27.10.2021",stt:22},
    {receiver:"Jacky Alabone",subject:"Clinical Specialist",content:"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",time:"16.10.2021",stt:23},
    {receiver:"Freddie Chinge",subject:"Recruiter",content:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",time:"12.10.2021",stt:24},
    {receiver:"Ephrayim Merredy",subject:"Nurse Practicioner",content:"Phasellus in felis. Donec semper sapien a libero. Nam dui.",time:"12.10.2021",stt:25},
    {receiver:"Jessalin Grandisson",subject:"Systems Administrator II",content:"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem stt ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",time:"18.10.2021",stt:26},
    {receiver:"Tate Tumpane",subject:"Food Chemist",content:"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor stt, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",time:"20.10.2021",stt:27},
    {receiver:"Mitchell Domke",subject:"Geological Engineer",content:"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",time:"21.10.2021",stt:28},
    {receiver:"Corette Moyler",subject:"Speech Pathologist",content:"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",time:"28.10.2021",stt:29},
    {receiver:"Jonell Pygott",subject:"Community Outreach Specialist",content:"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",time:"10.10.2021",stt:30},
    {receiver:"Bobbie Corre",subject:"Clinical Specialist",content:"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor stt nulla ultrices aliquet.",time:"18.10.2021",stt:31},
    {receiver:"Ripley Wilsher",subject:"Account Representative I",content:"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",time:"12.10.2021",stt:32},
    {receiver:"Ellery Thow",subject:"Payment Adjustment Coordinator",content:"Proin leo odio, porttitor stt, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",time:"12.10.2021",stt:33},
    {receiver:"Willa Mankor",subject:"VP Accounting",content:"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",time:"06.10.2021",stt:34},
    {receiver:"Malissia Scattergood",subject:"Chief Design Engineer",content:"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",time:"14.10.2021",stt:35},
    {receiver:"Sauncho Hallford",subject:"Sales Representative",content:"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat stt mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",time:"28.10.2021",stt:36},
    {receiver:"Burton Ferrar",subject:"Web Designer IV",content:"Proin interdum mauris non ligula pellentesque ultrices. Phasellus stt sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",time:"23.10.2021",stt:37},
    {receiver:"Jacklin Murtagh",subject:"Teacher",content:"Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor stt, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",time:"05.10.2021",stt:38},
    {receiver:"Nannie Dawber",subject:"Human Resources Assistant III",content:"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",time:"19.10.2021",stt:39},
    {receiver:"Amalita Morrowe",subject:"Tax Accountant",content:"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",time:"21.10.2021",stt:40},
    {receiver:"Bronny Edghinn",subject:"Administrative Assistant II",content:"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",time:"24.10.2021",stt:41},
    {receiver:"Leena Rockwell",subject:"Chemical Engineer",content:"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",time:"24.10.2021",stt:42},
    {receiver:"Natty Flament",subject:"Engineer III",content:"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",time:"14.10.2021",stt:43},
    {receiver:"Aurora Pickin",subject:"Administrative Assistant II",content:"Proin interdum mauris non ligula pellentesque ultrices. Phasellus stt sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",time:"20.10.2021",stt:44},
    {receiver:"Tessi Wingar",subject:"Senior Editor",content:"Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor stt, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",time:"11.10.2021",stt:45},
    {receiver:"Auberta Needs",subject:"Staff Scientist",content:"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",time:"13.10.2021",stt:46},
    {receiver:"Teddie Bridgstock",subject:"Operator",content:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",time:"19.10.2021",stt:47},
    {receiver:"Ly Troughton",subject:"Help Desk Operator",content:"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque stt justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",time:"27.10.2021",stt:48},
    {receiver:"Adiana Turpey",subject:"Junior Executive",content:"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",time:"08.10.2021",stt:49}
]
export default dataAnnounce;