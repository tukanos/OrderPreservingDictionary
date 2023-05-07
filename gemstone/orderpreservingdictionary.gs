! Class Declarations
! Generated file, do not Edit

doit
(Collection
	indexableSubclass: 'StandardOrderedDictionary'
	instVarNames: #( dictionary orderedKeys )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #()
)
		category: 'Collections-OrderPreservingDictionary-Core';
		comment: 'This class is a dictionary that uses key insertion order when enumerating, printing, or returing collections of keys/values/associations, but not when testing for equality.

Insertion, updating, and inclusion testing have O(1) complexity while removing has O(n) worst-case.';
		immediateInvariant.
true.
%

removeallmethods StandardOrderedDictionary
removeallclassmethods StandardOrderedDictionary

doit
(StandardOrderedDictionary
	indexableSubclass: 'OrderPreservingDictionary'
	instVarNames: #( defaultValue )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #()
)
		category: 'Collections-OrderPreservingDictionary-Core';
		comment: 'An order-preserving dictionary that returns a configurable default value (nil by default) when an absent key or value is requested from it rather than raising an exception.';
		immediateInvariant.
true.
%

removeallmethods OrderPreservingDictionary
removeallclassmethods OrderPreservingDictionary

doit
(OrderPreservingDictionary
	indexableSubclass: 'OrderPreservingIdentityDictionary'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #()
)
		category: 'Collections-OrderPreservingDictionary-Core';
		comment: 'An IdentityDictionary version that uses == instead of = for key comparing.';
		immediateInvariant.
true.
%

removeallmethods OrderPreservingIdentityDictionary
removeallclassmethods OrderPreservingIdentityDictionary

doit
(StandardOrderedDictionary
	indexableSubclass: 'OrderPreservingStringDictionary'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #()
)
		category: 'Collections-OrderPreservingDictionary-Core';
		comment: 'An order-preserving dictionary for strings that returns empty strings instead of raising errors when absent keys/values are accessed.';
		immediateInvariant.
true.
%

removeallmethods OrderPreservingStringDictionary
removeallclassmethods OrderPreservingStringDictionary

doit
(OrderPreservingStringDictionary
	indexableSubclass: 'OrderPreservingIdentityStringDictionary'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #()
)
		category: 'Collections-OrderPreservingDictionary-Core';
		comment: 'An IdentityDictionary version that uses == instead of = for key comparing.';
		immediateInvariant.
true.
%

removeallmethods OrderPreservingIdentityStringDictionary
removeallclassmethods OrderPreservingIdentityStringDictionary

doit
(StandardOrderedDictionary
	indexableSubclass: 'StandardOrderedIdentityDictionary'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #()
)
		category: 'Collections-OrderPreservingDictionary-Core';
		comment: 'An IdentityDictionary version that uses == instead of = for key comparing.';
		immediateInvariant.
true.
%

removeallmethods StandardOrderedIdentityDictionary
removeallclassmethods StandardOrderedIdentityDictionary

doit
(TestCase
	subclass: 'StandardOrderedDictionaryTest'
	instVarNames: #( nonIdentityOrderedAssociations identityOrderedAssociations )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #()
)
		category: 'Collections-OrderPreservingDictionary-Tests-Base';
		comment: 'Unit tests for StandardOrderedDictionary';
		immediateInvariant.
true.
%

removeallmethods StandardOrderedDictionaryTest
removeallclassmethods StandardOrderedDictionaryTest

doit
(StandardOrderedDictionaryTest
	subclass: 'OrderPreservingDictionaryTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #()
)
		category: 'Collections-OrderPreservingDictionary-Tests-Base';
		comment: 'Unit tests for OrderPreservingDictionary';
		immediateInvariant.
true.
%

removeallmethods OrderPreservingDictionaryTest
removeallclassmethods OrderPreservingDictionaryTest

doit
(OrderPreservingDictionaryTest
	subclass: 'OrderPreservingIdentityDictionaryTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #()
)
		category: 'Collections-OrderPreservingDictionary-Tests-Base';
		comment: 'Unit tests for OrderPreservingIdentityDictionary';
		immediateInvariant.
true.
%

removeallmethods OrderPreservingIdentityDictionaryTest
removeallclassmethods OrderPreservingIdentityDictionaryTest

doit
(StandardOrderedDictionaryTest
	subclass: 'OrderPreservingStringDictionaryTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #()
)
		category: 'Collections-OrderPreservingDictionary-Tests-Base';
		comment: 'Unit tests for OrderPreservingStringDictionary';
		immediateInvariant.
true.
%

removeallmethods OrderPreservingStringDictionaryTest
removeallclassmethods OrderPreservingStringDictionaryTest

doit
(OrderPreservingStringDictionaryTest
	subclass: 'OrderPreservingIdentityStringDictionaryTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #()
)
		category: 'Collections-OrderPreservingDictionary-Tests-Base';
		comment: 'Unit tests for OrderPreservingIdentityStringDictionary';
		immediateInvariant.
true.
%

removeallmethods OrderPreservingIdentityStringDictionaryTest
removeallclassmethods OrderPreservingIdentityStringDictionaryTest

doit
(StandardOrderedDictionaryTest
	subclass: 'StandardOrderedIdentityDictionaryTest'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #()
)
		category: 'Collections-OrderPreservingDictionary-Tests-Base';
		comment: 'Unit tests for StandardOrderedIdentityDictionary';
		immediateInvariant.
true.
%

removeallmethods StandardOrderedIdentityDictionaryTest
removeallclassmethods StandardOrderedIdentityDictionaryTest

! Class implementation for 'StandardOrderedDictionary'

!		Class methods for 'StandardOrderedDictionary'

category: 'inspecting'
classmethod: StandardOrderedDictionary
inspectorClass
	^ Dictionary inspectorClass
%

category: 'instance creation'
classmethod: StandardOrderedDictionary
new
	^ self new: 10
%

category: 'instance creation'
classmethod: StandardOrderedDictionary
new: aCapacity
	^ self basicNew initialize: aCapacity
%

category: 'instance creation'
classmethod: StandardOrderedDictionary
newFrom: anAssociationCollection
	| newDictionary |

	newDictionary := self new: anAssociationCollection size.
	anAssociationCollection associationsDo: [:each |
		newDictionary
			at: each key
			put: each value].
	^ newDictionary.
%

category: 'instance creation'
classmethod: StandardOrderedDictionary
newFromPairs: aSequenceableCollection
	| newDictionary |

	newDictionary := self new: (aSequenceableCollection size / 2) floor.
	1 to: aSequenceableCollection size - 1 by: 2 do: [:i |
		newDictionary
			at: (aSequenceableCollection at: i)
			put: (aSequenceableCollection at: i + 1)].
	^ newDictionary.
%

!		Instance methods for 'StandardOrderedDictionary'

category: 'comparing'
method: StandardOrderedDictionary
= anObject
	"Returns true if the receiver and argument are identical, or if they
	are both some kind of order-preserving dictionary and if they have
	the same associations regardless of order."

	self == anObject
		ifTrue: [^ true].

	(anObject isOrderPreservingDictionary
		and: [self isIdentityDictionary = anObject isIdentityDictionary
			and: [self size = anObject size]])
		ifFalse: [^ false].

	dictionary associationsDo: [:each |
		(anObject at: each key ifAbsent: [^ false]) = each value
			ifFalse: [^ false]].
	^ true.
%

category: 'adding'
method: StandardOrderedDictionary
add: anAssociation
	| oldSize |

	oldSize := dictionary size.
	dictionary add: anAssociation.
	dictionary size > oldSize
		ifTrue: [
			orderedKeys size > oldSize
				ifFalse: [self growOrderedKeys].
			orderedKeys at: oldSize + 1 put: anAssociation key].
	^ anAssociation.
%

category: 'adding'
method: StandardOrderedDictionary
addAll: anAssociationCollection
	"Since Collection implements #associationsDo:, this method can accept
	any collection of associations including Arrays and OrderedCollections"

	anAssociationCollection associationsDo: [:each | self add: each].
	^ anAssociationCollection.
%

category: 'accessing'
method: StandardOrderedDictionary
associationAt: aKey
	^ dictionary associationAt: aKey
%

category: 'accessing'
method: StandardOrderedDictionary
associationAt: aKey ifAbsent: aBlock
	^ dictionary
		associationAt: aKey
		ifAbsent: aBlock
%

category: 'accessing'
method: StandardOrderedDictionary
associationAt: aKey ifPresent: aBlock
	"Squeak and GS do not have #associationAt:ifPresent: so it
	is reimplemented for portability"
	^ aBlock cull:
		(dictionary
			associationAt: aKey
			ifAbsent: [^ nil])
%

category: 'enumerating'
method: StandardOrderedDictionary
associationsDo: aBlock
	self keysDo: [:each |
		aBlock value: (self associationAt: each)]
%

category: 'enumerating'
method: StandardOrderedDictionary
associationsSelect: aBlock
	^ self speciesNewFrom: (self associations select: aBlock)
%

category: 'accessing'
method: StandardOrderedDictionary
at: aKey
	^ dictionary at: aKey
%

category: 'accessing'
method: StandardOrderedDictionary
at: aKey ifAbsent: aBlock
	^ dictionary
		at: aKey
		ifAbsent: aBlock
%

