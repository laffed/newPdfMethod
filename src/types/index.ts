import AWS from 'aws-sdk';

//TODO Dev ClaimState will change, need to update after production app push

export type PhotoTuple = [PhotoBuffObj, PhotoBuffObj | false, PhotoBuffObj | false, PhotoBuffObj | false];

export type RiskEntryObj = {
  uri: string;
  timeStamp: number;
  formattedDate: string;
  description: string;
  s3Key: string;
}

export type PhotoObj = {
  key: string;
  label: string;
  location: 'exterior' | 'interior' | 'misc';
  diagram: string;
  has: boolean;
  required: boolean;
  entries: RiskEntryObj[];
}

export type PhotoState = {
  [key: string]: PhotoObj
}

export type PhotoBuffObj = {
  label: string;
  description: string;
  formattedDate: string;
  base64Str: any;
}

export type SignatureObj = {
  uri: string;
  timeStamp: number;
  formattedDate: string;
  s3Key: string;
}

export type Signatures = {
  nonWaiverInsuredSignature: SignatureObj;
  nonWaiverAdjusterSignature: SignatureObj;
  advPaymentSignatureInsured: SignatureObj;
  advPaymentSignatureAdjuster: SignatureObj;
  handbookInsuredSignature: SignatureObj;
  handbookAdjusterSignature: SignatureObj;
  authorizedRepSignature: SignatureObj;
  initialsConfirmAddress: SignatureObj;
  initialsConfirmMortgagee: SignatureObj;
}

export type PriorLossObj = {
  id: string;
  timestamp: number;
  formattedDate: string;
  insuredAtLoss: boolean;
  repairs: boolean;
  lossAmount: string;
}

export type CertificationObj = {
  state: string;
  licenseNumber: string;
  expDate: string
}

export type PDFObject = {
  name: string;
  uri: string;
  s3Key: string;
  docStatus: string;
}

export type UnderwritingState = {
  "insuredFirstName": string;
  "insuredLastName": string;
  "mortgageeName": string;
  "adjusterFullName": string;
  "claimType": string;
  "lossType": string;
  "lossDate": number;
  "occupancy": string;
  "typeOfBuilding": string;
  "hasBasement": boolean;
  "buildingElevated": boolean;
  "residencyType": string;
  "floorCount": string;
  "floorsOccupiedByInsured": string;
  "lossStreet1": string;
  "lossStreet2": string;
  "lossCity": string;
  "lossStateName": string;
  "lossZip": string;
}


export type PDFState = {
  underwritingReport: PDFObject;
  floodLossQuestionnaire: PDFObject;
  inspectionReport: PDFObject;
  preliminaryReport: PDFObject;
  prelimDiagrams: PDFObject;
  prelimPhotos: PDFObject;
  advancePaymentRequest: PDFObject;
  handbookSignature: PDFObject;
  surveyorRequest: PDFObject;
  cpaRequest: PDFObject;
  prelimDamageAssessment: PDFObject;
  nonWaiverAgreement: PDFObject;
  engineerRequest: PDFObject;
  salvorRequest: PDFObject;
}

