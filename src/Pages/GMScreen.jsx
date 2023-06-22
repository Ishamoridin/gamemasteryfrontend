import styled from "styled-components";
import GMScreenCampaignDisplay from "../Components/GMScreenCampaignDisplay";
import GMScreenCreationModal from "../Components/GMScreenCreationModal"
export default async function GMScreen(){

    return (
        <GMScreenWrapper>
            <GMScreenHeader />
            <GMScreenCampaignDisplay />
            <GMScreenCreationModal />
        </GMScreenWrapper>
    )
}

const GMScreenHeader = styled.h1``;
const GMScreenWrapper = styled.div``;