category: 'accessing'
method: StandardOrderedDictionary
at: aKey ifAbsentPut: aBlock
	^ self
		at: aKey
		ifAbsent: [
			self
				at: aKey
				put: aBlock value]
%

category: 'accessing'
method: StandardOrderedDictionary
at: aKey ifPresent: aBlock
	"Squeak and GS don't use #cull: for the ifPresent:
	block, so it is reimplemented for portability"
	^ aBlock cull:
		(self
			at: aKey
			ifAbsent: [^ nil])
%

category: 'accessing'
method: StandardOrderedDictionary
at: aKey ifPresent: aPresentBlock ifAbsent: anAbsentBlock
	"Squeak and GS don't use #cull: for the ifPresent:
	block, so it is reimplemented for portability"
	self
		at: aKey
		ifPresent: [:value | ^ aPresentBlock cull: value].
	^ anAbsentBlock value.
%

category: 'accessing'
method: StandardOrderedDictionary
at: aKey put: aValue
	| oldSize |

	oldSize := dictionary size.
	dictionary
		at: aKey
		put: aValue.
	dictionary size > oldSize
		ifTrue: [
			orderedKeys size > oldSize
				ifFalse: [self growOrderedKeys].
			orderedKeys at: oldSize + 1 put: aKey].
	^ aValue.
%

category: 'accessing'
method: StandardOrderedDictionary
capacity
	^ dictionary capacity
%

category: 'enumerating'
method: StandardOrderedDictionary
collect: aBlock
	^ self speciesNewFrom:
		(self associations collect: [:each |
			each key -> (aBlock value: each value)])
%

category: 'copying'
method: StandardOrderedDictionary
copyEmpty
	"Squeak and GS don't have Collection>>#copyEmpty:, so it is
	reimplemented for portability"
	^ self species new
%

category: 'private'
method: StandardOrderedDictionary
dictionary
	^ dictionary
%

category: 'accessing'
method: StandardOrderedDictionary
dictionaryClass
	^ Dictionary
%

category: 'enumerating'
method: StandardOrderedDictionary
do: aBlock
	self valuesDo: aBlock
%

category: 'private'
method: StandardOrderedDictionary
errorInvalidIndex: anIndex
	"Squeak and GS do not have SubscriptOutOfBounds, so Error is used
	for portability"
	Error signal: 'Invalid index: ', anIndex printString
%

category: 'private'
method: StandardOrderedDictionary
errorValueNotFound: aValue
	"Squeak and GS do not have ValueNotFound, so Error is used
	for portability"
	Error signal: 'Value not found'
%

category: 'private'
method: StandardOrderedDictionary
growOrderedKeys
	orderedKeys :=
		(Array new: ((orderedKeys size * 1.5) asInteger max: 10))
			replaceFrom: 1
			to: orderedKeys size
			with: orderedKeys
			startingAt: 1.
%

category: 'comparing'
method: StandardOrderedDictionary
hash
	^ dictionary hash
%

category: 'accessing'
method: StandardOrderedDictionary
identityIndexOfKey: aKey
	^ self
		identityIndexOfKey: aKey
		ifAbsent: [0]
%

category: 'accessing'
method: StandardOrderedDictionary
identityIndexOfKey: aKey ifAbsent: aBlock
	1 to: self size do: [:i |
		(orderedKeys at: i) == aKey
			ifTrue: [^ i]].
	^ aBlock value.
%

category: 'testing'
method: StandardOrderedDictionary
includes: anObject
	^ dictionary includes: anObject
%

category: 'testing'
method: StandardOrderedDictionary
includesAssociation: anAssociation
	"IndentityDictionary>>includesAssociation: works differently on GS
	testing both key and value identity, so it is reimplemented here
	to behave like Pharo/Squeak"
	^ (dictionary
		at: anAssociation key
		ifAbsent: [^ false]) = anAssociation value
%

category: 'testing'
method: StandardOrderedDictionary
includesIdentity: anObject
	"GS does not have includesIdentity:"
	self valuesDo: [:each |
		each == anObject
			ifTrue: [^ true]].
	^ false.
%

category: 'testing'
method: StandardOrderedDictionary
includesKey: aKey
	^ dictionary includesKey: aKey
%

category: 'accessing'
method: StandardOrderedDictionary
indexOfKey: aKey
	^ self
		indexOfKey: aKey
		ifAbsent: [0]
%

category: 'accessing'
method: StandardOrderedDictionary
indexOfKey: aKey ifAbsent: aBlock
	1 to: self size do: [:i |
		(orderedKeys at: i) = aKey
			ifTrue: [^ i]].
	^ aBlock value.
%

category: 'initialization'
method: StandardOrderedDictionary
initialize: aCapacity
	dictionary := self dictionaryClass new: aCapacity.
	orderedKeys := Array new: aCapacity.
%

category: 'testing'
method: StandardOrderedDictionary
isDictionary
	^ true
%

category: 'testing'
method: StandardOrderedDictionary
isEmpty
	"Squeak's Collection>>#isEmpty is inefficient"
	^ self size = 0
%

category: 'testing'
method: StandardOrderedDictionary
isIdentityDictionary
	^ false
%

category: 'testing'
method: StandardOrderedDictionary
isOrderPreservingDictionary
	^ true
%

category: 'accessing'
method: StandardOrderedDictionary
keyAtIdentityValue: aValue
	^ self
		keyAtIdentityValue: aValue
		ifAbsent: [self errorValueNotFound: aValue]
%

category: 'accessing'
method: StandardOrderedDictionary
keyAtIdentityValue: aValue ifAbsent: aBlock
	"GS does not have keyAtIdentityValue:ifAbsent:"
	self keysAndValuesDo: [:key :value |
		value == aValue
			ifTrue: [^ key]].
	^ aBlock value.
%

category: 'accessing'
method: StandardOrderedDictionary
keyAtIndex: anIndex
	^ self
		keyAtIndex: anIndex
		ifAbsent: [self errorInvalidIndex: anIndex]
%

category: 'accessing'
method: StandardOrderedDictionary
keyAtIndex: anIndex ifAbsent: aBlock
	(anIndex > 0 and: [anIndex <= self size])
		ifTrue: [^ orderedKeys at: anIndex]
		ifFalse: [^ aBlock value]
%

category: 'accessing'
method: StandardOrderedDictionary
keyAtValue: aValue
	^ dictionary keyAtValue: aValue
%

category: 'accessing'
method: StandardOrderedDictionary
keyAtValue: aValue ifAbsent: aBlock
	^ dictionary
		keyAtValue: aValue
		ifAbsent: aBlock
%

category: 'accessing'
method: StandardOrderedDictionary
keyForIdentity: anObject
	"reimplemented for portability"
	self keysAndValuesDo: [:key :value |
		value == anObject
			ifTrue: [^ key]].
	^ nil.
%

category: 'accessing'
method: StandardOrderedDictionary
keys
	^ orderedKeys
		copyFrom: 1
		to: self size
%

category: 'enumerating'
method: StandardOrderedDictionary
keysAndValuesDo: aBlock
	self keysDo: [:each |
		aBlock
			value: each
			value: (self at: each)]
%

category: 'removing'
method: StandardOrderedDictionary
keysAndValuesRemove: aTwoArgumentBlock
	| removedAssociations |

	removedAssociations := OrderedCollection new.
	self associationsDo: [:each |
		(aTwoArgumentBlock
			value: each key
			value: each value)
			ifTrue: [removedAssociations add: each]].
	removedAssociations do: [:each | self removeKey: each key].
%

category: 'enumerating'
method: StandardOrderedDictionary
keysDo: aBlock
	"use to:do: for speed"
	1 to: self size do: [:i |
		aBlock value: (orderedKeys at: i)]
%

category: 'accessing'
method: StandardOrderedDictionary
keysSortedSafely
	"GS's #keysSortedSafely returns a SortedCollection instead of
	an Array, so this is reimplemented directly for portability, and
	'self keys' is used instead of 'dictionary keys', because GS's
	#keys returns a Set which can't be sorted"
	^ self keys sort
%

category: 'private'
method: StandardOrderedDictionary
orderedKeys
	^ orderedKeys
%

category: 'private'
method: StandardOrderedDictionary
orderedKeysIdentityIndexOf: aKey
	"GS does not have #identityIndexOf:"
	1 to: orderedKeys size do: [:i |
		(orderedKeys at: i) == aKey
			ifTrue: [^ i]].
	^ 0.
%

category: 'private'
method: StandardOrderedDictionary
orderedKeysIndexOf: aKey
	^ orderedKeys indexOf: aKey
%

category: 'private'
method: StandardOrderedDictionary
orderedKeysRemove: aRemovedKey
	| index |

	index := self orderedKeysIndexOf: aRemovedKey.

	"shift every remaining key after to the left by one"
	orderedKeys
		replaceFrom: index
		to: self size
		with: orderedKeys
		startingAt: index + 1.

	"one key was removed and the rest shifted, so nil what was the last
	key slot before removing and shifting"
	orderedKeys
		at: self size + 1
		put: nil.
%

category: 'copying'
method: StandardOrderedDictionary
postCopy
	orderedKeys := orderedKeys copy.
	dictionary := dictionary copy.
%

