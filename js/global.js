//navbar
document.addEventListener("DOMContentLoaded", function() {
  // JavaScript code that manipulates the DOM elements
  document.getElementById("navbar").innerHTML = `
    
    <a href="index.html" style="line-height:0"><?xml version="1.0" encoding="UTF-8"?><style>#mani,#handwriting{fill:var(--themeTextColor)}</style><svg id="stroke" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 447.7211949 144.9666968"><path id="mani" d="M47.8506944,58.8087123V18.5878485l-17.2953474,28.525823h-5.517756L7.7416602,18.586864v40.2218483H0V1.6511071h5.4360806l22.3603884,36.7356582L50.1568574,1.6511071h5.4360806v57.1576052h-7.7422436ZM95.7836476,53.5217257c-1.3202244,1.7742885-2.9939865,3.194784-5.0242033,4.257585-2.3615856,1.2353403-5.0242033,1.8528646-7.98902,1.8528646-3.6234704,0-6.8770679-.8917202-9.7596258-2.6766192-2.8825579-1.7834405-5.1613013-4.2129917-6.8356468-7.2886535-1.6755123-3.0744951-2.5121017-6.5334479-2.5121017-10.3774418,0-3.8425354.8365894-7.3014882,2.5121017-10.3771501,1.6743455-3.0744951,3.9530889-5.5180477,6.8356468-7.3300746,2.8825579-1.8120269,6.1361554-2.7177486,9.7596258-2.7177486,2.9648167,0,5.6134329.6175243,7.9475989,1.8528646,2.0324046,1.0761462,3.7198765,2.5070699,5.0656244,4.2908385v-5.3202401h7.4943005v39.1207619h-7.4943005v-5.2869866ZM96.2777837,39.2894607c0-2.6354898-.5227225-4.968489-1.5652505-7.0004561-1.0436948-2.0308002-2.4846821-3.6097606-4.3235451-4.7357142-1.8406133-1.1247868-3.99451-1.688347-6.4651906-1.688347-2.471264,0-4.6537471.5763949-6.5480327,1.7294764-1.8942857,1.1530815-3.376694,2.7320418-4.447225,4.7357142-1.070531,2.0048391-1.6060882,4.2970006-1.6060882,6.8770679,0,2.6354898.5355572,4.9556543,1.6060882,6.9593267,1.070531,2.0048391,2.5663575,3.5826327,4.4886461,4.7357142,1.9211219,1.1530815,4.1181899,1.7294764,6.5888704,1.7294764,3.6777262,0,6.6425428-1.248175,8.89445-3.7474419,2.2507404-2.4978085,3.3772774-5.6956917,3.3772774-9.5948165ZM140.0091214,58.8087123h7.4948839v-24.2960951c0-2.6894539-.6586537-5.2298503-1.9765445-7.6182721-1.3178908-2.3884218-3.1170829-4.3238368-5.3946596-5.8062452-2.2793268-1.4824083-4.9005234-2.2236125-7.8653401-2.2236125s-5.6286012.6729469-7.98902,2.0176738c-1.7787733,1.0141969-3.260817,2.3004749-4.447225,3.8590893v-5.0533002h-7.4126251v39.1207619h7.4126251v-22.8136868c0-1.9765445.4387135-3.7331487,1.3178908-5.2709797.8774271-1.5363724,2.0856394-2.7448765,3.6234704-3.6237621,1.5366641-.8777188,3.2944352-1.3175991,5.2709797-1.3175991,2.9654001,0,5.3666566.9611443,7.2066864,2.8825579,1.8388631,1.9225804,2.758878,4.3649662,2.758878,7.3297829v22.8136868ZM155.9031524,58.8087123h7.4948839V19.6879504h-7.4948839v39.1207619ZM159.6917238,11.8637396c1.3721466,0,2.4981002-.4530067,3.376694-1.3587285.8780104-.9060134,1.3178908-2.0450934,1.3178908-3.4181151,0-1.3175991-.4398803-2.4295512-1.3178908-3.3355646-.8785938-.9060134-2.0045474-1.3587285-3.376694-1.3587285-1.37273,0-2.4986836.452715-3.376694,1.3587285-.8785938.9060134-1.3178908,2.0179655-1.3178908,3.3355646,0,1.3730217.4392969,2.5121017,1.3178908,3.4181151.8780104.9057217,2.003964,1.3587285,3.376694,1.3587285ZM225.6229096,50.4450548c-2.6357815,1.1813762-5.7382796,1.7706058-9.3069108,1.7706058-3.0202393,0-5.7931188-.5349738-8.3180551-1.6060882-2.5261032-1.070531-4.7225878-2.5943604-6.5888704-4.5709049-1.8674495-1.9765445-3.3084367-4.3095436-4.3235451-7.0001644-1.0168586-2.6900373-1.5238294-5.6274344-1.5238294-8.8127746,0-3.18359.5069708-6.1215705,1.5238294-8.8121913,1.0151084-2.6900373,2.4560957-5.0242033,4.3235451-7.0007478,1.8662827-1.9765445,4.0627673-3.5003739,6.5888704-4.5709049,2.5249364-1.070531,5.2709797-1.6060882,8.2357964-1.6060882,3.348691,0,6.3415107.5763949,8.9772922,1.7297681,2.6351981,1.1527898,4.8591023,2.7460433,6.6711292,4.7768436l5.3532385-5.3538219c-2.6351981-2.6351981-5.6554374-4.721421-9.059551-6.2592519-3.404697-1.5360807-7.3852055-2.3055796-11.9421089-2.3055796-4.0639341,0-7.8525054.754914-11.365714,2.2647419-3.5143754,1.5104113-6.5614508,3.5966342-9.1418098,6.2592519-2.5815257,2.6637845-4.5849064,5.7791173-6.0118921,9.3477485-1.4287359,3.569798-2.1416454,7.4120417-2.1416454,11.5302316,0,4.0639341.7129095,7.8793416,2.1416454,11.4479728,1.4269858,3.569798,3.4449513,6.6997156,6.0533132,9.3891695,2.6071951,2.6906207,5.6682721,4.7908451,9.1832309,6.3000896,3.5126252,1.5098279,7.3297829,2.2653253,11.4479728,2.2653253,4.447225,0,8.441735-.7694989,11.9829466-2.306163,3.541795-1.5366641,6.6302915-3.65089,9.2654897-6.3415107l-5.3532385-5.3538219c-1.8120269,2.031967-4.0359311,3.6380553-6.6711292,4.8182647ZM271.8669324,20.8365589c-2.2793268-1.3173074-4.9005234-1.9765445-7.8653401-1.9765445s-5.6286012.6732386-7.98902,2.0179655c-1.7787733,1.0139781-3.260817,2.3003655-4.447225,3.8590528V0h-7.4126251v58.8045311h7.4126251v-22.8136868c0-1.9765445.4387135-3.7331487,1.3178908-5.2709797.8774271-1.5366641,2.0856394-2.7448765,3.6234704-3.6234704,1.5366641-.8780104,3.2944352-1.3178908,5.2709797-1.3178908,2.9654001,0,5.3666566.961436,7.2066864,2.8825579,1.8388631,1.9222887,2.758878,4.3649662,2.758878,7.3297829v22.8136868h7.4948839v-24.2960951c0-3.0744951-.6586537-5.791952-1.9765445-8.1535376-1.3178908-2.3598354-3.1170829-4.2004487-5.3946596-5.5183394ZM321.3639693,28.1669253c1.5646671,2.9105609,2.3470007,6.2324157,2.3470007,9.9655644,0,.5495587-.0285864,1.1399551-.0822588,1.7706058-.0554226.6318175-.165101,1.3318923-.3296185,2.1002243h-30.6332304c.2609237,1.5140576.7242857,2.901263,1.3957741,4.1590276,1.0973672,2.0588032,2.6626177,3.6520568,4.6945848,4.7768436,2.0302169,1.1259536,4.3649662,1.688347,7.0001644,1.688347,2.1953178,0,4.2132834-.3832909,6.0538966-1.1527898,1.8388631-.7683321,3.4175317-1.9217053,4.7354225-3.4595362l4.7768436,4.8596857c-1.9228721,2.1964846-4.2284517,3.8708301-6.918489,5.0236199-2.6906207,1.1533732-5.5731786,1.7297681-8.6476737,1.7297681-3.9530889,0-7.4814658-.8920119-10.582797-2.6766192-3.1030814-1.7840239-5.5591771-4.2132834-7.371204-7.2889452-1.8120269-3.0744951-2.7180403-6.5602841-2.7180403-10.4597006,0-3.8428271.8920119-7.3017799,2.6766192-10.3774418,1.7834405-3.0744951,4.2004487-5.5037545,7.2475241-7.2889452,3.0476589-1.7834405,6.4651906-2.6766192,10.2537619-2.6766192,3.5686312,0,6.753388.8237547,9.5536871,2.4706806,2.8002991,1.6475093,4.9827822,3.9262527,6.5480327,6.8362302ZM293.9793776,31.9554966c-.6151907,1.1650411-1.0439865,2.4577365-1.296451,3.8708301h23.7979482c-.2025112-1.624684-.616795-3.068734-1.2530609-4.3241285-.9340164-1.8388631-2.2519072-3.2658488-3.9530889-4.2827074-1.7023485-1.0151084-3.7617351-1.523246-6.1769931-1.523246-2.5261032,0-4.7500074.5495587-6.6711292,1.6469259-1.9228721,1.0991174-3.4052804,2.6357815-4.447225,4.612326ZM357.8489497,21.0839187c-2.2793268-1.4824083-4.9005234-2.2239042-7.8653401-2.2239042s-5.6286012.6732386-7.98902,2.0179655c-1.7787733,1.0139781-3.260817,2.3003655-4.447225,3.8590528v-5.0532637h-7.4126251v39.1207619h7.4126251v-22.8136868c0-1.9765445.4387135-3.7331487,1.3178908-5.2709797.8774271-1.5366641,2.0856394-2.7448765,3.6234704-3.6234704,1.5366641-.8780104,3.2944352-1.3178908,5.2709797-1.3178908,2.9654001,0,5.3666566.961436,7.2066864,2.8825579,1.8388631,1.9222887,2.758878,4.3649662,2.758878,7.3297829v22.8136868h7.4948839v-24.2960951c0-2.6894539-.6586537-5.2295586-1.9765445-7.6179804s-3.1170829-4.3241285-5.3946596-5.8065369ZM410.4344832,19.6837691v37.5560948c0,3.7331487-.8651757,7.0129991-2.5943604,9.8418846-1.7297681,2.8271353-4.1467763,5.0236199-7.2481075,6.5888704-3.1024981,1.5646671-6.6851307,2.3470007-10.747898,2.3470007-4.0639341,0-7.6319819-.7409125-10.7064769-2.2239042-3.0756619-1.4824083-5.5731786-3.569798-7.4948839-6.2592519l4.8591023-4.8591023c1.5920867,2.0308002,3.4863724,3.5826327,5.682857,4.6531637,2.1953178,1.0711144,4.8042632,1.6060882,7.8245024,1.6060882,3.9530889,0,7.1098428-1.0576963,9.4714283-3.1707553,2.3598354-2.1142258,3.5412116-4.955946,3.5412116-8.5239938v-5.1974354c-1.332184,1.8011247-3.0346054,3.231939-5.1064621,4.2914219-2.3610022,1.2082124-5.0522063,1.8120269-8.0712788,1.8120269-3.569798,0-6.7673895-.8505909-9.5945248-2.5535227-2.8288855-1.7011817-5.065041-4.0481824-6.7125503-7.0415855-1.6469259-2.9922363-2.4706806-6.3543454-2.4706806-10.0892443,0-3.7331487.8097532-7.0684217,2.4298429-10.0064021,1.6189229-2.9368137,3.8562452-5.2709797,6.7119669-7.0007478,2.8545549-1.7291847,6.0393117-2.5943604,9.5536871-2.5943604,3.0744951,0,5.8065369.6049813,8.1949587,1.8120269,2.070617,1.0474504,3.7578701,2.4571166,5.065041,4.2262639v-5.2145361h7.4126251ZM401.909906,45.1740752c1.0156918-1.8942857,1.5238294-4.103605,1.5238294-6.6297081,0-2.5249364-.5081376-4.7360059-1.5238294-6.6302915-1.0162752-1.8942857-2.4438444-3.376694-4.2827074-4.447225-1.8400299-1.070531-3.9670904-1.6060882-6.3829318-1.6060882-2.4706806,0-4.640329.5355572-6.5060283,1.6060882-1.8674495,1.070531-3.3358563,2.5529394-4.4063873,4.447225-1.070531,1.8942857-1.6060882,4.0767688-1.6060882,6.5474494,0,2.471264.5355572,4.6677486,1.6060882,6.5888704,1.070531,1.9228721,2.5529394,3.4181151,4.447225,4.4886461s4.0487658,1.6060882,6.4651906,1.6060882c2.4706806,0,4.612326-.5209723,6.4243529-1.5646671,1.8120269-1.042528,3.2250111-2.5121017,4.2412864-4.4063873Z"/><path id="handwriting" d="M436.1562769,109.6087867c-.09375.6191406-.6269531,1.0629883-1.234375,1.0629883-.0625,0-.1259766-.0043945-.1894531-.0141602l-11.296875-1.7104492c-.6826172-.1035156-1.1513672-.7402344-1.0488281-1.4228516.1025391-.6831055.7451172-1.1557617,1.4238281-1.0488281l11.296875,1.7104492c.6816406.1030273,1.1513672.7402344,1.0488281,1.4228516ZM441.3428003,93.5882788c-6.0478516.1738281-12.1064453.9399414-18.0068359,2.2768555-.6728516.152832-1.0957031.8222656-.9423828,1.4956055.1308594.5800781.6464844.9741211,1.2177734.9741211.0908203,0,.1845703-.0102539.2773438-.03125,5.7421875-1.3012695,11.6396484-2.046875,17.5263672-2.2163086.6894531-.0200195,1.2333984-.5952148,1.2128906-1.2856445-.0195312-.690918-.609375-1.2338867-1.2851562-1.2133789ZM438.2607691,79.9413062c-.1416016-.6748047-.8027344-1.1044922-1.4804688-.965332-5.7910156,1.2211914-11.3212891,3.3491211-16.4384766,6.3251953-.5966797.347168-.7988281,1.1123047-.4511719,1.7089844.2314453.3989258.6503906.621582,1.0810547.621582.2138672,0,.4296875-.0546875.6279297-.1694336,4.8857422-2.8417969,10.1669922-4.8740234,15.6962891-6.0400391.6757812-.1425781,1.1074219-.8056641.9648438-1.480957ZM447.72073,19.4720679c.0166016.612793-.4130859,1.1469727-1.015625,1.2617188-6.4365234,1.2304688-11.2978516,8.2338867-10.2001953,14.6943359.0615234.362793-.0400391.7348633-.2773438,1.0161133s-.5869141.4433594-.9550781.4433594h-.8779297c-.3681641,0-.7177734-.1621094-.9550781-.4433594s-.3388672-.6533203-.2773438-1.0161133c1.0976562-6.4604492-3.7636719-13.4643555-10.2001953-14.6938477-.6025391-.1152344-1.0322266-.6494141-1.015625-1.262207.0175781-.6123047.4755859-1.1225586,1.0830078-1.2045898,5.7929688-.7832031,10.5146484-6.3798828,10.3095703-12.222168-.0117188-.3388672.1142578-.668457.3496094-.9121094.2353516-.2441406.5605469-.3818359.8994141-.3818359h.4921875c.3388672,0,.6640625.1376953.8994141.3818359.2353516.2436523.3613281.5732422.3496094.9121094-.2050781,5.8417969,4.515625,11.4389648,10.3085938,12.222168.6074219.0820312,1.0654297.5922852,1.0830078,1.2045898ZM442.4414331,19.5936499c-3.4160156-1.6064453-6.1953125-4.5957031-7.6074219-8.1030273-1.4130859,3.5073242-4.1923828,6.496582-7.6083984,8.1030273,3.484375,1.7910156,6.2246094,4.9609375,7.6083984,8.6259766,1.3828125-3.6650391,4.1240234-6.8349609,7.6074219-8.6259766ZM365.0273706,87.0863257c.3701172,0,.7363281-.1630859.9824219-.4760742l1.4921875-1.8891602c.4287109-.5415039.3359375-1.3276367-.2050781-1.7558594-.5410156-.4291992-1.3271484-.3369141-1.7558594.2050781l-1.4941406,1.8920898c-.4277344.5419922-.3349609,1.328125.2070312,1.7553711.2294922.1811523.5029297.2685547.7734375.2685547ZM401.4355738,92.5218726c.4130859.5532227.2988281,1.3364258-.2548828,1.7490234-4.5351562,3.3828125-9.6992188,6.9125977-15.0136719,7.574707-1.1894531,2.628418-2.7568359,4.3935547-4.6806641,5.2714844-1.3271484.6567383-2.9707031.7475586-4.3613281.2216797-1.1914062-.449707-2.1044922-1.3227539-2.5712891-2.4580078-.8359375-1.9160156-.4677734-4.0947266.0732422-5.9848633-7.2275391,6.3530273-12.4150391,8.8886719-15.4394531,7.5644531-1.7216797-.7563477-2.5966797-2.5961914-2.5986328-5.46875.0517578-.9990234.2226562-1.9873047.4755859-2.9541016-2.1142578,2.3959961-4.3398438,4.7973633-6.6494141,7.0351562-2.46875,2.3408203-5.2089844,4.6328125-8.5839844,5.6079102-1.9365234.6083984-3.8095703.3535156-5.1132812-.7060547-1.2539062-1.0180664-1.8398438-2.6445312-1.6503906-4.5800781.1025391-1.3520508.3583984-2.6796875.7128906-3.9697266-1.5986328,1.3691406-3.3310547,2.5825195-5.2822266,3.5024414-2.4238281,1.0146484-5.7880859,2.4233398-8.9326172,1.8774414-.1113281.1489258-.2207031.2905273-.328125.4233398-1.1044922,1.4819336-3.265625,2.8496094-5.2324219,2.515625-.7685547-.1298828-2.1523438-.6474609-2.7861328-2.6547852-.5126953-1.6147461-.2998047-3.3857422.1103516-4.8808594-6.2285156,4.3481445-13.1318359,6.9047852-20.5976562,7.6269531-.1347656.2890625-.2685547.5786133-.4003906.8686523.7939453,1.3579102,1.34375,2.9013672,1.5742188,4.4736328.1948242,1.1838379.3076172,2.3175659.3605957,3.413208,41.5803223-2.6969604,77.8618164-4.8103027,101.2175293-5.9342041.6855469-.0332031,1.2763672.4985352,1.3095703,1.1884766.0332031.6894531-.4990234,1.2753906-1.1884766,1.3085938-23.3791504,1.125061-59.7124023,3.2415771-101.3457031,5.9424438-.1567383,2.7335815-.8071289,5.1451416-1.9697266,7.1898804-.9375,1.5834961-2.3964844,2.8588867-3.9287109,2.8588867-.4873047,0-.9804688-.128418-1.4677734-.4160156-1.9130859-1.28125-1.6796875-4.3852539-1.4941406-5.6621094.1472168-1.156189.3466797-2.2987671.5852051-3.4307251-56.2814941,3.6937256-121.0551758,8.3752441-176.3371582,13.0886841-1.5959473,2.3046265-3.269043,4.0239258-5.078125,5.2102051-1.3095703.8574219-3.3466797,1.8583984-5.71875,1.8583984-.0859375,0-.171875-.0014648-.2578125-.0039062-2.0947266-.0078125-3.8164062-1.0048828-4.5732422-2.6674805-.4333496-.9504395-.4829102-1.9970703-.1967773-3.0233154-34.6745605,3.0664062-64.5922852,6.1068726-84.762207,8.8572998-.0576172.0078125-.1142578.0112305-.1708984.0112305-.6152344,0-1.1513672-.4541016-1.2363281-1.0810547-.09375-.684082.3857422-1.3139648,1.0693359-1.4077148,20.5546875-2.8027954,51.2192383-5.9063721,86.7226562-9.0317383,2.2441406-2.3228149,5.1621094-3.7003784,7.9980469-5.0229492,1.125-.5249023,2.1875-1.0205078,3.2021484-1.5693359,1.9648438-1,3.9394531-2.0244141,5.9033203-3.0947266.1875-.4326172.3730469-.8637695.5576172-1.2924805.6464844-1.5029297,1.2568359-2.9223633,1.9208984-4.3344727.3984375-.8476562.8125-1.7060547,1.2324219-2.5673828-.1914062.1962891-.3828125.3896484-.5771484.5795898-.9619141,1.0805664-4.4746094,4.1318359-7.1279297,3.28125-.8720703-.2797852-1.9609375-1.0654297-2.1962891-3.2202148-.0322266-.9379883.2216797-2.0429688.6894531-3.2192383-4.7509766,4.112793-9.2138672,7.2456055-12.7773438,7-.0576172-.0039062-.1142578-.0117188-.1699219-.0234375-2.2431641-.4697266-3.2421875-1.7202148-3.6855469-2.6870117-.8359375-1.8217773-.4492188-4.2026367.3671875-6.5273438-3.3154297,2.484375-7.7539062,4.9121094-12.3642578,7.4335938-3.1210938,1.7070312-6.2880859,3.4399414-9.0244141,5.1674805-.6630859,3.4804688-1.4619141,6.3237305-2.8896484,7.8647461-1.3066406,1.9072266-3.7939453,2.894043-5.4863281,2.1616211-.5214844-.2260742-2.1660156-1.1904297-1.4492188-4.1210938.0185547-.0795898.0458984-.1567383.0810547-.230957,1.1679688-2.5063477,3.9267578-4.8647461,7.4804688-7.1943359.1923828-1.0776367.3740234-2.1923828.5537109-3.2978516.3808594-2.3320312.765625-4.6918945,1.2636719-6.8608398-.0185547.0141602-.0380859.0288086-.0566406.043457-1.8222656,1.8178711-14.7607422,11.7353516-20.7597656,9.480957-1.3027344-.4892578-2.8759766-1.7456055-2.9794922-4.9511719-.0019531-.0522461,0-.1040039.0039062-.1557617.1230469-1.3217773.4462891-2.6298828.9345703-3.8676758-.0019531-.0449219-.0029297-.090332-.0009766-.1362305.0185547-.3696289.1953125-.6943359.4609375-.9106445,1.3320312-2.7412109,3.4755859-5.0258789,5.9775391-6.1713867,1.4355469-.6357422,3.5703125-.9018555,4.8984375.4194336.6142578.6762695.8759766,1.4370117.8046875,2.2480469-.1396484,1.5795898-1.5097656,2.8017578-2.0917969,3.2539062-1.9355469,1.5576172-4.7490234,2.4462891-7.8242188,2.4873047-.3369141.9155273-.5664062,1.8710938-.6621094,2.8291016.0908203,2.1386719,1.0087891,2.4838867,1.3574219,2.6147461,4.0830078,1.5356445,15.9365234-6.5742188,18.1386719-8.9350586.0517578-.0551758.1083984-.105957.1699219-.1513672.9238281-.6845703,1.6201172-1.722168,2.3583984-2.8208008,1.0976562-1.6357422,2.3427734-3.4892578,4.5839844-4.3115234,1.3867188-.4838867,2.8574219-.1679688,3.6142578.0625,1.3769531.440918,1.3515625,1.2612305,1.2148438,1.7119141-.1357422.4506836-.5673828,1.1464844-1.9443359.7543945-1.3291016-.472168-2.0292969-.1977539-2.4453125.0483398-2.5576172,1.5097656-3.6152344,7.9970703-4.5488281,13.7211914-.0625.3803711-.1230469.7568359-.1845703,1.1298828,2.2685547-1.3500977,4.7382812-2.7006836,7.2519531-4.0756836,6.3164062-3.4550781,12.8476562-7.027832,15.5078125-10.440918.0273438-.0336914.0556641-.0664062.0849609-.0976562.1064453-.1113281.4677734-.5908203.6835938-.8774414.8017578-1.0644531,1.1396484-1.4990234,1.9423828-1.34375.4707031.0927734.8505859.4506836.9716797.9140625.0742188.2807617.046875.5786133-.0751953.8422852-.046875.1030273-.1777344.3427734-.3769531.7016602-1.3291016,2.4091797-4.4267578,8.0249023-3.2695312,10.5463867.1074219.2358398.4326172.9438477,1.8388672,1.2636719,3.7802734.1328125,10.5957031-6.0546875,14.6601562-9.7836914.5693359-.4692383,1.1220703-.9711914,1.7050781-1.4995117,2.6777344-2.4267578,6.1923828-5.6152344,9.8974609-4.6899414.7197266.1435547,1.3144531.4321289,1.7939453.762207.0390625-.0766602.0791016-.152832.1181641-.2299805l.4570312-.8862305c.2109375-.4072266.7578125-1.4838867,1.8515625-.9902344.6054688.2714844.8789062,1.0146484.6416016,1.6342773-1.5488281,3.5957031-3.3583984,7.2241211-5.1074219,10.7329102-1.0947266,2.1958008-2.2265625,4.4667969-3.2548828,6.6499023-.390625.8310547-.765625,1.671875-1.1416016,2.5351562,8.6894531-5.0756836,16.9130859-11.3349609,22.8330078-20.7001953.3427734-.5429688,1.0419922-.737793,1.6162109-.449707.5742188.2875977.8369141.9638672.6083984,1.5639648-.6708984,1.7553711-2.0683594,4.6342773-3.4189453,7.418457-.1845703.3798828-.3671875.7558594-.5458984,1.1245117,4.1113281-4.6264648,7.7626953-7.9189453,10.78125-7.2924805,1.4414062.2998047,2.4628906,1.4213867,3.0361328,3.3330078.2861328,1.1796875.3837891,2.4384766.4775391,3.65625.1923828,2.4951172.3916016,5.0756836,2.0214844,6.3959961,1.1884766.9443359,3.0302734.722168,4.3652344.3671875,4.7822266-1.2641602,9.1826172-4.7246094,13.8505859-10.8896484.4169922-.550293,1.1992188-.6591797,1.7519531-.2421875.5498047.4165039.6582031,1.2006836.2421875,1.7509766-5.0234375,6.6347656-9.8544922,10.3833008-15.2050781,11.7978516-2.7060547.7172852-4.9794922.4296875-6.5693359-.8344727-2.4746094-2.0053711-2.7265625-5.2714844-2.9492188-8.1533203-.0908203-1.1713867-.1757812-2.2773438-.3974609-3.1967773-.2714844-.8994141-.6591797-1.4389648-1.1337891-1.5375977-2.5-.5087891-8.3642578,6.3945312-11.1728516,9.7192383-1.1894531,1.4082031-2.1289062,2.5209961-2.7910156,3.1474609-.0556641.0522461-.1152344.0996094-.1787109.1411133-.4726562.3046875-1.1660156.2749023-1.5869141-.0986328-.8525391-.7568359-.5136719-1.4443359,1.1103516-4.7490234.2919922-.5932617.5449219-1.1054688.6484375-1.3515625.2304688-.503418.4882812-1.0507812.7636719-1.6274414-5.8632812,6.1191406-12.7626953,10.6328125-19.8056641,14.5175781-.9460449,2.1574097-1.9702148,4.350708-3.2026367,6.5330811,50.0979004-4.2542725,107.7519531-8.4729004,159.755127-11.9546509.0671387-.7141724.4973145-1.6699829,1.1135254-3.0076294,2.1777344-4.7900391,4.4355469-9.6655273,6.8701172-14.5073242-1.4951172.5917969-3.0957031.5825195-4.6220703-.3759766-1.15625-.6884766-1.90625-1.9238281-2.5683594-3.0141602-.4111328-.6767578-.7998047-1.3164062-1.2207031-1.7319336-.3632812-.3623047-.7568359-.5073242-1.2744141-.4667969-1.7041016.1259766-5.0917969,2.1005859-11.5556641,10.7929688-1.3066406,1.9121094-2.015625,2.9536133-3.1914062,2.3544922-1.1796875-.6005859-.7070312-1.9228516-.1083984-3.5966797.3984375-1.1611328.8339844-2.3295898,1.2890625-3.4970703-3.6679688,3.6870117-8.6054688,7.2421875-12.9824219,6.7041016-.0351562-.0043945-.0703125-.0087891-.1064453-.0136719-1.0429688,1.9506836-2.4580078,3.6821289-4.109375,4.6289062-1.7578125,1.0087891-3.6357422,1.0810547-5.4335938.2070312-.0800781-.0390625-.1552734-.0859375-.2246094-.1401367-1.4482422-1.1337891-2.2792969-2.7753906-2.4033203-4.7470703-.2197266-3.4887695,1.7783203-7.1948242,3.7275391-9.1621094.4853516-.4902344,1.2763672-.4936523,1.7675781-.0083008.1806641.1791992.2949219.3989258.34375.6303711.2255859-1.7138672,1.1572266-3.2954102,2.9267578-3.9365234,1.3867188-.4296875,2.6533203-.1860352,3.6210938.6713867,1.5253906,1.3525391,1.9921875,3.9458008,1.6699219,5.8383789-.0917969,1.1054688-.3730469,2.3422852-.8125,3.5830078,4.6123047-.0883789,11.4072266-6.3652344,14.4804688-11.1538086.3984375-.5517578.5615234-.7573242.7128906-.9038086.4160156-.4033203,1.1396484-.5170898,1.6259766-.2045898.3994141.2543945.7998047.7700195.4433594,1.7807617l-.7197266,1.737793c-.5585938,1.3413086-1.1259766,2.7036133-1.6738281,4.0693359,3.2871094-4.0039062,7.1953125-7.8818359,10.5292969-8.1279297,1.2460938-.09375,2.3505859.3188477,3.2197266,1.1855469.6357422.628418,1.1240234,1.4316406,1.5957031,2.2084961.5351562.8823242,1.0898438,1.7939453,1.7363281,2.1796875,2.2021484,1.3837891,4.7714844-1.3212891,5.8251953-2.9423828.8085938-1.2197266,1.6035156-2.4736328,2.3847656-3.730957.9418945-1.6594849,1.9174805-3.3028564,2.9211426-4.9297485-4.6242676.7888794-9.1887207,1.9204102-13.645752,3.4053345-.1318359.043457-.2646484.0644531-.3955078.0644531-.5234375,0-1.0117188-.331543-1.1855469-.8554688-.21875-.6547852.1357422-1.362793.7900391-1.5810547,5.2836914-1.7598267,10.713623-3.0375977,16.2160645-3.843811.642334-.9871826,1.2946777-1.9680786,1.9645996-2.937439,1.0244141-1.5361328,2.0898438-3.050293,3.2158203-4.515625,2.1123047-2.8085938,2.2402344-2.8803711,2.9912109-2.7851562.4453125.0561523.8261719.347168.9980469.7612305.2841797.6835938.0703125.9599609-.8300781,2.1225586-1.5048828,1.8964844-2.9433594,3.8481445-4.3203125,5.8417969-.2390137.3585205-.4628906.7247925-.6977539,1.0858765,1.4873047-.1644897,2.9775391-.3060303,4.472168-.3998413.6728516-.0415039,1.2822266.4799805,1.3251953,1.1694336.0439453.6889648-.4794922,1.2822266-1.1689453,1.3256836-2.1328125.1338501-4.2583008.3478394-6.3745117.6292114-.7255859,1.1653442-1.4384766,2.3321533-2.1430664,3.4869995-.6464844,1.0595703-1.3027344,2.1357422-1.9697266,3.2104492-4.2460938,7.4799805-7.9121094,15.2602539-11.3632812,22.8398438.0146484.0102539.0302734.0209961.0449219.0327148.5478516.4189453.6523438,1.2036133.2333984,1.7519531-.1557617.2035522-.3046875.3963623-.4506836.5830688,4.0517578-.2700195,8.0727539-.5361328,12.0449219-.7965698.7487793-2.7764893,1.732666-5.4870605,2.8833008-8.1424561-.1777344-.2290039-.3642578-.4453125-.5595703-.6474609-.0322266-.0336914-.0625-.0688477-.0908203-.105957-.1796875-.2338867-.6572266-.8554688-.4296875-1.6201172.0800781-.2666016.3125-.7485352.9794922-.9814453.1191406-.0415039.2441406-.0649414.3710938-.0693359.4492188-.0146484.8964844-.0361328,1.3408203-.0649414,2.1191406-4.3374023,4.5800781-8.5463867,7.0039062-12.6938477,1.0839844-1.8544922,2.1660156-3.7045898,3.2119141-5.5581055.4082031-.703125.8056641-1.4067383,1.2050781-2.1157227,2.5107422-4.4501953,5.1064453-9.0512695,9.4277344-12.0083008,1.5957031-1.1967773,4.1230469-2.081543,5.8046875-1.1191406.609375.3486328,1.5976562,1.2412109,1.3662109,3.2963867-.0068359.0581055-.0175781.1157227-.0322266.1723633-1.7382812,6.7368164-12.5771484,15.6772461-20.578125,21.8164062-.0615234.0473633-.1269531.0883789-.1933594.1225586-1.4814453,2.565918-2.9365234,5.1616211-4.2744141,7.7963867,7.6806641-1.0341797,14.7089844-4.1738281,20.9453125-9.3642578.1035156-.0859375.2207031-.1547852.3466797-.2041016.2128906-.0834961.4345703-.1162109.640625-.0986328.2226562-1.8076172.9482422-3.3833008,2.0751953-4.4208984.8652344-.8027344,2.0292969-1.2255859,3.1835938-1.1459961,1.0380859.0678711,1.9677734.5361328,2.6171875,1.3188477.0263672.0322266.0517578.0654297.0751953.1000977,2.2792969,3.3833008.9316406,7.8637695-.8398438,11.0927734,2.1328125-.0166016,4.5146484-1.012207,6.4033203-1.8022461,3.1943359-1.5058594,5.8544922-4.0395508,8.3564453-6.7148438.2646484-.5839844.5322266-1.1533203.796875-1.7070312,3.4863281-6.9824219,6.6728516-12.4477539,10.0380859-17.2202148,1.6738281-2.2021484,3.4833984-4.4038086,5.8994141-5.4384766,2.2558594-.8564453,3.3955078.1850586,3.78125.6723633.9482422,1.1987305.8291016,3.1953125-.2910156,4.8544922-2.7314453,3.7832031-5.9707031,7.1982422-9.1025391,10.5014648-1.5722656,1.6582031-3.1982422,3.3730469-4.7207031,5.09375-.9550781.9873047-1.8505859,1.9726562-2.75,2.9614258-.5087891.5605469-1.0214844,1.1245117-1.5410156,1.684082-1.1416016,2.5654297-2.1728516,5.3994141-2.3916016,8.2807617-.0761719.7866211-.0087891,1.8183594.7363281,2.4233398.640625.5219727,1.6708984.612793,2.8164062.2529297,2.8876953-.8344727,5.3447266-2.9052734,7.5742188-5.0195312,4.2988281-4.1635742,8.3447266-8.9648438,11.9140625-13.2011719.4121094-.4887695,1.1240234-.5888672,1.65625-.2299805.5292969.3579102.703125,1.0576172.4033203,1.6220703l-.1572266.2963867c-1.4462891,2.7192383-3.2470703,6.1030273-3.4140625,9.3007812.0029297,1.1645508.1953125,2.7158203,1.1054688,3.1152344,2.0576172.9082031,7.6904297-2.4477539,14.3359375-8.5478516.8730469-.8164062,1.8691406-1.75,2.9150391-1.0585938,1.0791016.7138672.5703125,2.109375.0791016,3.4584961-.5820312,1.7573242-1.3955078,4.2119141-.6669922,5.8833008.2167969.5258789.6005859.8857422,1.1523438,1.09375.7412109.2792969,1.6621094.2275391,2.40625-.140625,1.1279297-.5151367,2.1035156-1.5009766,2.9257812-2.9477539-.1201172-.0102539-.2392578-.0214844-.359375-.0351562-1.6347656-.2744141-2.9482422-1.1987305-3.7675781-2.6123047-.9414062-1.6235352-1.1152344-3.7485352-.453125-5.5458984.4384766-1.5810547,1.7558594-3.0585938,3.3261719-3.6689453,1.2568359-.4882812,2.5576172-.3803711,3.6601562.3051758,3.2626953,2.2954102,1.9794922,6.8320312,1.4199219,8.7910156,4.2802734-.9667969,8.6357422-3.9819336,12.5205078-6.878418.5517578-.4121094,1.3369141-.2983398,1.7490234.2548828ZM344.1562769,89.0526343c.9882812-1.0708008,2-2.1376953,2.9902344-3.1821289,3.0761719-3.2436523,6.2558594-6.597168,8.8671875-10.2124023.5625-.8344727.5507812-1.6557617.3798828-1.871582-.0263672-.0332031-.0996094-.0561523-.2158203-.0561523-.1523438,0-.3798828.0400391-.6689453.1499023-1.8076172.7753906-3.3730469,2.6972656-4.8183594,4.5976562-2.1972656,3.1166992-4.3310547,6.5649414-6.5341797,10.574707ZM301.68948,93.5687476c5.7207031-4.6396484,13.5849609-11.668457,14.9482422-16.6733398.0332031-.3950195-.0175781-.6967773-.1328125-.7626953-.0898438-.0512695-.2314453-.078125-.4101562-.078125-.6279297,0-1.7197266.3276367-2.6962891,1.0595703-3.8857422,2.6601562-6.3359375,7.0039062-8.7060547,11.2045898-.4052734.7182617-.8076172,1.4311523-1.2128906,2.1298828-.5859375,1.0375977-1.1845703,2.0776367-1.7900391,3.1201172ZM240.3037378,108.9242163c-1.4111328-.8408203-2.8242188-2.4140625-3.7939453-5.2758789-.1464844-.5737305-.2158203-1.1777344-.2021484-1.7792969-.0605469.159668-.1542969.3095703-.2822266.4384766-1.6181641,1.6333008-3.1708984,4.6464844-3.0078125,7.2451172.0761719,1.2070312.5292969,2.1660156,1.3466797,2.8520508,1.0058594.4492188,1.9804688.3881836,2.9755859-.1831055,1.1289062-.6469727,2.1552734-1.8730469,2.9638672-3.2973633ZM241.2510034,99.7752906c-.1445312-.1279297-.34375-.2568359-.6679688-.2568359-.140625,0-.3056641.0244141-.5.0844727-1.1230469.4082031-1.5029297,2.0556641-1.1777344,3.3369141.6025391,1.7700195,1.4140625,3.0063477,2.4511719,3.7055664.4023438-1.0976562.6611328-2.1972656.7353516-3.1567383.0029297-.0424805.0087891-.0849609.0166016-.1264648.2128906-1.1762695-.0810547-2.8984375-.8574219-3.5869141ZM49.6250269,110.824607c1.9697266-.2250977,3.7373047-.8764648,4.9628906-1.8623047.7558594-.5869141,1.1230469-1.1923828,1.1513672-1.5117188.0068359-.0776367.0029297-.1650391-.1230469-.3037109-.1230469-.121582-.3671875-.1835938-.6748047-.1835938-.3994141,0-.90625.1049805-1.3886719.3183594-1.5107422.6923828-2.8828125,1.9682617-3.9277344,3.5429688ZM66.3945581,125.3822242c-2.09375,1.5493164-3.6855469,3.0849609-4.4267578,4.5854492-.1484375.6826172-.0664062,1.0668945.0419922,1.1142578.4316406.1855469,1.7607422-.2519531,2.4667969-1.3339844.0439453-.0678711.0957031-.1313477.1523438-.1894531.7324219-.7514648,1.2939453-2.2744141,1.765625-4.1762695ZM121.3701441,104.4998999c-.4160156-.2802734-.8388672-.4580078-1.2675781-.5458984-.1083984-.0126953-.2197266-.019043-.3339844-.019043-.6523438,0-1.3974609.2084961-2.2333984.6259766-4.2197266,2.1088867-8.7792969,8.6352539-8.6865234,11.4677734.0263672.2041016.1376953.9106445.46875,1.0166016.828125.2661133,3.1757812-1.0830078,4.5566406-2.6254883,2.7578125-2.7143555,5.2607422-6.0322266,7.4960938-9.9199219ZM99.9321558,133.0531836c2.7412109-.2387695,5.5092773-.477478,8.3022461-.7162476.2231445-.3517456.4453125-.7163696.6669922-1.0963135.7158203-1.237793,1.3603516-2.4921875,1.9609375-3.7485352-1.0195312.5336914-2.0390625,1.0576172-3.0566406,1.5751953-1.0517578.5698242-2.1982422,1.1044922-3.3066406,1.621582-1.5549316.7250977-3.1337891,1.4699707-4.5668945,2.3643188ZM106.2907984,135.0115577c-3.2363281.2779541-6.4389648.5559082-9.6030273.8337402-.5270996.765686-.6940918,1.5817261-.3947754,2.2400513.3417969.75,1.2167969,1.199707,2.3417969,1.2041016,1.8847656.0629883,3.5078125-.7548828,4.5634766-1.4458008,1.0686035-.7012939,2.09375-1.6442871,3.0925293-2.8320923ZM291.7395288,121.2595435c-1.0480957.0682373-2.0998535.1368408-3.154541.2058105-.296875,1.3001709-.5400391,2.6119385-.7089844,3.9388428-.2587891,1.7763672.0371094,3.0004883.3496094,3.2099609.4472656.2646484,1.4033203-.7446289,1.9013672-1.5834961.920166-1.6188354,1.449707-3.5570679,1.6125488-5.7711182ZM291.7751734,118.7522803c-.0473633-1.0164185-.1567383-2.0778198-.3395996-3.1908569-.0869141-.5922852-.2324219-1.1835938-.4287109-1.7578125-.6711426,1.684082-1.2619629,3.3886108-1.7612305,5.1137695.8442383-.0551758,1.6894531-.1104126,2.529541-.1651001ZM319.1162378,105.8797828c-1.3574219-.9624023-2.3730469-2.5766602-2.8740234-4.4755859-.7958984,1.9375-1.0283203,3.7060547-.640625,4.9296875.2695312.8515625.6699219.9194336.8203125.9448242.7480469.1206055,1.9384766-.5024414,2.6943359-1.3989258ZM321.8828394,94.8065406c-.2080078-.2294922-.4833984-.3564453-.8193359-.378418-.0332031-.0024414-.0673828-.003418-.1015625-.003418-.4355469,0-.8857422.1796875-1.2226562.4912109-.9853516.9072266-1.4765625,2.5771484-1.3164062,4.4707031.1630859,1.9414062.9941406,3.6772461,2.1230469,4.4487305,1.6503906-2.7646484,2.9316406-6.5732422,1.3369141-9.0288086ZM384.3662378,92.4378882c-.2050781-.1259766-.4443359-.1923828-.7050781-.1923828-.2109375,0-.4365234.043457-.6699219.1337891-.8359375.3251953-1.5986328,1.1918945-1.8544922,2.1079102-.4423828,1.2124023-.3388672,2.5258789.2392578,3.5234375.3105469.5366211.9013672,1.2133789,1.9511719,1.3911133.3671875.0405273.7363281.0610352,1.1064453.0615234.1132812-.3208008.2226562-.6552734.328125-1.0024414.6337891-2.2167969,1.1660156-4.9228516-.3955078-6.0229492ZM196.0029566,99.3822242c.6416016.2475586,1.3662109-.0737305,1.6152344-.71875,3.6904297-9.6054688,16.1757812-18.9873047,26.1835938-19.6826172,3.7626953-.2329102,8.8710938.6464844,10.8916016,3.9003906.8701172,1.3574219,1.1621094,3.2138672.8203125,5.230957-1.1230469,6.7749023-7.28125,13.8339844-14.9755859,17.1665039-3.3217773,1.4390259-6.6181641,2.0339355-9.7297363,1.8087158,3.8811035-8.2492065,8.4223633-16.2475586,14.1848145-23.1710205.4414062-.5307617.3691406-1.3188477-.1611328-1.7607422-.53125-.4423828-1.3203125-.3696289-1.7607422.1611328-6.0778809,7.3021851-10.8083496,15.7200928-14.8393555,24.383667-1.9350586-.446106-3.7753906-1.2287598-5.472168-2.3621826-.5712891-.3823242-1.3486328-.2294922-1.7333984.3447266-.3837891.5737305-.2294922,1.3500977.3447266,1.7333984,1.8117676,1.2109375,3.7609863,2.0704956,5.8005371,2.6015625-1.7023926,3.7876587-3.2866211,7.6065063-4.7966309,11.387207-.3554688,1.0708008-.8417969,2.5371094.3417969,3.1152344.2060547.1010742.4013672.1445312.5839844.144043.8173828,0,1.3945312-.8652344,1.7021484-1.3251953.3212891-.4819336.2636719-1.1064453-.1025391-1.5214844,1.5058594-3.7582397,3.0893555-7.5567627,4.795166-11.3206787.7827148.0942993,1.5734863.15271,2.3757324.15271,3.0664062-.0004883,6.2587891-.6904297,9.4609375-2.0771484,8.4296875-3.6508789,15.1933594-11.4853516,16.4472656-19.0473633.4443359-2.6279297.0244141-5.1118164-1.171875-6.9780273-2.5878906-4.1699219-8.4980469-5.3461914-13.1699219-5.0610352-11.0429688.7670898-24.2919922,10.7114258-28.3535156,21.2807617-.2470703.6445312.0742188,1.3676758.71875,1.6152344ZM99.3066675,99.2655249c.3779297,0,.75-.1704102.9960938-.4941406.6484375-.8530273,1.2001953-1.7807617,1.6396484-2.7573242.2832031-.6293945.0029297-1.3696289-.6259766-1.652832-.6298828-.2841797-1.3701172-.003418-1.6533203.6264648-.3623047.8046875-.8173828,1.5688477-1.3505859,2.2719727-.4179688.5493164-.3105469,1.3334961.2392578,1.7514648.2255859.1713867.4912109.2543945.7548828.2543945ZM16.0420191,130.7508765c15.7460938-2.8842773,29.8632812-18.6962891,29.6181641-33.1401367.0292969-2.7744141-.9951172-5.1962891-2.9628906-7.0048828-2.6220703-2.4086914-6.7099609-3.5419922-11.1689453-3.1162109-11.1113281.8344727-25.0595703,11.019043-28.7011719,20.9570312-.2373047.6484375.0957031,1.3662109.7441406,1.6040039.6494141.2387695,1.3662109-.0952148,1.6035156-.7436523,3.3564453-9.1606445,16.2548828-18.5517578,26.5664062-19.3266602,3.7353516-.3564453,7.1953125.565918,9.2646484,2.4667969,1.4511719,1.3339844,2.1767578,3.0620117,2.1542969,5.1713867.2265625,13.3691406-12.9130859,27.9892578-27.5507812,30.6699219-5.4072266.9086914-9.2685547.0029297-10.0791016-2.3608398-.7900391-2.3061523,1.4423828-6.2734375,7.2597656-9.4057617.3051758-.1727295.6306152-.3393555.9587402-.5049438-1.7668457,3.5582275-3.4030762,7.1617432-4.8112793,10.6587524-.4013672,1.2211914.5566406,1.6655273.6669922,1.7124023.1992188.0839844.3789062.1230469.5439453.1230469.75-.0004883,1.1748047-.8125,1.6865234-1.7910156l.2402344-.4589844c.1455078-.2832031.1728516-.5961914.0996094-.8823242,1.5236816-3.5944824,3.2695312-7.2700195,5.1303711-10.8589478,6.0385742-2.1286621,13.7768555-3.026123,18.824707-1.1771851.6494141.2373047,1.3662109-.0961914,1.6035156-.7441406s-.0957031-1.3662109-.7441406-1.6035156c-4.8664551-1.7831421-11.9472656-1.2875366-18.0234375.3959351,4.0854492-7.4862671,8.5751953-14.3422241,12.5146484-18.9071655.4511719-.5229492.3925781-1.3120117-.1298828-1.7631836-.5234375-.4521484-1.3125-.3920898-1.7626953.1293945-4.440918,5.1459961-9.552002,13.1141968-14.0458984,21.6604614-1.4482422.5488892-2.7905273,1.1610107-3.9599609,1.822937-6.3964844,3.4438477-9.7792969,8.4287109-8.4160156,12.4047852.9755859,2.8491211,4.109375,4.3896484,8.6699219,4.3896484,1.2929688,0,2.7001953-.1240234,4.2060547-.3769531Z"/></svg></a>
<!--<ul><li><a href="index.html">All Projects</a></li><li><a href="mailto:manicheng@live.com">Email me</a></li></ul>-->`;
});


