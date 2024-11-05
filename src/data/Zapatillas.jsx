export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f4e16f2da8ba4b07be5e6aa39223cd5a_9366/Zapatillas_adidas_VL_Court_3.0_Verde_ID6284_01_standard.jpg', title: 'Zapatillas adidas VL Court 3.0', price: '$60.990' },
                { id: 2, image: 'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/610f4c3e-9613-4f6e-a290-fbf7d41ff91c/dunk-low-viotech-release-date.jpg', title: 'Zapatillas Nike Dunk Low Viotech', price: '$211.990' },
                { id: 3, image: 'https://thelinegroupcl.vtexassets.com/arquivos/ids/213090/25037.jpg?v=638481392477470000', title: 'Zapatillas Urbanas Hombre New Balance 9060 Morada', price: '$80.990' },
                { id: 4, image: 'https://www.dimarsa.cl/media/catalog/product/m/a/marcasnewbalanceml574evb-negro1jpeg_0_10.jpg', title: 'Zapatillas Urbanas Hombre New Balance Ml574evb Negro', price: '$52,990' },
                { id: 5, image: 'https://nikeclprod.vtexassets.com/arquivos/ids/998972-800-800?v=638488894667630000&width=800&height=800&aspect=true', title: 'Zapatillas Nike Air Max 90', price: '$130.990' },
                { id: 6, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/Zapatillas_Forum_Low_Blanco_FY7757_01_standard.jpg', title: 'Zapatillas Forum Low', price: '$80.990' },
                { id: 7, image: 'https://www.dimarsa.cl/media/catalog/product/m/a/marcasnewbalancebb550esb-verde2jpeg_1.jpg', title: 'Zapatillas New Balance 550 White Green Men', price: '$80.990' },
                { id: 8, image: 'https://nikeclprod.vtexassets.com/arquivos/ids/873388/FB1362_102_A_PREM.jpg?v=638338528936670000', title: 'Zapatillas Nike Full Force Low', price: '$74.990' },
                { id: 9, image: 'https://nikeclprod.vtexassets.com/arquivos/ids/1069514/HM0810_401_A_PREM.jpg?v=638570103285030000', title: 'Zapatillas Nike Air Max Dn', price: '$120.990' },
                { id: 10, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6218f8cc55984cfe92d1a96d0110ac7e_9366/Zapatillas_Handball_Spezial_Negro_DB3021_01_00_standard.jpg', title: 'Zapatillas Adidas Handball Spezial Originals', price: '$89.990' },
                { id: 11, image: 'https://nikeclprod.vtexassets.com/arquivos/ids/673554/DX9176_100_A_PREM.jpg?v=638158947193630000', title: 'Zapatillas Nike Gamma Force', price: '$90.990' },
                { id: 12, image: 'https://www.realkicks.cl/cdn/shop/files/p-ML725BB-2.jpg?v=1722435610', title: 'Zapatilla New Balance 725 Unisex Negro', price: '$89.990' },
                { id: 13, image: 'https://www.marathon.cl/on/demandware.static/-/Sites-catalog-equinox/default/dw861bb708/images/marathon/197597094458_1-20240903120000-mrtChile.jpg', title: 'Zapatillas Nike Journey Run', price: '$79.990' },
                { id: 14, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a11e836e10749bb8728037cd08430f0_9366/Zapatillas_Gazelle_Chile_Rojo_IF6827_01_standard.jpg', title: 'Adidas Zapatillas Gazelle Chile Originals', price: '$59.990' },
                { id: 15, image: 'https://newbalance.cl/media/catalog/product/z/a/zapatillas-urbanas-hombre-new-balance-574-azul-lateral-derecha_1.png?quality=80&bg-color=255,255,255&fit=bounds&height=650&width=650&canvas=650:650', title: 'Zapatillas Urbanas Unisex New Balance 574 Azul', price: '$69.990' },
                { id: 16, image: 'https://nikeclprod.vtexassets.com/arquivos/ids/1068679/FQ7331_001_A_PREM.jpg?v=638570091449770000', title: 'NIKE AIR MAX PLUS PRM', price: '$99.990' },
                { id: 17, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/0c9c0b42799940cd9f49af4600107164_9366/Zapatillas_Run_60s_3.0_Lifestyle_Running_Negro_HP2258_01_standard.jpg', title: 'Zapatillas Run 60s 3.0 Lifestyle Running', price: '$49.990' },
                { id: 18, image: 'https://sparta.cl/media/catalog/product/g/m/gm500st1_2.png?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=600&canvas=600:550', title: 'Zapatillas Urbanas Hombre New Balance 500 Verde', price: '$45.990' },
                { id: 19, image: 'https://nikeclprod.vtexassets.com/arquivos/ids/699187/DN3577_002_A_PREM.jpg?v=638170066686770000', title: 'Nike Court Vision Mid Next Nature', price: '$83.990' },
                { id: 20, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3541f841cdf44698a36d35306306b74e_9366/Zapatillas_adidas_Grand_Court_2.0_Azul_ID2957_01_standard.jpg', title: 'Zapatillas adidas Grand Court 2.0', price: '$42.990' },
                { id: 21, image: 'https://nikeclprod.vtexassets.com/arquivos/ids/835190/CW4554_116_A_PREM.jpg?v=638327399551300000', title: 'Nike Air Max SC', price: '$77.990' },
                { id: 22, image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/128726088_01/w=800,h=800,fit=pad', title: 'Zapatillas Fútbol Hombre New Balance 442 V2 Negra', price: '$59.990' },
                { id: 23, image: 'https://www.lockeroutlet.cl/wp-content/uploads/2024/04/ANTIHUMAN_NIDH4759001_VIEW1-538x538.jpg', title: 'Zapatillas Nike Air Max 97 Se Iron Grey', price: '$109.990' },
                { id: 24, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0fd9bc2bfc234ce0b69aaef900fddbdf_9366/Zapatillas_NMD_R1_Negro_HQ4452_01_standard.jpg', title: 'Zapatillas NMD_R1 Negro', price: '$68.990' },
                { id: 25, image: 'https://www.blockstore.cl/cdn/shop/files/p-MR530GA-1_1800x.jpg?v=1713465768', title: 'Zapatilla New Balance 530 Unisex Verde', price: '$49.990' },
                { id: 26, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/7482e1b96cf54a1ba681ae78c34242c7_9366/Zapatillas_Break_Start_Negro_IH7963_01_standard.jpg', title: 'Zapatillas Break Start', price: '$68.990' },
                { id: 27, image: 'https://www.dimarsa.cl/media/catalog/product/m/a/marcasnikefq7669-001-gris1jpeg_0_1.jpg', title: 'Zapatillas Hombre Nike Court Vision Low NN Gris ', price: '$99.990' },
                { id: 28, image: 'https://www.blockstore.cl/cdn/shop/files/p-BB480LBT-1_1800x.jpg?v=1690913330', title: 'Zapatilla New Balance 480 L ', price: '$67.990' },
            ]);
        }, 2000);
    });
};