category: 'printing'
method: StandardOrderedDictionary
printElementsOn: aStream
	aStream nextPut: $(.
	self size > 100
		ifTrue: [
			aStream nextPutAll: 'size '.
			self size printOn: aStream]
		ifFalse: [
			self associations withIndexDo: [:each :i |
				aStream
					print: each key;
					nextPutAll: '->';
					print: each value.
				(i < self size)
					ifTrue: [aStream space]]].
	aStream nextPut: $).
%

category: 'removing'
method: StandardOrderedDictionary
remove: anObject ifAbsent: aBlock
	self shouldNotImplement
%

category: 'removing'
method: StandardOrderedDictionary
removeAll
	1 to: self size do: [:i |
		orderedKeys
			at: i
			put: nil].
	dictionary removeAll.
%

category: 'removing'
method: StandardOrderedDictionary
removeKey: aKey
	| value |

	value := dictionary removeKey: aKey.
	self orderedKeysRemove: aKey.
	^ value.
%

category: 'removing'
method: StandardOrderedDictionary
removeKey: aKey ifAbsent: aBlock
	| oldSize value |

	oldSize := dictionary size.
	value :=
		dictionary
			removeKey: aKey
			ifAbsent: aBlock.
	dictionary size < oldSize
		ifTrue: [self orderedKeysRemove: aKey].
	^ value.
%

category: 'removing'
method: StandardOrderedDictionary
removeKeys: aKeyCollection
	"Fast removal of multiple keys; returns self to avoid
	having to create a removed value collection and does not
	raise errors."

	aKeyCollection	size > 1
		ifTrue: [| oldSize newOrderedKeys newOrderedKeysIndex |
			oldSize := self size.
			aKeyCollection do: [:each |
				dictionary
					removeKey: each
					ifAbsent: [nil]].

			newOrderedKeys := Array new: oldSize.
			newOrderedKeysIndex := 0.
			1 to: oldSize do: [:i | | key |
				(dictionary includesKey: (key := orderedKeys at: i))
					ifTrue: [
						newOrderedKeys
							at: (newOrderedKeysIndex := newOrderedKeysIndex + 1)
							put: key]].

			orderedKeys := newOrderedKeys]
		ifFalse: [
			aKeyCollection size = 1
				ifTrue: [
					"use #anyOne, because it can be a Set"
					self
						removeKey: aKeyCollection anyOne
						ifAbsent: [nil]]]
%

category: 'enumerating'
method: StandardOrderedDictionary
select: aBlock
	^ self speciesNewFrom:
		(self associations select: [:each | aBlock value: each value])
%

category: 'accessing'
method: StandardOrderedDictionary
size
	^ dictionary size
%

category: 'private'
method: StandardOrderedDictionary
speciesNewFrom: anAssociationCollection
	^ self species newFrom: anAssociationCollection
%

category: 'accessing'
method: StandardOrderedDictionary
values
	^ self associations collect: [:each | each value]
%

category: 'enumerating'
method: StandardOrderedDictionary
valuesDo: aBlock
	self keysDo: [:each |
		aBlock value: (self at: each)]
%

! Class implementation for 'OrderPreservingDictionary'

!		Class methods for 'OrderPreservingDictionary'

category: 'instance creation'
classmethod: OrderPreservingDictionary
defaultValue: aDefaultValue
	^ self new defaultValue: aDefaultValue
%

category: 'instance creation'
classmethod: OrderPreservingDictionary
new: aCapacity withDefaultValue: aDefaultValue
	^ self basicNew
		initialize: aCapacity
		withDefaultValue: aDefaultValue
%