//No Dragging
document.addEventListener('DOMContentLoaded', function() {
  var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    images[i].ondragstart = function() { return false; };
  }
});

//Max Width Image
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[data-max-width]');
  images.forEach(function(image) {
    const maxWidth = image.getAttribute('data-max-width');
    if (maxWidth) {
      image.style.maxWidth = maxWidth + 'px';
    }
  });
});

// Image Col Width
document.addEventListener('DOMContentLoaded', function() {
    const colImgElements = document.querySelectorAll('.colImg');

    colImgElements.forEach(function(element) {
        const width = element.getAttribute('data-width');
        element.style.width = `${width}%`;
        element.style.flex = `0 0 ${width}%`;
    });
});


//content toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggleElements = document.querySelectorAll('.toggleTitle');

    toggleElements.forEach(function(element) {
        element.addEventListener('click', function() {
            const content = this.nextElementSibling;

            if (content.style.display === 'none') {
                content.style.display = 'block';
                this.querySelector('.toggleArrow').textContent = '\u02C6'; // Change arrow to up
                this.classList.remove('collapsed'); // Remove collapsed class when expanded
                content.classList.add('fadeIn'); // Add fadeIn animation class
                content.classList.remove('fadeOut'); // Remove fadeOut animation class
            } else {
                content.classList.add('fadeOut'); // Add fadeOut animation class
                content.classList.remove('fadeIn'); // Remove fadeIn animation class
                setTimeout(() => {
                    content.style.display = 'none';
                }, 500); // Adjust the time to match the animation duration
                this.querySelector('.toggleArrow').textContent = '\u02C7'; // Change arrow to down
                this.classList.add('collapsed'); // Add collapsed class when collapsed
            }
        });
    });
});


