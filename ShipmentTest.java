package com.monsanto.mbt;


/**
 * Shipment test class
 *
 */
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;

public class ShipmentTest {
	
	private Shipment shipment;
	private Widget widget;
	
	MainClass mainClass = new MainClass();
	

    @Test
    public void testShipment_Sorted_By_Color(){
    	mainClass.shipment_Sorted_By_Color();
    }

    @Test
    public void testShipment_Sorted_By_Date(){
    	mainClass.shipment_Sorted_By_Date();

    }
    
    @Test
    public void test_Main_RelaseShipment(){
    	mainClass.relaseShipment();
    }
    
    @Test
    public void test_CreateWidget(){
    	
    	Scanner sc = new Scanner("Red, 03-05-2018");
    	WareHouse wareHouse = WareHouse.getInstance();
    	widget = new Widget(1, "Red", WidgetUtils.stringToDateConverter("03-05-2018"));
    	wareHouse.getWidgets().add(widget);
    	mainClass.createWidget(sc);
    	
    }
    
    @Test
    public void test_PrepareShipment(){
    	
    }
    
    @Test
    public void test_Shipment(){
    	shipment = Shipment.getInstance();
    	Set<Integer>  toBeReleasedIds =  new HashSet<Integer>();
    	toBeReleasedIds.add(1);
    	toBeReleasedIds.add(2);
    	shipment.setToBeReleasedIds(toBeReleasedIds);
    	assertEquals(shipment.getToBeReleasedIds(), toBeReleasedIds);
    	
    }
    
    


}