category: 'instance creation'
classmethod: OrderPreservingDictionary
newFrom: anAssociationCollection
	| newDictionary |

	newDictionary := super newFrom: anAssociationCollection.
	(anAssociationCollection respondsTo: #defaultValue)
		ifTrue: [newDictionary defaultValue: anAssociationCollection defaultValue].
	^ newDictionary.
%

!		Instance methods for 'OrderPreservingDictionary'

category: 'accessing'
method: OrderPreservingDictionary
associationAt: aKey
	^ self
		associationAt: aKey
		ifAbsent: [nil]
%

category: 'accessing'
method: OrderPreservingDictionary
at: aKey
	^ self
		at: aKey
		ifAbsent: [defaultValue]
%

category: 'copying'
method: OrderPreservingDictionary
copyEmpty
	^ self species defaultValue: defaultValue
%

category: 'accessing'
method: OrderPreservingDictionary
defaultValue
	^ defaultValue
%

category: 'accessing'
method: OrderPreservingDictionary
defaultValue: aDefaultValue
	defaultValue := aDefaultValue
%

category: 'initialization'
method: OrderPreservingDictionary
initialize: aCapacity withDefaultValue: aDefaultValue
	self initialize: aCapacity.
	defaultValue := aDefaultValue.
%

category: 'accessing'
method: OrderPreservingDictionary
keyAtIdentityValue: aValue
	^ self
		keyAtIdentityValue: aValue
		ifAbsent: [defaultValue]
%

category: 'accessing'
method: OrderPreservingDictionary
keyAtIndex: anIndex
	^ self
		keyAtIndex: anIndex
		ifAbsent: [defaultValue]
%

category: 'accessing'
method: OrderPreservingDictionary
keyAtValue: aValue
	^ self
		keyAtValue: aValue
		ifAbsent: [defaultValue]
%

category: 'removing'
method: OrderPreservingDictionary
removeKey: aKey
	^ self
		removeKey: aKey
		ifAbsent: [defaultValue]
%

category: 'private'
method: OrderPreservingDictionary
speciesNewFrom: anAssociationCollection
	^ (self species newFrom: anAssociationCollection)
		defaultValue: defaultValue
%

! Class implementation for 'OrderPreservingIdentityDictionary'

!		Instance methods for 'OrderPreservingIdentityDictionary'

category: 'accessing'
method: OrderPreservingIdentityDictionary
dictionaryClass
	^ IdentityDictionary
%

category: 'accessing'
method: OrderPreservingIdentityDictionary
indexOfKey: aKey ifAbsent: aBlock
	^ self
		identityIndexOfKey: aKey
		ifAbsent: aBlock
%

category: 'testing'
method: OrderPreservingIdentityDictionary
isIdentityDictionary
	^ true
%

category: 'private'
method: OrderPreservingIdentityDictionary
orderedKeysIndexOf: aKey
	^ self orderedKeysIdentityIndexOf: aKey
%

! Class implementation for 'OrderPreservingStringDictionary'

!		Instance methods for 'OrderPreservingStringDictionary'

category: 'accessing'
method: OrderPreservingStringDictionary
associationAt: aKey
	^ self
		associationAt: aKey
		ifAbsent: [nil]
%

category: 'accessing'
method: OrderPreservingStringDictionary
at: aKey
	^ self
		at: aKey
		ifAbsent: ['']
%

category: 'accessing'
method: OrderPreservingStringDictionary
keyAtIdentityValue: aValue
	^ self
		keyAtIdentityValue: aValue
		ifAbsent: ['']
%

category: 'accessing'
method: OrderPreservingStringDictionary
keyAtIndex: anIndex
	^ self
		keyAtIndex: anIndex
		ifAbsent: ['']
%

category: 'accessing'
method: OrderPreservingStringDictionary
keyAtValue: aValue
	^ self
		keyAtValue: aValue
		ifAbsent: ['']
%

category: 'removing'
method: OrderPreservingStringDictionary
removeKey: aKey
	^ self
		removeKey: aKey
		ifAbsent: ['']
%

! Class implementation for 'OrderPreservingIdentityStringDictionary'

!		Instance methods for 'OrderPreservingIdentityStringDictionary'

category: 'accessing'
method: OrderPreservingIdentityStringDictionary
dictionaryClass
	^ IdentityDictionary
%

category: 'accessing'
method: OrderPreservingIdentityStringDictionary
indexOfKey: aKey ifAbsent: aBlock
	^ self
		identityIndexOfKey: aKey
		ifAbsent: aBlock
%

category: 'testing'
method: OrderPreservingIdentityStringDictionary
isIdentityDictionary
	^ true
%

category: 'private'
method: OrderPreservingIdentityStringDictionary
orderedKeysIndexOf: aKey
	^ self orderedKeysIdentityIndexOf: aKey
%

! Class implementation for 'StandardOrderedIdentityDictionary'

!		Instance methods for 'StandardOrderedIdentityDictionary'

category: 'accessing'
method: StandardOrderedIdentityDictionary
dictionaryClass
	^ IdentityDictionary
%

category: 'accessing'
method: StandardOrderedIdentityDictionary
indexOfKey: aKey ifAbsent: aBlock
	^ self
		identityIndexOfKey: aKey
		ifAbsent: aBlock
%

category: 'testing'
method: StandardOrderedIdentityDictionary
isIdentityDictionary
	^ true
%

category: 'private'
method: StandardOrderedIdentityDictionary
orderedKeysIndexOf: aKey
	^ self orderedKeysIdentityIndexOf: aKey
%

! Class implementation for 'StandardOrderedDictionaryTest'

!		Class methods for 'StandardOrderedDictionaryTest'

category: 'testing'
classmethod: StandardOrderedDictionaryTest
shouldInheritSelectors
	^ true
%

!		Instance methods for 'StandardOrderedDictionaryTest'

category: 'accessing'
method: StandardOrderedDictionaryTest
absentKey
	self isTestingIdentityDictionary
		ifTrue: [^ self identityAbsentKey]
		ifFalse: [^ self nonIdentityAbsentKey]
%

category: 'accessing'
method: StandardOrderedDictionaryTest
absentValue
	^ 'absentValue'
%

category: 'assertions'
method: StandardOrderedDictionaryTest
assertDictionary: aFirstDictionary doesNotEqual: aSecondDictionary
	"test symmetric inequality"
	self
		deny: aFirstDictionary = aSecondDictionary;
		deny: aSecondDictionary = aFirstDictionary
%

category: 'assertions'
method: StandardOrderedDictionaryTest
assertDictionary: aFirstDictionary equals: aSecondDictionary
	"test reflixive and symmetric equality"
	self
		assert: aFirstDictionary = aFirstDictionary;
		assert: aFirstDictionary = aSecondDictionary;
		assert: aSecondDictionary = aSecondDictionary;
		assert: aSecondDictionary = aFirstDictionary
%

category: 'assertions'
method: StandardOrderedDictionaryTest
assertIsArray: anArray withElements: aCollection
	self
		assert: anArray isArray;
		assert: anArray = aCollection asArray
%

category: 'assertions'
method: StandardOrderedDictionaryTest
assertIsDictionary: aFirstDictionary copiedFrom: aSecondDictionary withOrderedAssociations: anAssociationCollection
	self
		deny: aFirstDictionary == aSecondDictionary;
		deny: aFirstDictionary dictionary == aSecondDictionary dictionary;
		deny: aFirstDictionary orderedKeys == aSecondDictionary orderedKeys.

	"esnure the associations were copied (the keys and values can be shared)"
	aFirstDictionary associations do: [:each |
		self deny: (aSecondDictionary associations identityIncludes: each)].

	self
		assertIsDictionary: aFirstDictionary
		withOrderedAssociations: anAssociationCollection.
%

category: 'assertions'
method: StandardOrderedDictionaryTest
assertIsDictionary: anObject withOrderedAssociations: anAssociationCollection
	"tests that anObject is an instance of the correct dictionary class
	with the specified ordered associations"
	self
		assert: anObject class == self dictionaryClass;
		assert: anObject orderedKeys size >= anAssociationCollection size;
		assert: anObject associations size = anAssociationCollection size.

	anAssociationCollection withIndexDo: [:each :i |
		self isTestingIdentityDictionary
			ifTrue: [
				self
					assert: (anObject orderedKeys at: i) == each key;
					assert: (anObject associations at: i) key == each key]
			ifFalse: [
				self
					assert: (anObject orderedKeys at: i) = each key;
					assert: (anObject associations at: i) key = each key].
		self assert: (anObject associations at: i) value = each value].
%

category: 'assertions'
method: StandardOrderedDictionaryTest
assertIsDictionary: anObject withUnorderedAssociations: anAssociationCollection
	"tests that anObject is an instance of the correct dictionary class
	with the specified associations, but ignoring the order"
	self
		assert: anObject class == self dictionaryClass;
		assert: anObject size = anAssociationCollection size.
	anAssociationCollection do: [:each |
		self assert: (anObject includesAssociation: each)].
%

category: 'assertions'
method: StandardOrderedDictionaryTest
assertKey: aKey wasRemovedfrom: aDictionary
	self deny: (aDictionary includesKey: aKey).
	aDictionary keys asArray, aDictionary orderedKeys asArray do: [:each |
		self deny:
			(self isTestingIdentityDictionary
				ifTrue: [each == aKey]
				ifFalse: [each = aKey])].
%

category: 'accessing'
method: StandardOrderedDictionaryTest
changedOrderedAssociations
	^ self orderedAssociations collect: [:each | each key -> self newValue]
%

category: 'accessing'
method: StandardOrderedDictionaryTest
changedOrderedAssociationsFirst: anInteger
	"GS does not have #first:"
	^ self changedOrderedAssociations
		copyFrom: 1
		to: anInteger
%

category: 'accessing'
method: StandardOrderedDictionaryTest
collectClass
	^ Array
%

category: 'accessing'
method: StandardOrderedDictionaryTest
defaultCapacity
	^ self emptyInternalDictionary capacity
%

category: 'accessing'
method: StandardOrderedDictionaryTest
dictionaryClass
	^ StandardOrderedDictionary
%

category: 'accessing'
method: StandardOrderedDictionaryTest
dictionaryWithOrderedAssociations
	^ self dictionaryClass newFrom: self orderedAssociations
%

category: 'accessing'
method: StandardOrderedDictionaryTest
emptyDictionary
	^ self dictionaryClass new
%

category: 'accessing'
method: StandardOrderedDictionaryTest
emptyInternalDictionary
	^ self internalDictionaryClass new
%

category: 'accessing'
method: StandardOrderedDictionaryTest
identityAbsentKey
	^ self orderedKeys first copy
%

category: 'accessing'
method: StandardOrderedDictionaryTest
identityOrderedAssociations
	"Returns ordered associations to use for identity dictionaries.
	The keys are all #= equal but #== different, so only an
	identity dictionary will be able to distinguish them."
	identityOrderedAssociations
		ifNil: [| key |
			key := 'testKey'.
			identityOrderedAssociations :=
				Array
					with: (key := key copy) -> 'testValue'
					with: (key := key copy) -> 'testValue3'
					with: (key := key copy) -> 'testValue2'
					with: (key := key copy) -> 'testValue4'].
	"return copies of the associations so they can be safely modified
	in one test without affecting another, but do not copy the keys
	and values"
	^ identityOrderedAssociations collect: [:each | each copy].
%

category: 'accessing'
method: StandardOrderedDictionaryTest
internalDictionaryClass
	self isTestingIdentityDictionary
		ifTrue: [^ IdentityDictionary]
		ifFalse: [^ Dictionary]
%

category: 'accessing'
method: StandardOrderedDictionaryTest
internalDictionaryWithAssociations
	^ self internalDictionaryClass newFrom: self orderedAssociations
%

category: 'testing'
method: StandardOrderedDictionaryTest
isTestingIdentityDictionary
	^ false
%

category: 'accessing'
method: StandardOrderedDictionaryTest
newValue
	^ 'newValue'
%

category: 'accessing'
method: StandardOrderedDictionaryTest
nonIdentityAbsentKey
	^ 'absentKey'
%

category: 'accessing'
method: StandardOrderedDictionaryTest
nonIdentityOrderedAssociations
	"Returns ordered associations to use for non-identity dictionaries.
	The keys are all #= and #== different and are returned out of their
	natural sort order."
	nonIdentityOrderedAssociations
		ifNil: [
			nonIdentityOrderedAssociations :=
				Array
					with: 'testKey' -> 'testValue'
					with: 'testKey3' -> 'testValue3'
					with: 'testKey2' -> 'testValue2'
					with: 'testKey4' -> 'testValue4'].
	"return copies of the associations so they can be safely modified
	in one test without affecting another, but do not copy the keys
	and values"
	^ nonIdentityOrderedAssociations collect: [:each | each copy].
%

category: 'accessing'
method: StandardOrderedDictionaryTest
orderedAssociations
	self isTestingIdentityDictionary
		ifTrue: [^ self identityOrderedAssociations]
		ifFalse: [^ self nonIdentityOrderedAssociations]
%

category: 'accessing'
method: StandardOrderedDictionaryTest
orderedAssociationsAllButFirst: anInteger
	^ self orderedAssociations allButFirst: anInteger
%

category: 'accessing'
method: StandardOrderedDictionaryTest
orderedAssociationsFirst: anInteger
	"GS does not have #first:"
	^ self orderedAssociations
		copyFrom: 1
		to: anInteger
%

category: 'accessing'
method: StandardOrderedDictionaryTest
orderedKeys
	^ self orderedAssociations collect: [:each | each key]
%

category: 'accessing'
method: StandardOrderedDictionaryTest
orderedKeysFirst: anInteger
	"GS does not have #first:"
	^ self orderedKeys
		copyFrom: 1
		to: anInteger
%

category: 'accessing'
method: StandardOrderedDictionaryTest
orderedValues
	^ self orderedAssociations collect: [:each | each value]
%

category: 'accessing'
method: StandardOrderedDictionaryTest
orderedValuesFirst: anInteger
	"GS does not have #first:"
	^ self orderedValues
		copyFrom: 1
		to: anInteger
%

category: 'accessing'
method: StandardOrderedDictionaryTest
otherOrderPreservingDictionaryClasses
	^ StandardOrderedDictionary withAllSubclasses copyWithout: self dictionaryClass
%

category: 'assertions'
method: StandardOrderedDictionaryTest
should: aBlock enumerate: aCollection
	| enumerated |

	enumerated := OrderedCollection new.
	aBlock value: [:each | enumerated add: each].
	self assert: enumerated = aCollection asOrderedCollection.
%

category: 'assertions'
method: StandardOrderedDictionaryTest
should: aBlock enumerate: aFirstCollection and: aSecondCollection
	| firstEnumerated secondEnumerated |

	firstEnumerated := OrderedCollection new.
	secondEnumerated := OrderedCollection new.
	aBlock value: [:first :second |
		firstEnumerated addLast: first.
		secondEnumerated addLast: second].
	self
		assert: firstEnumerated = aFirstCollection asOrderedCollection;
		assert: secondEnumerated = aSecondCollection asOrderedCollection.
%

category: 'tests'
method: StandardOrderedDictionaryTest
testAdd
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations withIndexDo: [:each :i |
		self
			deny: (dictionary includesAssociation: each);
			assert: (dictionary add: each) == each;
			assert: (dictionary includesAssociation: each).
		self
			assertIsDictionary: dictionary
			withOrderedAssociations: (self orderedAssociationsFirst: i)].

	"ensure adding the same associations doesn't change the order"
	self orderedAssociations reverseDo: [:each |
		self assert: (dictionary add: each) == each.
		self
			assertIsDictionary: dictionary
			withOrderedAssociations: self orderedAssociations].

	self changedOrderedAssociations withIndexDo: [:each :i | | old |
		old := self orderedAssociations at: i.
		self
			assert: (dictionary add: each) == each;
			assert: (dictionary includesAssociation: each);
			deny: (dictionary includesAssociation: old).
		self
			assertIsDictionary: dictionary
			withOrderedAssociations:
				(self changedOrderedAssociationsFirst: i),
				(self orderedAssociationsAllButFirst: i)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testAddAll
	| dictionary addedAssociations |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self deny: (dictionary includesAssociation: each)].

	addedAssociations := self orderedAssociations.
	self assert: (dictionary addAll: addedAssociations) == addedAssociations.
	self
		assertIsDictionary: dictionary
		withOrderedAssociations: self orderedAssociations.

	"ensure adding the same associations doesn't change the order"
	addedAssociations := self orderedAssociations reversed.
	self assert: (dictionary addAll: addedAssociations) == addedAssociations.
	self
		assertIsDictionary: dictionary
		withOrderedAssociations: self orderedAssociations.

	addedAssociations := self changedOrderedAssociations.
	self assert: (dictionary addAll: addedAssociations) == addedAssociations.
	self
		assertIsDictionary: dictionary
		withOrderedAssociations: self changedOrderedAssociations.
%

category: 'tests'
method: StandardOrderedDictionaryTest
testAssociationAt
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self
			should: [dictionary associationAt: each key]
			raise: Error.

		dictionary add: each.
		self assert: (dictionary associationAt: each key) equals: each].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testAssociationAtIfAbsent
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self assert:
			(dictionary
				associationAt: each key
				ifAbsent: [self absentValue]) equals: self absentValue.

		dictionary add: each.
		self assert:
			(dictionary
				associationAt: each key
				ifAbsent: [self fail]) equals: each].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testAssociationAtIfPresent
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self assert:
			(dictionary
				associationAt: each key
				ifPresent: [self fail]) isNil.

		dictionary add: each.
		self assert:
			(dictionary
				associationAt: each key
				ifPresent: [:assoc | self newValue -> assoc]) = (self newValue -> each).
		"ensure cull: is used"
		self assert:
			(dictionary
				associationAt: each key
				ifPresent: [self newValue]) = self newValue].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testAssociations
	| dictionary |

	dictionary := self emptyDictionary.
	self
		assertIsArray: dictionary associations
		withElements: #().
	self orderedAssociations withIndexDo: [:each :i |
		dictionary add: each.
		self
			assertIsArray: dictionary associations
			withElements: (self orderedAssociationsFirst: i)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testAssociationsDo
	| dictionary |

	dictionary := self emptyDictionary.
	self
		should: [:block | dictionary associationsDo: block]
		enumerate: #().
	self orderedAssociations withIndexDo: [:each :i |
		dictionary add: each.
		self
			should: [:block | dictionary associationsDo: block]
			enumerate: (self orderedAssociationsFirst: i)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testAssociationsSelect
	| dictionary |

	dictionary := self dictionaryWithOrderedAssociations.
	self orderedAssociations do: [:assoc | | selectedAssociations |
		selectedAssociations := self orderedAssociations copyWithout: assoc.
		self
			assertIsDictionary:
				(dictionary associationsSelect: [:each |
					selectedAssociations includes: each])
			copiedFrom: dictionary
			withOrderedAssociations:
				(self orderedAssociations select: [:each |
					selectedAssociations includes: each])].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testAt
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self
			should: [dictionary at: each key]
			raise: Error.

		dictionary add: each.
		self assert: (dictionary at: each key) equals: each value].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testAtIfAbsent
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self assert:
			(dictionary
				at: each key
				ifAbsent: [self absentValue]) equals: self absentValue.

		dictionary add: each.
		self assert:
			(dictionary
				at: each key
				ifAbsent: [self fail]) equals: each value].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testAtIfAbsentPut
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self assert:
			(dictionary
				at: each key
				ifAbsentPut: [each value]) equals: each value.
		self assert:
			(dictionary
				at: each key
				ifAbsentPut: [self fail]) equals: each value].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testAtIfPresent
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self assert:
			(dictionary
				at: each key
				ifPresent: [self fail]) isNil.

		dictionary add: each.
		self assert:
			(dictionary
				at: each key
				ifPresent: [:value | self newValue -> value]) equals:
					(self newValue -> each value).
		"ensure cull: is used"
		self assert:
			(dictionary
				at: each key
				ifPresent: [self newValue]) equals: self newValue].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testAtIfPresentIfAbsent
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self assert:
			(dictionary
				at: each key
				ifPresent: [self fail]
				ifAbsent: [self absentValue]) equals: self absentValue.

		dictionary add: each.
		self assert:
			(dictionary
				at: each key
				ifPresent: [:value | self newValue -> value]
				ifAbsent: [self fail]) equals: (self newValue -> each value).
		"ensure cull: is used"
		self assert:
			(dictionary
				at: each key
				ifPresent: [self newValue]
				ifAbsent: [self fail]) equals: self newValue].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testAtPut
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations withIndexDo: [:each :i |
		self assert:
			(dictionary
				at: each key
				put: each value) equals: each value.
		self
			assertIsDictionary: dictionary
			withOrderedAssociations: (self orderedAssociationsFirst: i)].

	self changedOrderedAssociations withIndexDo: [:each :i |
		self assert:
			(dictionary
				at: each key
				put: each value) equals: each value.
		self
			assertIsDictionary: dictionary
			withOrderedAssociations:
				(self changedOrderedAssociationsFirst: i),
				(self orderedAssociationsAllButFirst: i)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testCapacity
	"The current Dictionary implementation allocates more than specified.
	The amount allocated may change in the future but it likely won't ever
	be less than specified, so a >= test is used throughout."

	| defaultCapacity dictionary |

	defaultCapacity := self defaultCapacity.
	dictionary := self dictionaryClass new.
	self assert: dictionary capacity >= defaultCapacity.

	dictionary := self dictionaryClass new: (defaultCapacity / 2) asInteger.
	self assert: dictionary capacity >= (defaultCapacity / 2) asInteger.

	dictionary := self dictionaryClass newFrom: self orderedAssociations.
	self assert: dictionary capacity >= self orderedAssociations size.

	self orderedAssociations size to: 0 by: -1 do: [:i |
		self
			shouldnt: [
				dictionary := self dictionaryClass new: i.
				dictionary addAll: self orderedAssociations]
			raise: Error].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testCollect
	| dictionary |

	dictionary := self dictionaryWithOrderedAssociations.
	self
		assertIsDictionary:
			(dictionary collect: [:each | each hash])
		copiedFrom: dictionary
		withOrderedAssociations:
			(self orderedAssociations collect: [:each | each key -> each value hash]).
%

category: 'tests'
method: StandardOrderedDictionaryTest
testCopy
	| dictionary copy |

	dictionary := self dictionaryWithOrderedAssociations.
	copy := dictionary copy.
	self
		assertIsDictionary: dictionary
		withOrderedAssociations: self orderedAssociations.
	self
		assertIsDictionary: copy
		copiedFrom: dictionary
		withOrderedAssociations: self orderedAssociations.
%

category: 'tests'
method: StandardOrderedDictionaryTest
testCopyEmpty
	| dictionary copy |

	dictionary := self dictionaryWithOrderedAssociations.
	copy := dictionary copyEmpty.
	self
		assertIsDictionary: dictionary
		withOrderedAssociations: self orderedAssociations.
	self
		assertIsDictionary: copy
		copiedFrom: dictionary
		withOrderedAssociations: #().
%

category: 'tests'
method: StandardOrderedDictionaryTest
testDictionary
	| dictionary |

	dictionary := self emptyDictionary.
	self
		assert: dictionary dictionary class == self internalDictionaryClass;
		assert: dictionary dictionary equals: self emptyInternalDictionary.

	dictionary := self dictionaryWithOrderedAssociations.
	self
		assert: dictionary dictionary class == self internalDictionaryClass;
		assert: dictionary dictionary equals: self internalDictionaryWithAssociations.
%

category: 'tests'
method: StandardOrderedDictionaryTest
testDo
	| dictionary |

	dictionary := self emptyDictionary.
	self
		should: [:block | dictionary do: block]
		enumerate: #().
	self orderedAssociations withIndexDo: [:each :i |
		dictionary add: each.
		self
			should: [:block | dictionary do: block]
			enumerate: (self orderedValuesFirst: i)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testEquals
	| dictionaryOne dictionaryTwo |

	dictionaryOne := self emptyDictionary.
	dictionaryTwo := self emptyDictionary.
	self
		assertDictionary: dictionaryOne
		equals: dictionaryTwo.

	"For equality, order will not matter"
	self orderedAssociations
		with: self orderedAssociations reversed
		do: [:firstAssociation :secondAssociation |
			dictionaryOne add: firstAssociation.
			dictionaryTwo add: secondAssociation.
			self
				assertDictionary: dictionaryOne
				doesNotEqual: self emptyDictionary.
			self
				assertDictionary: dictionaryTwo
				doesNotEqual: self emptyDictionary.
			dictionaryOne size < self orderedAssociations size
				ifTrue: [
					self
						assertDictionary: dictionaryOne
						doesNotEqual: dictionaryTwo]].

	self
		assertDictionary: dictionaryOne
		equals: dictionaryTwo.
%

category: 'tests'
method: StandardOrderedDictionaryTest
testEqualsDictionary
	"cannot use assertDictionary:doesNotEqual: for backwards compatibility with
	older Pharo images where Dictionary>>= uses #isDictionary to test the argument
	because these classes also implement isDictionary"
	self
		deny: self emptyDictionary = self emptyInternalDictionary;
		deny: self dictionaryWithOrderedAssociations = self internalDictionaryWithAssociations
%

category: 'tests'
method: StandardOrderedDictionaryTest
testEqualsOtherOrderPreservingDictionaries
	self otherOrderPreservingDictionaryClasses do: [:otherClass |
		| dictionary otherDictionary |
		dictionary := self dictionaryClass new.
		otherDictionary := otherClass new.
		dictionary isIdentityDictionary = otherDictionary isIdentityDictionary
			ifTrue: [
				self
					assertDictionary: dictionary
					equals: otherDictionary.
				self orderedAssociations do: [:each |
					dictionary add: each.
					self
						assertDictionary: dictionary
						doesNotEqual: otherDictionary.
					otherDictionary add: each copy.
					self
						assertDictionary: dictionary
						equals: otherDictionary]]
			ifFalse: [
				self
					assertDictionary: dictionary
					doesNotEqual: otherDictionary.
				self orderedAssociations do: [:each |
					dictionary add: each.
					otherDictionary add: each copy.
					self
						assertDictionary: dictionary
						doesNotEqual: otherDictionary]]]
%

category: 'tests'
method: StandardOrderedDictionaryTest
testHash
	| dictionary otherDictionary internalDictionary otherInternalDictionary |

	dictionary := self emptyDictionary.
	otherDictionary := self emptyDictionary.
	internalDictionary := self emptyInternalDictionary.
	otherInternalDictionary := self emptyInternalDictionary.
	self assert: dictionary hash equals: otherDictionary hash.
	self orderedAssociations do: [:each |
		dictionary add: each.
		internalDictionary add: each copy.
		"if the internal hashes differ after adding to one, the external should too"
		internalDictionary hash = otherInternalDictionary hash
			ifFalse: [self deny: dictionary hash = otherDictionary hash].

		otherDictionary add: each copy.
		otherInternalDictionary add: each copy.
		"should be equal regardless now"
		self assert: dictionary hash = otherDictionary hash].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testHashOtherOrderPreservingDictionaries
	self otherOrderPreservingDictionaryClasses do: [:otherClass |
		| dictionary otherDictionary |
		dictionary := self dictionaryClass new.
		otherDictionary := otherClass new.
		dictionary isIdentityDictionary = otherDictionary isIdentityDictionary
			ifTrue: [
				self assert: dictionary hash equals: otherDictionary hash.
				self orderedAssociations do: [:each |
					dictionary add: each.
					otherDictionary add: each copy.
					self assert: dictionary hash equals: otherDictionary hash]]]
%

category: 'tests'
method: StandardOrderedDictionaryTest
testIdentityIndexOfKey
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations withIndexDo: [:each :i |
		self assert: (dictionary identityIndexOfKey: each key) equals: 0.

		dictionary add: each.
		self
			assert: (dictionary identityIndexOfKey: each key) equals: i;
			assert: (dictionary identityIndexOfKey: each key copy) equals: 0].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testIdentityIndexOfKeyIfAbsent
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations withIndexDo: [:each :i |
		self assert:
			(dictionary
				identityIndexOfKey: each key
				ifAbsent: [self absentValue]) equals: self absentValue.

		dictionary add: each.
		self assert:
			(dictionary
				identityIndexOfKey: each key
				ifAbsent: [self fail]) equals: i.
		self assert:
			(dictionary
				identityIndexOfKey: each key copy
				ifAbsent: [self absentValue]) equals: self absentValue].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testIncludes
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self deny: (dictionary includes: each value).

		dictionary add: each.
		self assert: (dictionary includes: each value)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testIncludesAssociation
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self
			deny: (dictionary includesAssociation: each);
			deny: (dictionary includesAssociation: each key -> each value).

		dictionary add: each.
		self
			assert: (dictionary includesAssociation: each);
			assert: (dictionary includesAssociation: each key -> each value)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testIncludesIdentity
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self deny: (dictionary includesIdentity: each value).

		dictionary add: each.
		self
			assert: (dictionary includesIdentity: each value);
			deny: (dictionary includesIdentity: each value copy)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testIncludesKey
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self deny: (dictionary includesKey: each key).

		dictionary add: each.
		self assert: (dictionary includesKey: each key)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testIndexOfKey
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations withIndexDo: [:each :i |
		self assert: (dictionary indexOfKey: each key) equals: 0.

		dictionary add: each.
		self assert: (dictionary indexOfKey: each key) equals: i].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testIndexOfKeyIfAbsent
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations withIndexDo: [:each :i |
		self assert:
			(dictionary
				indexOfKey: each key
				ifAbsent: [self absentValue]) equals: self absentValue.

		dictionary add: each.
		self assert:
			(dictionary
				indexOfKey: each key
				ifAbsent: [self fail]) equals: i].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testIsDictionary
	self assert: self dictionaryClass new isDictionary
%

category: 'tests'
method: StandardOrderedDictionaryTest
testIsIdentityDictionary
	self assert: self emptyDictionary isIdentityDictionary equals: self isTestingIdentityDictionary
%

category: 'tests'
method: StandardOrderedDictionaryTest
testIsOrderPreservingDictionary
	self
		assert: self dictionaryWithOrderedAssociations isOrderPreservingDictionary;
		deny: self internalDictionaryWithAssociations isOrderPreservingDictionary;
		deny: self orderedAssociations isOrderPreservingDictionary
%

category: 'tests'
method: StandardOrderedDictionaryTest
testKeyAtIdentityValue
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self
			should: [dictionary keyAtIdentityValue: each value]
			raise: Error.

		dictionary add: each.
		self assert: (dictionary keyAtIdentityValue: each value) equals: each key.
		self
			should: [dictionary keyAtIdentityValue: each value copy]
			raise: Error].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testKeyAtIdentityValueIfAbsent
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self assert:
			(dictionary
				keyAtIdentityValue: each value
				ifAbsent: [self absentKey]) equals: self absentKey.

		dictionary add: each.
		self assert:
			(dictionary
				keyAtIdentityValue: each value
				ifAbsent: [self fail]) equals: each key.
		self assert:
			(dictionary
				keyAtIdentityValue: each value copy
				ifAbsent: [self absentKey]) equals: self absentKey].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testKeyAtIndex
	| dictionary |

	dictionary := self emptyDictionary.
	self
		should: [dictionary keyAtIndex: 0]
		raise: Error.
	self orderedAssociations withIndexDo: [:each :i |
		self
			should: [dictionary keyAtIndex: i]
			raise: Error.

		dictionary add: each.
		self assert: (dictionary keyAtIndex: i) equals: each key].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testKeyAtIndexIfAbsent
	| dictionary |

	dictionary := self emptyDictionary.
	self assert:
		(dictionary
			keyAtIndex: 0
			ifAbsent: [self absentKey]) equals: self absentKey.
	self orderedAssociations withIndexDo: [:each :i |
		self assert:
			(dictionary
				keyAtIndex: i
				ifAbsent: [self absentKey]) equals: self absentKey.

		dictionary add: each.
		self assert:
			(dictionary
				keyAtIndex: i
				ifAbsent: [self fail]) equals: each key].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testKeyAtValue
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self
			should: [dictionary keyAtValue: each value]
			raise: Error.

		dictionary add: each.
		self assert: (dictionary keyAtValue: each value) equals: each key].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testKeyAtValueIfAbsent
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self assert:
			(dictionary
				keyAtValue: each value
				ifAbsent: [self absentKey]) equals: self absentKey.

		dictionary add: each.
		self assert:
			(dictionary
				keyAtValue: each value
				ifAbsent: [self fail]) equals: each key].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testKeyForIdentity
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self assert: (dictionary keyForIdentity: each value) isNil.

		dictionary add: each.
		self
			assert: (dictionary keyForIdentity: each value) equals: each key;
			assert: (dictionary keyForIdentity: each value copy) isNil].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testKeys
	| dictionary |

	dictionary := self emptyDictionary.
	self
		assertIsArray: dictionary keys
		withElements: #().
	self orderedAssociations withIndexDo: [:each :i |
		dictionary add: each.
		self
			assertIsArray: dictionary keys
			withElements: (self orderedKeysFirst: i)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testKeysAndValuesDo
	| dictionary |

	dictionary := self emptyDictionary.
	self
		should: [:block | dictionary keysAndValuesDo: block]
		enumerate: #()
		and: #().
	self orderedAssociations withIndexDo: [:each :i |
		dictionary add: each.
		self
			should: [:block | dictionary keysAndValuesDo: block]
			enumerate: (self orderedKeysFirst: i)
			and: (self orderedValuesFirst: i)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testKeysAndValuesRemove
	| dictionary |

	dictionary := self dictionaryWithOrderedAssociations.
	self orderedAssociations withIndexDo: [:removedAssociation :i |
		| unremovedAssociations |
		unremovedAssociations :=
			(self orderedAssociationsAllButFirst: i) asOrderedCollection.
		dictionary keysAndValuesRemove: [:key :value |
			(self isTestingIdentityDictionary
				ifTrue: [key == removedAssociation key]
				ifFalse: [key = removedAssociation key])
				ifTrue: [
					self assert: value equals: removedAssociation value.
					true]
				ifFalse: [| unremovedAssociation |
					unremovedAssociation := unremovedAssociations removeFirst.
					self isTestingIdentityDictionary
						ifTrue: [self assert: key == unremovedAssociation key]
						ifFalse: [self assert: key equals: unremovedAssociation key].
					self assert: value equals: unremovedAssociation value.
					false]].
		self assert: unremovedAssociations isEmpty.
		self
			assertKey: removedAssociation key
			wasRemovedfrom: dictionary].
	self assert: dictionary isEmpty.
%

category: 'tests'
method: StandardOrderedDictionaryTest
testKeysDo
	| dictionary |

	dictionary := self emptyDictionary.
	self
		should: [:block | dictionary keysDo: block]
		enumerate: #().
	self orderedAssociations withIndexDo: [:each :i |
		dictionary add: each.
		self
			should: [:block | dictionary keysDo: block]
			enumerate: (self orderedKeysFirst: i)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testKeysSortedSafely
	| dictionary |

	dictionary := self emptyDictionary.
	self
		assertIsArray: dictionary keysSortedSafely
		withElements: #().
	self orderedAssociations withIndexDo: [:each :i |
		dictionary add: each.
		"The keys are all strings, so the default #sorted implementation is OK."
		self
			assertIsArray: dictionary keysSortedSafely
			withElements: (self orderedKeysFirst: i) sorted].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testNewFrom
	| dictionary |
	
	dictionary := self dictionaryClass newFrom: self orderedAssociations.
	self
		assertIsDictionary: dictionary
		withOrderedAssociations: self orderedAssociations.
	self
		assertIsDictionary: (self dictionaryClass newFrom: dictionary)
		copiedFrom: dictionary
		withOrderedAssociations: self orderedAssociations.
	self
		assertIsDictionary:
			(self dictionaryClass newFrom: self internalDictionaryWithAssociations)
		withUnorderedAssociations: self orderedAssociations.
%

category: 'tests'
method: StandardOrderedDictionaryTest
testNewFromPairs
	| pairs |

	pairs := OrderedCollection new.
	self orderedAssociations do: [:each |
		pairs
			addLast: each key;
			addLast: each value].

	0 to: pairs size do: [:i |
		self
			assertIsDictionary:
				(self dictionaryClass newFromPairs: (pairs copyFrom: 1 to: i))
			withOrderedAssociations:
				(self orderedAssociationsFirst: (i / 2) floor)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testOccurancesOf
	| dictionary |

	dictionary := self emptyDictionary.
	self assert: (dictionary occurrencesOf: self newValue) = 0.
	self orderedKeys withIndexDo: [:each :i |
		dictionary
			at: each
			put: self newValue.
		self assert: (dictionary occurrencesOf: self newValue) = i]
%

category: 'tests'
method: StandardOrderedDictionaryTest
testRemoveAll
	| dictionary removedKeys |

	dictionary := self dictionaryWithOrderedAssociations.
	removedKeys := dictionary keys.
	self
		deny: dictionary isEmpty;
		assert: dictionary removeAll == dictionary;
		assert: dictionary isEmpty.
	removedKeys do: [:each |
		self
			assertKey: each
			wasRemovedfrom: dictionary].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testRemoveKey
	| dictionary |

	dictionary := self dictionaryWithOrderedAssociations.
	self orderedAssociations withIndexDo: [:each :i |
		self assert: (dictionary removeKey: each key) equals: each value.
		self
			assertKey: each key
			wasRemovedfrom: dictionary.
		self
			assertIsDictionary: dictionary
			withOrderedAssociations: (self orderedAssociationsAllButFirst: i).

		self
			should: [dictionary removeKey: each key]
			raise: Error]
%

category: 'tests'
method: StandardOrderedDictionaryTest
testRemoveKeyIfAbsent
	| dictionary |

	dictionary := self dictionaryWithOrderedAssociations.
	self orderedAssociations withIndexDo: [:each :i |
		self assert:
			(dictionary
				removeKey: each key
				ifAbsent: [self fail]) equals: each value.
		self
			assertKey: each key
			wasRemovedfrom: dictionary.
		self
			assertIsDictionary: dictionary
			withOrderedAssociations: (self orderedAssociationsAllButFirst: i).

		self assert:
			(dictionary
				removeKey: each key
				ifAbsent: [self absentValue]) = self absentValue]
%

category: 'tests'
method: StandardOrderedDictionaryTest
testRemoveKeys
	0 to: self orderedAssociations size do: [:i | | dictionary keysToRemove |
		dictionary := self dictionaryWithOrderedAssociations.

		"make it a set to ensure it supports non-Sequenceable collections"
		keysToRemove :=
			(self isTestingIdentityDictionary
				ifTrue: [IdentitySet]
				ifFalse: [Set])
				"avoid #newFrom: for GS portability"
				withAll: (self orderedKeysFirst: i).
		self assert: (dictionary removeKeys: keysToRemove) == dictionary.
		keysToRemove do: [:each |
			self
				assertKey: each
				wasRemovedfrom: dictionary].

		self
			assertIsDictionary: dictionary
			withOrderedAssociations: (self orderedAssociationsAllButFirst: i)]
%

category: 'tests'
method: StandardOrderedDictionaryTest
testSelect
	| dictionary |

	dictionary := self dictionaryWithOrderedAssociations.
	self orderedValues do: [:value | | selectedValues |
		selectedValues := self orderedValues copyWithout: value.
		self
			assertIsDictionary:
				(dictionary select: [:each |
					selectedValues includes: each])
			copiedFrom: dictionary
			withOrderedAssociations:
				(self orderedAssociations select: [:each |
					selectedValues includes: each value])].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testSize
	| dictionary |

	dictionary := self emptyDictionary.
	self assert: dictionary size equals: 0.

	self orderedAssociations withIndexDo: [:each :i |
		dictionary add: each.
		self assert: dictionary size equals: i].

	self orderedAssociations size to: 1 by: -1 do: [:i |
		dictionary removeKey: (self orderedKeys at: i).
		self assert: dictionary size equals: (i - 1)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testValues
	| dictionary |

	dictionary := self emptyDictionary.
	self
		assertIsArray: dictionary values
		withElements: #().
	self orderedAssociations withIndexDo: [:each :i |
		dictionary add: each.
		self
			assertIsArray: dictionary values
			withElements: (self orderedValuesFirst: i)].
%

category: 'tests'
method: StandardOrderedDictionaryTest
testValuesDo
	| dictionary |

	dictionary := self emptyDictionary.
	self
		should: [:block | dictionary valuesDo: block]
		enumerate: #().
	self orderedAssociations withIndexDo: [:each :i |
		dictionary add: each.
		self
			should: [:block | dictionary valuesDo: block]
			enumerate: (self orderedValuesFirst: i)].
%

! Class implementation for 'OrderPreservingDictionaryTest'

!		Instance methods for 'OrderPreservingDictionaryTest'

category: 'accessing'
method: OrderPreservingDictionaryTest
defaultValue
	^ 'defaultValue'
%

category: 'accessing'
method: OrderPreservingDictionaryTest
dictionaryClass
	^ OrderPreservingDictionary
%

category: 'accessing'
method: OrderPreservingDictionaryTest
newDefaultValue
	^ 'newDefaultValue'
%

category: 'tests'
method: OrderPreservingDictionaryTest
testAssociationAt
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self assert: (dictionary associationAt: each key) isNil.

		dictionary add: each.
		self assert: (dictionary associationAt: each key) equals: each].
%

category: 'tests'
method: OrderPreservingDictionaryTest
testAssociationsSelect
	super testAssociationsSelect.

	self assert:
		(self dictionaryWithOrderedAssociations
			defaultValue: self defaultValue;
			associationsSelect: [:each | true]) defaultValue equals: self defaultValue.
%

category: 'tests'
method: OrderPreservingDictionaryTest
testAt
	| dictionary |

	dictionary := self emptyDictionary.
	dictionary defaultValue: self defaultValue.
	self orderedAssociations do: [:each |
		self assert: (dictionary at: each key) equals: self defaultValue.

		dictionary add: each.
		self assert: (dictionary at: each key) equals: each value].
%

category: 'tests'
method: OrderPreservingDictionaryTest
testCapacity
	| defaultCapacity dictionary |

	super testCapacity.

	defaultCapacity := self defaultCapacity.
	dictionary := self dictionaryClass defaultValue: nil.
	self assert: dictionary capacity >= defaultCapacity.

	dictionary :=
		self dictionaryClass
			new: defaultCapacity * 2
			withDefaultValue: nil.
	self assert: dictionary capacity >= (defaultCapacity * 2).
%

category: 'tests'
method: OrderPreservingDictionaryTest
testCollect
	super testCollect.

	self assert:
		(self dictionaryWithOrderedAssociations
			defaultValue: self defaultValue;
			collect: [:each | each]) defaultValue equals: self defaultValue.
%

category: 'tests'
method: OrderPreservingDictionaryTest
testCopy
	| dictionary copy |

	super testCopy.

	dictionary := self dictionaryWithOrderedAssociations.
	dictionary defaultValue: self defaultValue.
	copy := dictionary copy.
	self assert: copy defaultValue equals: dictionary defaultValue.
%

category: 'tests'
method: OrderPreservingDictionaryTest
testCopyEmpty
	| dictionary copy |

	super testCopyEmpty.
	
	dictionary := self dictionaryWithOrderedAssociations.
	dictionary defaultValue: self defaultValue.
	copy := dictionary copyEmpty.
	self assert: copy defaultValue equals: dictionary defaultValue.
%

category: 'tests'
method: OrderPreservingDictionaryTest
testDefaultValue
	| dictionary |
	
	dictionary := self dictionaryClass defaultValue: self defaultValue.
	self
		assert: dictionary defaultValue equals: self defaultValue;
		assert: (dictionary defaultValue: self newDefaultValue) == dictionary;
		assert: dictionary defaultValue equals: self newDefaultValue.
%

category: 'tests'
method: OrderPreservingDictionaryTest
testKeyAtIdentityValue
	| dictionary |

	dictionary := self emptyDictionary.
	dictionary defaultValue: self defaultValue.
	self orderedAssociations do: [:each |
		self assert:
			(dictionary keyAtIdentityValue: each value) equals: self defaultValue.

		dictionary add: each.
		self assert:
			(dictionary keyAtIdentityValue: each value) equals: each key.
		self assert:
			(dictionary keyAtIdentityValue: each value copy) equals: self defaultValue].
%

category: 'tests'
method: OrderPreservingDictionaryTest
testKeyAtIndex
	| dictionary |

	dictionary := self emptyDictionary.
	dictionary defaultValue: self defaultValue.
	self assert: (dictionary keyAtIndex: 0) equals: self defaultValue.
	self orderedAssociations withIndexDo: [:each :i |
		self assert: (dictionary keyAtIndex: i) equals: self defaultValue.

		dictionary add: each.
		self assert: (dictionary keyAtIndex: i) equals: each key].
%

category: 'tests'
method: OrderPreservingDictionaryTest
testKeyAtValue
	| dictionary |

	dictionary := self emptyDictionary.
	dictionary defaultValue: self defaultValue.
	self orderedAssociations do: [:each |
		self assert: (dictionary keyAtValue: each value) equals: self defaultValue.

		dictionary add: each.
		self assert: (dictionary keyAtValue: each value) equals: each key].
%

category: 'tests'
method: OrderPreservingDictionaryTest
testNewFrom
	| dictionary copy |

	super testNewFrom.

	dictionary := self dictionaryClass newFrom: self orderedAssociations.
	dictionary defaultValue: self defaultValue.
	copy := self dictionaryClass newFrom: dictionary.
	self assert: copy defaultValue equals: dictionary defaultValue.
%

category: 'tests'
method: OrderPreservingDictionaryTest
testNewWithDefaultValue
	| dictionary |

	dictionary :=
		self dictionaryClass
			new: 10
			withDefaultValue: self defaultValue.
	self assert: dictionary defaultValue equals: self defaultValue.
%

category: 'tests'
method: OrderPreservingDictionaryTest
testRemoveAll
	| dictionary |

	super testRemoveAll.

	dictionary := self dictionaryWithOrderedAssociations.
	dictionary
		defaultValue: self defaultValue;
		removeAll.
	self assert: dictionary defaultValue equals: self defaultValue.
%

category: 'tests'
method: OrderPreservingDictionaryTest
testRemoveKey
	| dictionary |

	dictionary := self dictionaryWithOrderedAssociations.
	dictionary defaultValue: self defaultValue.
	self orderedAssociations withIndexDo: [:each :i |
		self assert: (dictionary removeKey: each key) equals: each value.
		self
			assertKey: each key
			wasRemovedfrom: dictionary.
		self
			assertIsDictionary: dictionary
			withOrderedAssociations: (self orderedAssociationsAllButFirst: i).

		self assert: (dictionary removeKey: each key) = self defaultValue]
%

category: 'tests'
method: OrderPreservingDictionaryTest
testSelect
	super testSelect.

	self assert:
		(self dictionaryWithOrderedAssociations
			defaultValue: self defaultValue;
			select: [:each | true]) defaultValue equals: self defaultValue.
%

! Class implementation for 'OrderPreservingIdentityDictionaryTest'

!		Instance methods for 'OrderPreservingIdentityDictionaryTest'

category: 'accessing'
method: OrderPreservingIdentityDictionaryTest
dictionaryClass
	^ OrderPreservingIdentityDictionary
%

category: 'testing'
method: OrderPreservingIdentityDictionaryTest
isTestingIdentityDictionary
	^ true
%

! Class implementation for 'OrderPreservingStringDictionaryTest'

!		Instance methods for 'OrderPreservingStringDictionaryTest'

category: 'accessing'
method: OrderPreservingStringDictionaryTest
dictionaryClass
	^ OrderPreservingStringDictionary
%

category: 'tests'
method: OrderPreservingStringDictionaryTest
testAssociationAt
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self assert: (dictionary associationAt: each key) isNil.
	
		dictionary add: each.
		self assert: (dictionary associationAt: each key) equals: each].
%

category: 'tests'
method: OrderPreservingStringDictionaryTest
testAt
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self assert: (dictionary at: each key) equals: ''.

		dictionary add: each.
		self assert: (dictionary at: each key) equals: each value].
%

category: 'tests'
method: OrderPreservingStringDictionaryTest
testKeyAtIdentityValue
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self assert: (dictionary keyAtIdentityValue: each value) equals: ''.

		dictionary add: each.
		self
			assert: (dictionary keyAtIdentityValue: each value) equals: each key;
			assert: (dictionary keyAtIdentityValue: each value copy) equals: ''].
%

category: 'tests'
method: OrderPreservingStringDictionaryTest
testKeyAtIndex
	| dictionary |

	dictionary := self emptyDictionary.
	self assert: (dictionary keyAtIndex: 0) equals: ''.
	self orderedAssociations withIndexDo: [:each :i |
		self assert: (dictionary keyAtIndex: i) equals: ''.

		dictionary add: each.
		self assert: (dictionary keyAtIndex: i) equals: each key]
%

category: 'tests'
method: OrderPreservingStringDictionaryTest
testKeyAtValue
	| dictionary |

	dictionary := self emptyDictionary.
	self orderedAssociations do: [:each |
		self assert: (dictionary keyAtValue: each value) equals: ''.

		dictionary add: each.
		self assert: (dictionary keyAtValue: each value) equals: each key]
%

category: 'tests'
method: OrderPreservingStringDictionaryTest
testRemoveKey
	| dictionary |

	dictionary := self dictionaryWithOrderedAssociations.
	self orderedAssociations withIndexDo: [:each :i |
		self assert: (dictionary removeKey: each key) equals: each value.
		self
			assertKey: each key
			wasRemovedfrom: dictionary.
		self
			assertIsDictionary: dictionary
			withOrderedAssociations: (self orderedAssociationsAllButFirst: i).

		self assert: (dictionary removeKey: each key) equals: '']
%

! Class implementation for 'OrderPreservingIdentityStringDictionaryTest'

!		Instance methods for 'OrderPreservingIdentityStringDictionaryTest'

category: 'accessing'
method: OrderPreservingIdentityStringDictionaryTest
dictionaryClass
	^ OrderPreservingIdentityStringDictionary
%

category: 'testing'
method: OrderPreservingIdentityStringDictionaryTest
isTestingIdentityDictionary
	^ true
%

! Class implementation for 'StandardOrderedIdentityDictionaryTest'

!		Instance methods for 'StandardOrderedIdentityDictionaryTest'

category: 'accessing'
method: StandardOrderedIdentityDictionaryTest
dictionaryClass
	^ StandardOrderedIdentityDictionary
%

category: 'testing'
method: StandardOrderedIdentityDictionaryTest
isTestingIdentityDictionary
	^ true
%

! Class extensions for 'AbstractDictionary'

!		Instance methods for 'AbstractDictionary'

category: '*Collections-OrderPreservingDictionary-GemStone'
method: AbstractDictionary
capacity
	^self tableSize
%

! Class extensions for 'Object'

!		Instance methods for 'Object'

category: '*Collections-OrderPreservingDictionary-Core'
method: Object
isOrderPreservingDictionary
	"Defined here because not all collections inherit from Collection,
	so just defining it in Collection and StandardOrderedDictionary
	and using #isCollection with #isOrderPreservingDictionary in
	StandardOrderedDictionary>>#= would trigger a DNU."

	^ false
%

! Class extensions for 'StandardOrderedDictionary'

!		Instance methods for 'StandardOrderedDictionary'

category: '*Collections-OrderPreservingDictionary-GemStone32-'
method: StandardOrderedDictionary
associations
	| associations i |

	associations := Array new: self size.
	i := 1.
	self associationsDo: [:each |
		associations at: i put: each.
		i := i + 1].
	^ associations.
%

