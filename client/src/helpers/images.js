const API_URL = "https://firebasestorage.googleapis.com/v0/b/polished-logic-295611.appspot.com/o/"

module.exports = {
    backTemplatePNG: API_URL + "back-template.png?alt=media&token=a46310b3-39c4-409e-ad1d-3fe21dbdc345",
    backTemplateSVG: API_URL + "back-template.svg?alt=media&token=071f6131-7807-4ca7-b580-ce9f3d35e425",
    carrotBG: API_URL + "carrot-bg.svg?alt=media&token=66ef40f6-43d6-4801-9d8e-d44cf23bbaf9",
    creditsHeader: API_URL + "credits-header.png?alt=media&token=465f1af7-1c06-48c9-a69e-efb381b403d5",
    ellipsisBG: API_URL + "ellipsis-bg.svg?alt=media&token=e6a8f90b-74f6-4bad-85ca-68c2d1de9ab6",
    frontTemplatePNG: API_URL + "front-template.png?alt=media&token=8329bf63-5420-4a91-8c45-9970b309786e",
    frontTemplateSVG: API_URL + "front-template.svg?alt=media&token=f965e029-b2e8-486c-96ed-3e859f3589c1",
    headerLogo: API_URL + "header-logo.png?alt=media&token=02a238de-de46-4d45-aa03-176cef017dcb",
    minecraftDiaBoots: API_URL + "mc-dia-boots.png?alt=media&token=8f2bc3e0-e641-4b69-af06-9b9649f74671",
    minecraftDiaPickaxe: API_URL + "mc-dia-pickaxe.png?alt=media&token=7d34d1f9-c202-477f-bf1c-1b007f8dab20",
    minecraftIronIngot: API_URL + "mc-iron-ingot.png?alt=media&token=1e853636-cc69-4777-8d84-7ee96dda56a6",
    minecraftWither: API_URL + "mc-wither.png?alt=media&token=1a37ddad-25ab-4251-92e1-2a6e9704f380",
    meta: API_URL + "meta.png?alt=media&token=7295b073-750e-45bd-befd-ac53f5b43980",
    ourTeamHeader: API_URL + "our_team_header.png?alt=media&token=f3894e62-7407-4557-bd62-0046c929de5a",
    pekodamCover: API_URL + "pekodam-cover.png?alt=media&token=10841cda-9b8d-4227-b9fe-7be0445dfa18",
    projectsHeader: API_URL + "projects-header.png?alt=media&token=c92cd5b8-6cc4-44ef-835c-b1152c220e95",
    rabbitBG: API_URL + "rabbit-bg.svg?alt=media&token=85353006-747c-4017-b66d-315176cf91c2",
    rabbitIcon: API_URL + "rabbit-icon.svg?alt=media&token=c77eb3da-bf03-48ff-9cc8-b4789770a6ec",
    servicesHeader: API_URL + "services-header.svg?alt=media&token=cbfb7e05-17e6-436e-840a-5d4eef5cad28",
    usada3D: API_URL + "usada-3d.png?alt=media&token=9590edb0-61d2-4add-9ec4-b7b0403a2dbb",
    usadaCredits: API_URL + "usada-credits.jpg?alt=media&token=821dc133-d411-4056-a5c2-b646ca17771c",
    usadaFrontPage: API_URL + "usada-front-page.png?alt=media&token=52ca13ed-f4f2-400f-992f-58e2e87a154d",
    usadaFront: API_URL + "usada-front.png?alt=media&token=375599a7-1dbd-40b0-ac4d-5104f2283703",

    getBackground: (image) => ({backgroundImage: `url(${image})`})
}