export type ClaimState = {
  version: number;
  sha1: string;
  versionsList: number[];
  claimid: string;
  claimNumber: string;
  policyNumber: string;
  firmDate: number;
  postFirm: number;
  policyStartDate: number;
  policyEndDate: number;
  subcatNumber: string;
  RNFSPathPrefix: string;
  floodControlNumber: string;
  adjusterId: string;
  adjusterFullName: string;
  adjusterPhoneMobile: string;
  adjusterPhoneWork: string;
  insuredFirstName: string;
  insuredLastName: string;
  insuredEmail: string;
  insuredWorkPhone: string;
  insuredPreferredPhone: string;
  company: string;
  lossType: string;
  lossDate: number;
  claimType: string;
  mortgageVerified: boolean;
  ercv: number;
  acv: number;
  carrier: string;
  claimStatus: string;
  constructionDate: number;
  inspectionDate: number;
  coverageA: number;
  coverageB: number;
  deductibleA: string;
  deductibleB: string;
  nonWaiver: boolean;
  nonWaiverDescription: string;
  nonWaiverDay: string;
  nonWaiverMonth: string;
  nonWaiverYear: string;
  occupancy: string;
  residencyType: string;
  insuredNameCorrect: boolean;
  updatedNameReason: string;
  insuredPresent: boolean;
  insuredIsRepresented: boolean;
  insuredRepresentativeName: string;
  insuredRepresentativeAddress: string;
  insuredRepresentativePhone: string;
  hasDetachedGarage: boolean;
  hasAppurtenantStructure: boolean;
  typeOfBuilding: string;
  mobileHomeMake: string;
  mobileHomeModel: string;
  mobileHomeSerial: string;
  foundationStructure: string;
  foundationPilesType: string;
  otherPilesMaterial: string;
  foundationPiersType: string[];
  otherPierMaterial: string;
  foundationWallsType: string[];
  otherWallMaterial: string;
  exteriorWallStructure: string[];
  otherWallStructure: string;
  exteriorWallSurfaceTreatment: string[];
  otherExteriorSurfaceTreatment: string;
  isUnderConstruction: string;
  foundationAreaEnclosure: string;
  hasBasement: boolean;
  basementType: string;
  basementHeightInches: string;
  determineElevationGrades: boolean;
  buildingElevated: boolean;
  priorConditionOfBuilding: string;
  exteriorElevationPhotos: string[];
  wasThereFlooding: boolean;
  floodWaterType: string;
  isFloodWaterTypeSewage: boolean;
  causeOfLoss: string[];
  floodCharacteristics: string[];
  floodAssociatedWithFloodControl: boolean;
  floodAssociatedDesc: string;
  dateWaterEntered: number;
  dateWaterReceded: number;
  timeFlooded: {
    days: number;
    hours: number;
    minutes: number;
  };
  otherThanNaturalCauseContribute: boolean;
  otherThanNaturalDesc: string;
  waterHeightMainBuildingExtInches: string;
  waterHeightDetachedGarageExtInches: string;
  waterHeightMainBuildingIntInches: string;
  waterHeightDetachedGarageIntInches: string;
  nearestBodyOfWater: string;
  distanceFromBodyOfWaterFeet: string;
  floorCount: string;
  isSplitLevel: boolean;
  floorsOccupiedByInsured: string;
  basementFloodproofed: boolean;
  priorConditionOfContents: string;
  contentsClassification: string;
  contentsLocated: string;
  hasTitleVerified: boolean;
  sourceOfVerification: string;
  hasAuthorizedRepresentative: boolean;
  authorizedRepName: string;
  authorizedRepEmail: string;
  insuredHiredMitigationContractor: boolean;
  mitigationContactName: string;
  mitigationContactAddress: string;
  mitigationContactPhone: string;
  hasOtherInvolvedParties: boolean;
  otherInvolvedPartiesDesc: string;
  GPTypeOfBuilding: string;
  GPTypeOfBuildingOtherDesc: string;
  GPMultipleBuildings: boolean;
  GPVerifiedBuilding: boolean;
  GPOtherInsurance: string[];
  GPExcessPolicyLimits: string;
  GPLiabilityPolicyLimits: string;
  GPDamageDesc: string;
  GPHasLease: boolean;
  GPHasDocOfOwnership: boolean;
  GPDocsListOwnership: boolean;
  GPDocsTiedOwnership: boolean;
  GPPersonalProperty: boolean;
  GPStockHasBoxesOpen: boolean;
  GPStockVerifiedDamage: boolean;
  GPStockHasPhysicalDamage: boolean;
  GPMerchHasBoxesOpen: boolean;
  GPMerchVerifiedDamage: boolean;
  GPMerchHasPhysicalDamage: boolean;
  GPAuthorizedRep: string;
  GPHasDocAuthorizingRep: boolean;
  GPAccessToInvoices: string;
  GPAccessToRepairReceipts: string;
  GPAccessToStockInventoryRecords: string;
  GPInspectedWith: string;
  GPTenants: string; //maybe string[]
  GPAccessRep: string;
  GPOwnerOfBuilding: string;
  GPBusinessOwner: string;
  GPContentsOwner: string;
  reservesBuildingReserve: number;
  reservesContentsReserve: number;
  coverageVerifiedFrom: string;
  emergencyOrRegulaFloodProgram: string;
  advPaymentRequest: string;
  advPaymentRequestNoReason: string;
  advPaymentRequestOtherReason: string;
  advPaymentRequestBuildingValue: number;
  advPaymentRequestContentsValue: number;
  selectiveAPRContentsValue: number;
  isOwnerOfProperty: boolean;
  propertyOwnerName: string;
  propertyOwnerAddress: string;
  propertyOwnerDBA: string;
  hasMajorImprovements: boolean;
  improvementsDetails: string;
  improvementsValue: string;
  isCondoUnit: boolean;
  ownerHasCondoDocs: boolean;
  acknowledgeRecentAppraisal: boolean;
  isCurrentAddress: boolean;
  principleStreet1: string;
  principleStreet2: string;
  principleCity: string;
  principleStateName: string;
  principleZip: string;
  lossStreet1: string;
  lossStreet2: string;
  lossCity: string;
  lossStateName: string;
  lossZip: string;
  mortgagePaidOff: boolean;
  mortgagePaidOffYear: string;
  payOffLetter: string;
  excessFloodCoverageForBuilding: boolean;
  excessFloodCoverageForBuildingCarrier: string;
  excessFloodCoverageForContents: boolean;
  excessFloodCoverageForContentsCarrier: string;
  hasPriorLoss: boolean;
  priorLossArr: PriorLossObj[];
  usingAGeneralContractor: boolean;
  generalContractorName: string;
  generalContractorAddress: string;
  generalContractorLocation: string;
  generalContractorPhone: string;
  generalContractorLicense: string;
  hasOtherInsurance: boolean;
  nameOfOtherInsurance: string;
  otherProvidesFloodCoverage: boolean;
  acknowledgeOtherInsurance: boolean;
  acknowledgeVerifyMortgage: boolean;
  purchaseDate: number;
  assignedDate: number;
  contactDate: number;
  isCurrentMortgagee: boolean;
  mortgageeName: string
  mortgageeAddress: string;
  isARentalProperty: boolean;
  rentalContentOwnership: boolean;
  riskPurchased: number; //date
  erosionFound: boolean;
  erosionDescription: string;
  insuredClaimingBuildingItemsNotCovered: boolean;
  insuredClaimingBuildingItemsNotCoveredDesc: string;
  insuredClaimingBuildingContentsNotCovered: boolean;
  insuredClaimingBuildingContentsNotCoveredDesc: string;
  estDepreciationPercent: number;
  depActualCashValue: string;
  depValue: string;
  insuredClaimingStructuralDamage: boolean;
  insuredClaimingStructuralDamageDesc: string;
  adjusterAgreesStructuralDamage: boolean;
  adjusterAgreesStructuralDamageDesc: string;
  hasSalvageValueDesc: string;
  accountantRequired: boolean;
  accountantRequiredDesc: string;
  incorrectConstructionDetails: boolean;
  incorrectConstructionDetailsDesc: string;
  policyDiscrepancies: boolean;
  policyDiscrepanciesDesc: string;
  adjusterNotedIssues: boolean;
  adjusterNotedIssuesDesc: string;
  inspectionAssignmentDesc: string;
  originOfFloodDesc: string;
  inspectionScopeDesc: string;
  needsCPA: boolean;
  needsSalvor: boolean;
  needsSurveyor: boolean;
  needsEngineer: boolean;
  certifications: CertificationObj[];
  signatures: Signatures;
  photos: PhotoState;
  pdfs: PDFState;
  docStatuses: {approved: number; pending: number; rejected: number}
  underwriting: UnderwritingState;
  underwritingDiffList: Array<keyof UnderwritingState>;
  newUnderwritingPDFSent: boolean;
  formattedDates: {
    firmDate: string;
    policyStartDate: string;
    policyEndDate: string;
    lossDate: string;
    constructionDate: string;
    inspectionDate: string;
    dateWaterEntered: string;
    dateWaterReceded: string;
    timeWaterEntered: {
      time: string;
      meridian: string;
    };
    timeWaterReceded: {
      time: string;
      meridian: string;
    };
    purchaseDate: string;
    assignedDate: string;
    contactDate: string;
    riskPurchased: string
  }
}