export interface IState {
  elections: IElection[] | null;
  currentElectionId: string;
  voterInfo: IVoterInfo | null;
  representativesInfo: IRepresentativeInfo | null;
}

export interface IElection {
  id: string;
  name: string;
  electionDay: string;
  ocdDivisionId: string;
}

export type SNSType = "Facebook" | "Twitter" | "YouTube";

export interface IVoterInfo {
  normalizedInput: {
    locationName: string;
    line1: string;
    line2: string;
    line3: string;
    city: string;
    state: string;
    zip: string;
  };
  pollingLocations: [
    {
      address: {
        locationName: string;
        line1: string;
        line2: string;
        line3: string;
        city: string;
        state: string;
        zip: string;
      };
      notes: string;
      pollingHours: string;
      name: string;
      voterServices: string;
      startDate: string;
      endDate: string;
      latitude: number;
      longitude: number;
      sources: [
        {
          name: string;
          official: boolean;
        }
      ];
    }
  ];
  earlyVoteSites: [
    {
      address: {
        locationName: string;
        line1: string;
        line2: string;
        line3: string;
        city: string;
        state: string;
        zip: string;
      };
      notes: string;
      pollingHours: string;
      name: string;
      voterServices: string;
      startDate: string;
      endDate: string;
      latitude: number;
      longitude: number;
      sources: [
        {
          name: string;
          official: boolean;
        }
      ];
    }
  ];
  dropOffLocations: [
    {
      address: {
        locationName: string;
        line1: string;
        line2: string;
        line3: string;
        city: string;
        state: string;
        zip: string;
      };
      notes: string;
      pollingHours: string;
      name: string;
      voterServices: string;
      startDate: string;
      endDate: string;
      latitude: number;
      longitude: number;
      sources: [
        {
          name: string;
          official: boolean;
        }
      ];
    }
  ];
  contests: [
    {
      type: string;
      primaryParty: string;
      electorateSpecifications: string;
      special: string;
      ballotTitle: string;
      office: string;
      level: [string];
      roles: [string];
      district: {
        name: string;
        scope: string;
        id: string;
      };
      numberElected: number;
      numberVotingFor: number;
      ballotPlacement: number;
      candidates: [
        {
          name: string;
          party: string;
          candidateUrl: string;
          phone: string;
          photoUrl: string;
          email: string;
          orderOnBallot: number;
          channels: [
            {
              type: SNSType;
              id: string;
            }
          ];
        }
      ];
      referendumTitle: string;
      referendumSubtitle: string;
      referendumUrl: string;
      referendumBrief: string;
      referendumText: string;
      referendumProStatement: string;
      referendumConStatement: string;
      referendumPassageThreshold: string;
      referendumEffectOfAbstain: string;
      referendumBallotResponses: [string];
      sources: [
        {
          name: string;
          official: boolean;
        }
      ];
    }
  ];
  state: [
    {
      name: string;
      electionAdministrationBody: {
        name: string;
        electionInfoUrl: string;
        electionRegistrationUrl: string;
        electionRegistrationConfirmationUrl: string;
        electionNoticeText: string;
        electionNoticeUrl: string;
        absenteeVotingInfoUrl: string;
        votingLocationFinderUrl: string;
        ballotInfoUrl: string;
        electionRulesUrl: string;
        voter_services: [string];
        hoursOfOperation: string;
        correspondenceAddress: {
          locationName: string;
          line1: string;
          line2: string;
          line3: string;
          city: string;
          state: string;
          zip: string;
        };
        physicalAddress: {
          locationName: string;
          line1: string;
          line2: string;
          line3: string;
          city: string;
          state: string;
          zip: string;
        };
        electionOfficials: [
          {
            name: string;
            title: string;
            officePhoneNumber: string;
            faxNumber: string;
            emailAddress: string;
          }
        ];
      };
      sources: [
        {
          name: string;
          official: boolean;
        }
      ];
    }
  ];
  mailOnly: boolean;
}

export interface IRepresentativeInfo {
  kind: "civicinfo#representativeInfoResponse";
  normalizedInput: {
    locationName: string;
    line1: string;
    line2: string;
    line3: string;
    city: string;
    state: string;
    zip: string;
  };
  divisions: {
    [key: string]: {
      name: string;
      alsoKnownAs: [string];
      officeIndices: number[];
    };
  };
  offices: [
    {
      name: string;
      divisionId: string;
      levels: [string];
      roles: [string];
      sources: [
        {
          name: string;
          official: boolean;
        }
      ];
      officialIndices: number[];
    }
  ];
  officials: [
    {
      name: string;
      address: [
        {
          locationName: string;
          line1: string;
          line2: string;
          line3: string;
          city: string;
          state: string;
          zip: string;
        }
      ];
      party: string;
      phones: [string];
      urls: [string];
      photoUrl: string;
      emails: [string];
      channels: [
        {
          type: SNSType;
          id: string;
        }
      ];
    }
  ];
}
