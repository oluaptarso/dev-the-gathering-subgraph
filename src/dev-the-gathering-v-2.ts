import { BigInt } from "@graphprotocol/graph-ts";
import {
  DevTheGatheringV2,
  CardCreated,
  CardUpdated,
  OwnershipTransferred,
} from "../generated/DevTheGatheringV2/DevTheGatheringV2";
import { Card } from "../generated/schema";

const CardRarityEnum = ['COMMON','UNCOMMON','RARE','EPIC','LEGENDARY'];

export function handleCardCreated(event: CardCreated): void {
  const entity = new Card(event.params.id.toString());
  entity.externalId = event.params.externalId;
  entity.owner = event.params.owner;
  entity.rarity = CardRarityEnum[event.params.rarity];
  entity.foil = event.params.foil;
  entity.quantity = event.params.quantity;
  entity.level = event.params.level;
  entity.created = event.params.created;
  entity.createdAt = event.params.createdAt;
  entity.updatedAt = event.params.updatedAt;

  entity.save();

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.boosterPrice(...)
  // - contract.cardQuantitiesByRarity(...)
  // - contract.cards(...)
  // - contract.developers(...)
  // - contract.getMyDeveloperStatus(...)
  // - contract.owner(...)
  // - contract.updateBoosterPrice(...)
}

export function handleCardUpdated(event: CardUpdated): void {
  const entity = Card.load(event.params.id.toString());
  if (entity) {
    entity.foil = event.params.foil;
    entity.quantity = event.params.quantity;
    entity.level = event.params.level;
    entity.updatedAt = event.params.updatedAt;

    entity.save();
  }
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
