import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CardCreated,
  CardUpdated,
  OwnershipTransferred
} from "../generated/DevTheGatheringV2/DevTheGatheringV2"

export function createCardCreatedEvent(
  id: BigInt,
  externalId: BigInt,
  owner: Address,
  rarity: i32,
  foil: boolean,
  quantity: BigInt,
  level: BigInt,
  created: boolean,
  createdAt: BigInt,
  updatedAt: BigInt
): CardCreated {
  let cardCreatedEvent = changetype<CardCreated>(newMockEvent())

  cardCreatedEvent.parameters = new Array()

  cardCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  cardCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "externalId",
      ethereum.Value.fromUnsignedBigInt(externalId)
    )
  )
  cardCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  cardCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "rarity",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(rarity))
    )
  )
  cardCreatedEvent.parameters.push(
    new ethereum.EventParam("foil", ethereum.Value.fromBoolean(foil))
  )
  cardCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )
  cardCreatedEvent.parameters.push(
    new ethereum.EventParam("level", ethereum.Value.fromUnsignedBigInt(level))
  )
  cardCreatedEvent.parameters.push(
    new ethereum.EventParam("created", ethereum.Value.fromBoolean(created))
  )
  cardCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "createdAt",
      ethereum.Value.fromUnsignedBigInt(createdAt)
    )
  )
  cardCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "updatedAt",
      ethereum.Value.fromUnsignedBigInt(updatedAt)
    )
  )

  return cardCreatedEvent
}

export function createCardUpdatedEvent(
  id: BigInt,
  externalId: BigInt,
  owner: Address,
  rarity: i32,
  foil: boolean,
  quantity: BigInt,
  level: BigInt,
  created: boolean,
  createdAt: BigInt,
  updatedAt: BigInt
): CardUpdated {
  let cardUpdatedEvent = changetype<CardUpdated>(newMockEvent())

  cardUpdatedEvent.parameters = new Array()

  cardUpdatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  cardUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "externalId",
      ethereum.Value.fromUnsignedBigInt(externalId)
    )
  )
  cardUpdatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  cardUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "rarity",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(rarity))
    )
  )
  cardUpdatedEvent.parameters.push(
    new ethereum.EventParam("foil", ethereum.Value.fromBoolean(foil))
  )
  cardUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )
  cardUpdatedEvent.parameters.push(
    new ethereum.EventParam("level", ethereum.Value.fromUnsignedBigInt(level))
  )
  cardUpdatedEvent.parameters.push(
    new ethereum.EventParam("created", ethereum.Value.fromBoolean(created))
  )
  cardUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "createdAt",
      ethereum.Value.fromUnsignedBigInt(createdAt)
    )
  )
  cardUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "updatedAt",
      ethereum.Value.fromUnsignedBigInt(updatedAt)
    )
  )

  return cardUpdatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
