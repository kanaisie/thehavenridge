import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import {
faPeopleGroup,
faUserNurse,
faPills,

faCarSide,
faHouseChimney,
} from '@fortawesome/free-solid-svg-icons';


export const serviceIconMap: Record<string, IconDefinition> = {
'companionship': faPeopleGroup,
'personal-care': faUserNurse,
'medication': faPills,

'transport': faCarSide,
'live-in': faHouseChimney,
};


export function iconForService(slug: string): IconDefinition {
return serviceIconMap[slug] ?? faHouseChimney;
}