//popover
document.getElementById('emailLink').addEventListener('click', function(event) {
            event.preventDefault();
            
            // Copy email address to clipboard
            var email = this.textContent;
            navigator.clipboard.writeText(email)
                .then(function() {
                    console.log('Email copied to clipboard: ' + email);
                    
                    // Show popover with fade-in effect
                    var popover = document.getElementById('popover');
                    popover.style.display = 'block';
                    setTimeout(function() {
                        popover.style.opacity = 1;
                    }, 10); // Delay before setting opacity to trigger fade-in

                    setTimeout(function() {
                        // Hide popover with fade-out effect
                        popover.style.opacity = 0;
                        setTimeout(function() {
                            popover.style.display = 'none';
                        }, 500); // Wait for transition to complete before hiding
                    }, 3000); // 3 seconds
                })
                .catch(function(err) {
                    console.error('Failed to copy email: ', err);
                });
        });


////nav color change with scroll
//window.addEventListener('scroll', function() {
//  var nav = document.getElementById('navbar');
//  var scrollPosition = window.scrollY;
//  var opacity = 1 - (scrollPosition / 50); // Calculate the opacity based on the scroll position
//  nav.style.backgroundColor = 'rgba(255, 255, 255, ' + opacity + ')'; // Set the background color with opacity
//});
