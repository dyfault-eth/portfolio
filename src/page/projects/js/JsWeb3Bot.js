import { Box, Stack, Text, Center, Divider, useColorMode, useToast, IconButton } from '@chakra-ui/react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ScrollToTopButton } from '../../../components/button/ScrollToTopButton';
import { MdContentCopy } from "react-icons/md";

export const JsWeb3Bot = () => {

    const { colorMode } = useColorMode();

    const toast = useToast({
        position: 'top',
    });

    const handleCopyClick = (text) => {
        navigator.clipboard.writeText(text);
        toast({
            title: "Success",
            description: "copied to clipboard",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    const botLog = `Going to Common Brothel
Brothel Common complete. Transaction hash: 0x570b4fdba3f7804aa801cc29415b046f0b4919c10e6534822acafc10655814ec
Starting Common battle
Battle Common complete. Transaction hash: 0xffdcd3591fed160063ee7a04ce6b8fe1a91126d8042ce87b4f2a32a683a4ec91
Going to Common Brothel
Brothel Common complete. Transaction hash: 0xdda9e04a8de3febee9af5a281f3cb8f2ba02d11aaa8cc5d5390a2c57b89977da
Starting Common battle
Battle Common complete. Transaction hash: 0x8d38b4ed3a1b9c5885ec2262b29790a6f81b51372b49e03b399cae520d73fd48
Going to Common Brothel
Brothel Common complete. Transaction hash: 0xbc65cb58e8da2595f702bd831a0a8ab0563d2955adedde454097e89f6f0138eb
Starting Common battle
Battle Common complete. Transaction hash: 0xde52699985228c85f125816f87b1672d86e6aad751665174015a04ffbb5ada48
Going to Common Brothel
Brothel Common complete. Transaction hash: 0x6d764b4e14d136143396343c9e40968e100bb2b5151c75fe7e6d5d95e87b7a2f
Starting Common battle
Battle Common complete. Transaction hash: 0x5052f247af64ed8c1aa1d0db22a831218a6c1d819b46dc88d80a8482eb0c0cf9
Going to Common Brothel
Brothel Common complete. Transaction hash: 0xaeedf5799ba7b5fd5974e0fadfef5facb7c30618ee531ef2cb92f2b9004aa101
Starting Common battle
Battle Common complete. Transaction hash: 0xc4e4f487ac7ed30cbb47fd3543bc7d20a1660854a49ae214667e3143fbe20970
Going to Common Brothel
Brothel Common complete. Transaction hash: 0x6e9727362c86a058d8da9676290de2b73c17379051e4d0fc7b0f42e89855ca7d
Starting Common battle
Battle Common complete. Transaction hash: 0x063ce365728f441f4a7ce4086f54d1bb9355cc86a200e02358e47bf5002feaac
Going to Common Brothel
Brothel Common complete. Transaction hash: 0xdc90443ab1f2541ccab1af73785f0e6e7f372ddaee91e8ca5f24acaecbe07ae1
Starting Common battle
Battle Common complete. Transaction hash: 0xe58936ab7832530948e121676ccc0d66800bc9427a7de2a6642570a507d5aa84
Going to Common Brothel
Brothel Common complete. Transaction hash: 0x4fec4c1b497d7410bc406416bedfc5cec8c246fcc6b3ccc5cab230265b2df046
Starting Common battle
Battle Common complete. Transaction hash: 0x91b938734bf399ea5c83966483c7dce2beebf49be777d4c144c515e5c16bbe2a
Going to Common Brothel
Brothel Common complete. Transaction hash: 0x90b84b8a702dce43881b1a0850036e8ddc1c9c01234b091748dbf641553bc505
Starting Common battle
Battle Common complete. Transaction hash: 0xd1501d61a3b43f006b05dca118399267898d767ca4aa2a0323841152a7436feb
Going to Common Brothel
Brothel Common complete. Transaction hash: 0x406d5c782c359b55c125f8db3bf8df2b01ffcd1a80f7304373a4a6fdf4d97f42
Starting Common battle
Battle Common complete. Transaction hash: 0x1c167bd6a6ab7c6bfed7463dcebe13bcff020078adfc0a4a1d1a2a804d2ad48f
Going to Common Brothel
Brothel Common complete. Transaction hash: 0xe0e4c367936a53a2e1c12a9c4f1aa58d9dbbc3735f4f93f4af17a4bf4f05cdc9
Starting Common battle
Battle Common complete. Transaction hash: 0x21909b94b762526af13dede0c3db3c30b4383c05c432e953cce70f9011daac56
Going to Common Brothel
Brothel Common complete. Transaction hash: 0x04ee3175c657f00144fdc43075b625ad8e4a1a091e05214ff546745f46463d43
Starting Common battle
Battle Common complete. Transaction hash: 0xb74530160188271a00af210c2d302e521c1f67e0f3b1721c6a26aa1326468fd4
Going to Common Brothel
Brothel Common complete. Transaction hash: 0x5bcf117c01aefc7572597d7a95a30db2111b864ce7b496d29e81b8662646fdc1
Starting Common battle
Battle Common complete. Transaction hash: 0xd2cde37bb9c07d4f22c991f7b6e5feefd004a8cf56b601c60fc619db419e6f95
Going to Common Brothel
Brothel Common complete. Transaction hash: 0x04e70ad49fc6b56709892781f906b7fdb8dbef4112fe4038975b34a0a6cab06b
Starting Common battle
Battle Common complete. Transaction hash: 0x4e5b7f18ed3e23830d6b4e2264352a9fbbc066342c4c928dd2c3c39f31ab8ace
Going to Common Brothel
Brothel Common complete. Transaction hash: 0xe9e6682ad2ba4880310de2bada09d367db9da8f00eb1128051a5d7d0db5c4383
Starting Common battle
Battle Common complete. Transaction hash: 0x6e730d430f0bceebf3d2f108a3287fcbbf38e796c03b7f63e1bae6518fae452e
Going to Common Brothel
Brothel Common complete. Transaction hash: 0xbf786ffa4e41c0fcf9f92c6baff18ec25cedd58c989a6d384551ec993fb40d18
Starting Common battle
Battle Common complete. Transaction hash: 0xb1ba2d2b44f7cb50bac7e1e30a479201bcecd0852007b8c2c754fa170838fe04
Going to Common Brothel
Brothel Common complete. Transaction hash: 0x965aaf0638242b5b4cc0e3e7b836327ff03b37cd984e35c2d2e88eae9a4e5164
Starting Common battle
Battle Common complete. Transaction hash: 0x18eeb9fc048237cf61955e63c7766dc8275ca52fc42c0a527d860cc0de355761
Going to Common Brothel
Brothel Common complete. Transaction hash: 0x96e56e205078982e9cb53fd9be9602fac827890bfb62b54c6b071835dedab728
Starting Common battle
Battle Common complete. Transaction hash: 0xc07fd559f10fc646d7fcbf6687dc1df24e44f9486c04fc3cab9b3cfa59987877
Going to Common Brothel
Brothel Common complete. Transaction hash: 0x8fd40d7c1d46afd6435b1a2cf3128a503c39949900a20f10a5cb5043bfc70316
Starting Common battle
Battle Common complete. Transaction hash: 0x4204d4ed30e72908b381a7dcf7e191d292578df342ad9f89e4a07f17d53b8bea
Going to Common Brothel
Brothel Common complete. Transaction hash: 0xa8e0f070813d9680399648ec2c8aeccdb5a6e487d0480a101c68db1cbec6fc4f
---Your character need to go to rare battle--- 
id : 815
battle remaining : 78
level of your character : 32
Going to Common Brothel
Brothel Common complete. Transaction hash: 0x5cceda9fbcddbe0c797824c0636d26ceef1e44b6fc1ae9d105961847edca1837
Starting Common battle
Battle Common complete. Transaction hash: 0x82a605ebdb1ed9e7d38015f7cacaf76ea77cc10c751da9a4acb85710c01114d7
Going to Common Brothel
Brothel Common complete. Transaction hash: 0xa7333caabacafe8aa21e89a94956e99be8ee6e5377eea5629d7bf4ceaa8de9f2
Starting Common battle
Battle Common complete. Transaction hash: 0x8c75d2ad4651371970c0e973d9b975143cd5788f1289b698852635dbf141f8fb
---Your character need to go to rare battle--- 
id : 810
battle remaining : 76
level of your character : 31
Going to Common Brothel
Brothel Common complete. Transaction hash: 0x99867ad66b618b672345b5acf455e5e409deb2ac90fc959ae134b35d0086ecee
Starting Common battle
Battle Common complete. Transaction hash: 0x46b333fd03b46892e42d07eb7387cbbce39b7c80a06a681a574feda807ab76c4
Going to Common Brothel
Brothel Common complete. Transaction hash: 0xf506a84c69195468089d0ddb4ade9153795423a1bdf6cad4a736c87b1500478f
Starting Common battle
Battle Common complete. Transaction hash: 0xa88faacd914eaf7d62b45901eb7fe11a7ff37a999efd0c01e002ac38d939b8c9
Going to Common Brothel
Brothel Common complete. Transaction hash: 0xd02ca38849ca1c0dc70bdfb5fe8d15fd477027bab18e114beb89b26441a3ce83
Starting Common battle
Battle Common complete. Transaction hash: 0x65b8eff9de4557c37274fbb130cc5858856ddae51f3214f233ed6a6de9aacda4
Going to Common Brothel
Brothel Common complete. Transaction hash: 0x3f96c6c952c4454817d10eb598285eb83a8aad9c1aea64663535aa6b0cbef209
---Your character need to go to rare battle--- 
id : 832
battle remaining : 72
level of your character : 32
---Your character need to go to rare battle--- 
id : 833
battle remaining : 72
level of your character : 31
stop common battle all you pirate is going to rare battle
Going to Rare Brothel
Brothel Common complete. Transaction hash: 0xa362ae74ed1111b0594f66ff04e9200263bef6359c1ef8b5882ba18ec1f1f608
Starting Rare battle
Battle Common complete. Transaction hash: 0x50a605458e1cc0afc70ecceefc4162d01a01f6649351249e0fed68c0996ff7d2
Going to Rare Brothel
Brothel Common complete. Transaction hash: 0x0a0997aa0b7e413afed165538a4aad21cb62ef9ebc77ed1bf9e9901cf44c5fa4
Starting Rare battle
Battle Common complete. Transaction hash: 0x53d22d2eb085273c606798ecdc4eb37284ddfd2bce8b73f39e359d564a16036d
Going to Rare Brothel
Brothel Common complete. Transaction hash: 0x1f1842824a39d37b3f2c0fa13dc20f3d1599a68bcba6b034aba276dcbc638837
Starting Rare battle
Battle Common complete. Transaction hash: 0x08044413026a7d194c7f9d51a3cff9f627b687ab0d4610e3d280e74266f4a62e
Going to Rare Brothel
Brothel Common complete. Transaction hash: 0xa649b1837a9a3f49f0b58e9a3666b3a6b2fbeeab7b085389f7022f9e140e43ab
Starting Rare battle
Battle Common complete. Transaction hash: 0x3d3d2fbc8f6a283d72f6516fc09f0d3a6b981b9959ef598fabea359c5add0ce1
Going to Rare Brothel
Brothel Common complete. Transaction hash: 0x70be5dd5535f934f6a50931c16a490486784850afa764009edcbc8d800d69f84
Starting Rare battle
Battle Common complete. Transaction hash: 0xca8ac12f49168e76b95394bc2a8b643979b38c1cfea09f0586583164e98e7103`

    const content =
    <Box w={['375px', null, '650px', '750px', '1000px', '1250px']}>
            <Stack>

                <Stack>
                    <Center>
                        <Text className="font-2" fontSize='24px'>Web3 Bot</Text>
                    </Center>
                    <Divider />
                </Stack>

                <Center>
                <Text>Project presentation : </Text>
                </Center>

                <Text textAlign='center'>
                    The purpose of this project is to automate every step of the future FLAG project game, 
                    currently in the testnet phase (testnet = on a test blockchain that does not involve real money). 
                    For this project, I am using Node.js with the web3js library, similar to what I have done in other projects, 
                    except that this project is the first one where I am performing transactions on the blockchain using a bot.
                </Text>

                <Text textAlign='center'>
                    Currently, this bot checks the level of characters and their drink status, and then sends the characters to battle. 
                    If the characters are at level 1, they are sent to a common brothel that provides them with a bonus, and then to a common battle. 
                    In each cycle, the level of the characters and the drink reserve are checked. When they reach level 31 or higher, 
                    they are placed in a waiting array while the others continue with common battles until they reach level 31. 
                    Once all of them are at level 31 or higher, they move to rare brothel and rare battles.
                </Text>

                <Text textAlign='center'>Here are logs generated by the bot.</Text>

                <Box position='relative'>
                    <SyntaxHighlighter language="" style={colorMode === 'dark' ? atomDark : solarizedlight} customStyle={{fontSize: '14px'}}>
                        {botLog}
                    </SyntaxHighlighter>
                    <IconButton onClick={() => handleCopyClick(botLog)} position="absolute" top="16px" right="8px" size="sm" icon={<MdContentCopy />} />
                </Box>
            </Stack>
        </Box>

    return(
        <Center>
            {content}

            <ScrollToTopButton />
        </Center>
    )
}