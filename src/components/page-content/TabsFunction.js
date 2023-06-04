import { useState } from "react";
import { Tabs, Tab, TabList, TabPanel, TabPanels, HStack, Text } from "@chakra-ui/react";

export const TabsFunction = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <Tabs variant="enclosed" align='center' onChange={handleTabChange}>
            <TabList>
                {tabs.map((item, i) => (
                    <Tab key={i}>
                        <HStack>
                        <Text>{item.label}</Text>
                        </HStack>
                    </Tab>
                ))}
            </TabList>

            <TabPanels>
                {tabs.map((item, i) => (
                <TabPanel key={i} p="0">
                    {item.content}
                </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
};
